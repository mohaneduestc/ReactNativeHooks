import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../ImageDetails';

const ImageScreen = () =>{
    return(
        <View>
            <ImageDetails title="Forst" imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetails title="Beach" imageSource={require('../../assets/mountain.jpg')}/>
            <ImageDetails title="Mountain" imageSource={require('../../assets/beach.jpg')}/>
        </View>
    )
}

export default ImageScreen;