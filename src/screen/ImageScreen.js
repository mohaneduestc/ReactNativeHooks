import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetails from '../components/ImageDetails'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Forst"
        imageSource={require('../../assets/forest.jpg')}
        score="7"
      />
      <ImageDetails
        title="Beach"
        imageSource={require('../../assets/mountain.jpg')}
        score="8"
      />
      <ImageDetails
        title="Mountain"
        imageSource={require('../../assets/beach.jpg')}
        score="9"
      />
    </View>
  )
}

export default ImageScreen
