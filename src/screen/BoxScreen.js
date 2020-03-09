import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>BoxScreen1</Text>
      <Text style={styles.textStyle2}>BoxScreen2</Text>
      <Text style={styles.textStyle3}>BoxScreen3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        borderColor:'black',
        justifyContent:'space-between',
        // justifyContent:'flex-start',
        flexDirection:'row',
        height:50
    },
    textStyle1:{
        borderWidth:3,
        borderColor:'red',
        // margin:20
    },
    textStyle2:{
        borderWidth:3,
        borderColor:'red',
        top:50
        // flex:1
    },
    textStyle3:{
        borderWidth:3,
        borderColor:'red',
        // margin:20
    }
})

export default BoxScreen
