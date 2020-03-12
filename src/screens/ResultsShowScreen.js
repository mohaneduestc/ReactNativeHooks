import React from 'react';
import { Text, View } from 'react-native';

const ResultsShowScreen = ({navigation}) => {
    console.log(navigation.getParam('id'))
    return(
    <View>
        <Text>ResultsShowScreen</Text>
    </View>
)};

export default ResultsShowScreen;
