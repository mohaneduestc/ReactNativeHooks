import React, { useState } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SqureScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const COLORINCREMENT = 15

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLORINCREMENT)}
        onDecrease={() => setRed(red - COLORINCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLORINCREMENT)}
        onDecrease={() => setGreen(green - COLORINCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLORINCREMENT)}
        onDecrease={() => setBlue(blue - COLORINCREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
      <Text>
        rgb({red}, {green}, {blue})
      </Text>
    </View>
  )
}

export default SqureScreen
