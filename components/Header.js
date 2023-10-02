import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Antdesign from 'react-native-vector-icons/AntDesign'

const Header = () => {
  return (
    <View style={styles.container}>  
      <View style={styles.inputbox}>
        <View style={styles.row}>
          <FontAwesome name='search' size={16} color='#1f1f1f' />
          <TextInput placeholder='Search product' placeholderTextColor="green"/>   
      </View>           
        <Antdesign name='scan1' size={22} color='#1f1f1f' />
    </View>  
      <FontAwesome name='microphone' size={22} color='#1f1f1f' />     
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddind:10,
        backgroundColor:"#9cecf0",
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:14,

    },
    inputbox:{
      flexDirection:"row",
      alignItems:"center",
      borderRadius:10,
      backgroundColor:"white",
      width:"90%",
      justifyContent:"space-between",
      marginVertical:12,
      paddingHorizontal:10,
      elevation:10
    },
    row:{
      flexDirection:"row",
      alignItems:"center",
      paddingVertical:6,
      gap:10

    }
})

export default Header