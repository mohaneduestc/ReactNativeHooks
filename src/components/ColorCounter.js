import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  // console.log(props)
  return (
    <View>
      <Text>{color}</Text>
      <Button  onPress={()=>onIncrease()} title={`Increase ${color}`} />
      <Button onPress={()=>onDecrease()} title={`Decrease ${color}`} />
    </View>
  )
}

export default ColorCounter
