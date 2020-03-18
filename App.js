import React, { useEffect } from 'react'
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { enableScreens } from 'react-native-screens'
import { ScreenOrientation } from 'expo'
enableScreens()
const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        gestureEnabled: true
      }}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Bussiness Search',
          headerTitleStyle: { alignSelf: 'center' }
        }}
      />
      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
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

