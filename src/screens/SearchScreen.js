import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from './SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const searchApi = async (searchTerm) => {
      try{
          const response = await yelp.get('/search',{
              params:{
                  limit:50,
                  term: searchTerm,
                  location:'san jose'
              }
          })
          // console.log(response)
          setResults(response.data.businesses)

      }catch(err){
          console.log(err)
      }
  }
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={text => setTerm(text)}
        onTermSubmitted={()=>searchApi(term)}
      />
      <Text>We have found {results.length}</Text>
    </View>
  )
}

export default SearchScreen
