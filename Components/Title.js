import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Title = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>The Riddler</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize:28,
        fontWeight: '600'
    },
})

export default Title;
