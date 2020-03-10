import React from 'react'
import SearchScreen from './src/screens/SearchScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { enableScreens } from 'react-native-screens'

enableScreens()
const Stack = createNativeStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        // headerShown: false,
        // headerTintColor: 'white'
        headerLayoutPreset: 'center'
      }}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Bussiness Search',headerTitleStyle: { alignSelf: 'center' },}}
      />
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
