import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () =>{
    const friends =[
        {name:'Frinds #1', key:'1', Age: 20},
        {name:'Frinds #2', key:'2', Age: 20},
        {name:'Frinds #3', key:'3', Age: 20},
        {name:'Frinds #4', key:'4', Age: 20},
        {name:'Frinds #5', key:'5', Age: 20},
        {name:'Frinds #6', key:'6', Age: 20},
        {name:'Frinds #7', key:'7', Age: 20},
    ]
    return(
        <FlatList
            data={friends}
            renderItem={({item})=>{
                return  (
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textStyle}>
                            {item.name}
                        </Text>
                        <Text style={styles.textStyle}>    Age : {item.Age}</Text>
                    </View>
                    )
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 18,
        marginVertical:50
    }
})

export default ListScreen;
