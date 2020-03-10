import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from './SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={text => setTerm(text)}
        onTermSubmitted={() => console.log('Term was submitted')}
      />
      <Text>{term}</Text>
    </View>
  )
}

export default SearchScreen
