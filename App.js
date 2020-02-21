import React from 'react';
import HomeScreen from './src/HomeScreen';
import ComponentScreen from './src/ComponentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

enableScreens();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      headerTintColor: 'white',
       }}>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        />
      <Stack.Screen 
        name="Component" 
        component={ComponentScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
