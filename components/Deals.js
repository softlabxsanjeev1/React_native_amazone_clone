import { View, Text,StyleSheet, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import RecomendedProduct from '../assets/recommend.jpg'

const Deals = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Recommended  deals</Text>
        <Image source={RecomendedProduct} style={styles.image}/>
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={styles.offbtn}>
                <Text>18% off</Text>
            </TouchableOpacity>
            <Text style={{color:"red"}}> Deal</Text>
        </View>
          <View style={{ flexDirection: "row" }}>
              <Text style={styles.currntprice}> &#x20B9; 1,549.00</Text>
              <View style={{flexDirection:"row"}} >
                  <Text style={[{ color: "red" },]}> MRP </Text>
                  <Text style={{color: "red", textDecorationLine: 'line-through' }} >&#x20B9; 1,649.00</Text>
              </View>              
          </View>
          <Text style={styles.destext}> Men Turbo Bright Anti-Pollution Double Action Face Wash - Cleans Skin Deeply</Text>
          <TouchableOpacity>
              <Text style={styles.alldeals}>See all deals</Text>
          </TouchableOpacity>          
      </View>
  )
}

const styles = StyleSheet.create({
     container:{
        marginTop:10,
        paddingHorizontal:2,
        borderRadius:20
     },
     image:{
        height:230,
        width:"100%",
        marginVertical:10,
     },
     title:{
        fontSize:20,
        fontWeight:"bold",
        color:"black"
     },
     offbtn:{
        backgroundColor:"red",
        padding:3,
        paddingHorizontal:10,
        borderRadius:5,
        marginRight:5,
     },
     currntprice:{
        fontSize:17,
        marginVertical:4,
     },
     destext:{
         fontSize: 15,
         marginVertical:5
     },
     alldeals:{
        fontSize:15,
        color:"blue",
        marginVertical:5

     }



})

export default Deals