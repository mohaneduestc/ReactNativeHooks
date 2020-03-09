import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Component')}
        title="Go to Componenets Demo"
      />

      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"
      />

      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Sqaure')}
        title="Go to Sqaure Demo"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"
      />
    </View>
  )
}

export default HomeScreen
