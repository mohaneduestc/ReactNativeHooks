import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

COLORINCREMENT = 1
const reducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'Increase':
      return {...state, couter:state.couter + action.payload}
    case 'Decrease':
      return {...state, couter:state.couter + action.payload}
    default:
      return state;
  }
}
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { couter: 0 })

  return (
    <View>
      <View style={{margin:20}}></View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'Increase', payload: COLORINCREMENT })}
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: 'Decrease', payload: -1 * COLORINCREMENT })
        }
      />
      <Text>Current Count: {state.couter}</Text>
    </View>
  )
}

export default CounterScreen
