import React, { useState } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize={false}
        placeholder="Write your name Here"
        onChangeText={(newValue) => setName(newValue)}
        value={name}
      />
      <Text>My name is {name}</Text>
      
        <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize={false}
        secureTextEntry={true}
        placeholder="Write your password Here"
        onChangeText={(pass) => setPassword(pass)}
        value={password}
      />
      {password.length<=5 &&  
      <Text>Your pass word must be more than 5 characters</Text>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})
export default TextScreen
