import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    const name ="Mohaned";
    return(    
    <View>
        <Text>Getting Starting with react native</Text>
        <Text style={styles.textStyle}>Welcome {name}</Text>
    </View>
    )
};
const styles = StyleSheet.create({
    textStyle:{
        fontSize: 18
    }
})

export default ComponentScreen;
