import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    // console.log(props.navigation)
    return(
    <View>
        <Text>HomeScreen</Text>
        <Button 
            onPress={()=>navigation.navigate('Component')}
            title="Go to Componenets Demo"/>

        <Button 
            onPress={()=>navigation.navigate('List')}
            title="Go to List Demo"/>

        <Button 
            onPress={()=>navigation.navigate('Image')}
            title="Go to Image Demo"/>       
       
    </View>
)}

export default HomeScreen;
