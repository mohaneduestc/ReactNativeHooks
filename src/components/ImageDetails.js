import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetails = ({ imageSource, title, score }) => {
  // console.log(props)
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Scroe - {score}</Text>
    </View>
  )
}

export default ImageDetails
