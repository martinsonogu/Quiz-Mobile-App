import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Result = ({navigation, route}) => {
const {score} = route.params
    let rawscore = score
    let perc = Math.floor((rawscore/60) * 100)
    

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <Text style={styles.text}>Result</Text>
              </View>
              <View style={styles.bannerContainer}>
              <Image source={{uri:'https://cdni.iconscout.com/illustration/premium/preview/team-victory-5303612-4423551.png?w=0&h=1400'}}
                style={styles.banner}
                resizeMode="contain"
                />
              </View>
              <View style={styles.scoreboard}>
              <Text style={styles.scoreboardText}>Your Score is: {rawscore} </Text>
               <Text style={styles.scoreboardText}>Your Score is: {perc}% </Text>
              </View>
              
              <View>
                  <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                      <Text style={styles.buttonText}>Home </Text>
                  </TouchableOpacity>
              </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal:20, 
        height: '100%',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    text: {
        fontSize:30,
        fontWeight: '600',
    },
    bannerContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner: {
        height: 300,
        width: 300
    },
    scoreboard: {
        marginVertical: 10,
        height:250,
        width: '80%',
        backgroundColor: '#edede9',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20
    },
    scoreboardText: {
        fontSize:28,

    },
    button: {
        width: '90%',
        backgroundColor: 'rgb(38,42,49)',
        borderRadius: 25,
        padding:12,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical:30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gold'
    },
})

export default Result;
