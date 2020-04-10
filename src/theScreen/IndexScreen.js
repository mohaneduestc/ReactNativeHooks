import React, { useContext } from 'react'
import { Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={()=>navigation.navigate("Create")}>

        <Feather name="plus" size={30}/>
      </TouchableOpacity>
    ),
  })
  const { state, deleteBlogPost } = useContext(Context)
  return (
    <View>
      
      <FlatList
        data={state}
        key={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('Show', {id:item.id})}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 20,
                  justifyContent: 'space-between',
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderColor: 'gray'
                }}>
                <Text style={{ fontSize: 18 }}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}


export default IndexScreen
