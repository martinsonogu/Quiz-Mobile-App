import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';


const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const Quiz = ({navigation}) => {
   const [questions, setQuestions] = useState();
   const [questionNumber, setQuestionNumber] = useState(0);
   const [options, setOptions] = useState([]);
   const [score, setScore] =useState(0);
   const [isLoading, setIsLoading] = useState(false);
  
    const getQuiz = async()=>{
        setIsLoading(true)
        const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986';
        const response = await fetch(url);
        const data = await response.json();
        setQuestions(data.results)
        setOptions(generateOptionsAndSHuffle(data.results[0]))
        setIsLoading(false)
    }
    useEffect(()=> {
        getQuiz();
    }, []);

    const handleNextPress = () => {
        setQuestionNumber(questionNumber + 1);
        setOptions(generateOptionsAndSHuffle(questions[questionNumber + 1]))
    }

    const generateOptionsAndSHuffle = (_question) => {
        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options
    }

    const handleSelectedOption = (selectedOption) => {
       if (selectedOption === questions[questionNumber].correct_answer) {
           setScore(score+10)
       }
       if (questionNumber !== questions.length-1) {
        setQuestionNumber(questionNumber + 1);
        setOptions(generateOptionsAndSHuffle(questions[questionNumber + 1]))
       }
       if (questionNumber === questions.length) {
        handleShowResult()
       }
    }

    const handleShowResult =() => {
        navigation.navigate("Result", {
            score: score
        })
    }
    return (
        <View style={styles.container}>
             {isLoading ? 
             <View style={styles.loadingContainer}>
                  <Text style={styles.loadingText}>Loading... </Text>
             </View> : questions && (
            <View style={styles.parent}>
                <View style={styles.top}>
                 <Text style={styles.question}>Question: {decodeURIComponent(questions[questionNumber].question)}  </Text>
                </View>
                <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[0])}>
                    <Text style={styles.option}>{decodeURIComponent(options[0])} </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[1])}>
                    <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[2])}>
                    <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelectedOption(options[3])}>
                    <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.bottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Prev</Text>
                </TouchableOpacity>
                {questionNumber !== questions.length-1 && (
                <TouchableOpacity onPress={handleNextPress} style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
                )}
                {questionNumber === questions.length-1 && (
                <TouchableOpacity onPress={handleShowResult} style={styles.button}>
                    <Text style={styles.buttonText}>RESULT</Text>
                </TouchableOpacity>
                )}
                {/*<TouchableOpacity onPress={() => navigation.navigate("Result")} style={styles.button}>
                    <Text style={styles.buttonText}>End</Text>
    </TouchableOpacity> */ }
                </View>
            </View>
             )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal:20, 
        height: '100%',
    },
    top: {
        marginVertical: 16
    },
    options: {
        marginVertical: 16,
        flex:1
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: '30%',
        backgroundColor: 'rgb(38,42,49)',
        borderRadius: 25,
        padding:12,
       paddingHorizontal: 12,
        alignItems: 'center',
        marginBottom: 50
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gold'
    },
    question: {
        fontSize:22
    },
    option: {
        fontSize:18,
        fontWeight: '500'
    },
    optionButton: {
        paddingVertical: 14,
        marginVertical: 6,
        backgroundColor: '#f1f2f6',
        paddingHorizontal: 14,
        borderRadius: 12
    },
    parent: {
        height: '100%'
    },
    loadingContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        fontSize: 26,
        fontWeight: "600",
        
    }
})

export default Quiz;
