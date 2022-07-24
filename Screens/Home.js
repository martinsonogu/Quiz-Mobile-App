import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Title from '../Components/Title';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.bannerContainer}>
                <Image source={require('../assets/QuizImage.png')}
                style={styles.banner}
                resizeMode="contain"
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal:20, 
        height: '100%',
    },
    bannerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    banner: {
        height: 300,
        width: 300
    },
    button: {
        width: '80%',
        backgroundColor: 'rgb(38,42,49)',
        borderRadius: 20,
        padding:15,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        marginBottom: 50
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'gold'
    },
})

export default Home;
