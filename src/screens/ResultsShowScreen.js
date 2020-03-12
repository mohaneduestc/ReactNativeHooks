import React from 'react';
import { Text, View } from 'react-native';

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    console.log(id) 
    return(
    <View>
        <Text>ResultsShowScreen</Text>
    </View>
)};

export default ResultsShowScreen;
