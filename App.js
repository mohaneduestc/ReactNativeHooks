import React from 'react'
import HomeScreen from './src/screen/HomeScreen'
import ComponentScreen from './src/screen/ComponentScreen'
import ListScreen from './src/screen/ListScreen'
import ImageScreen from './src/screen/ImageScreen'
import CounterScreen from './src/screen/CounterScreen'
import ColorScreen from './src/screen/ColorScreen'
import SqureScreen from './src/screen/SqureScreen'
import TextScreen from './src/screen/TextScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'

enableScreens()
const Stack = createNativeStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white'
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Component" component={ComponentScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Image" component={ImageScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
      <Stack.Screen name="Color" component={ColorScreen} />
      <Stack.Screen name="Sqaure" component={SqureScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
