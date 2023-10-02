import { View, Text,StyleSheet, Image, ScrollView} from 'react-native'
import React from 'react'
import {Categories} from '../data/Categories'


const Category = () => {
  return (
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    horizontal style={styles.container}>
    {Categories.map((item,i) => (
        <View style={styles.category} key={i}>
            <Image source={item.image} style={styles.imgstyle} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    ))}
    </ScrollView>
  )
}

export default Category


const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "white",
        marginVertical:8,
        },

        imgstyle:{
            height:50,
            width:50,
            borderRadius:50,
            borderColor:"green",
            borderWidth:2,  
            padding:10,          
        },

        title:{
            color:"black",
            fontSize:15,
        },
        category:{
            paddingHorizontal:8,
            alignItems:"center"
        }
})