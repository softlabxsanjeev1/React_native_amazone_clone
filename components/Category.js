import { View, Text,StyleSheet, Image, ScrollView} from 'react-native'
import React from 'react'
import {Categories} from '../data/Categories'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Category = () => {
    const navigation = useNavigation()
  return (
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    horizontal style={styles.container}>
    {Categories.map((item,i) => (
        <View style={styles.category} key={i}>
        <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                <Image source={item.image} style={styles.imgstyle} />
                <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>           
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