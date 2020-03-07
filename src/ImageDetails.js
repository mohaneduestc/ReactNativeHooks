import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetails = (props) =>{
    console.log(props)
    return(
        <View>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
        </View>
    )
}

export default ImageDetails;