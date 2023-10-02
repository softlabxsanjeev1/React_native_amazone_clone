import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Iconics from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'

const Subheader = () => {
  return (
    <View style={styles.container}>
     <Iconics name='location-outline' size={10}/>
      <Text style={{fontSize:16}}>Deliver to username Pin </Text>
          <Antdesign name='down' size={10} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#b7ecef",
        paddingVertical:8,
        paddingHorizontal:10,
        flexDirection:"row",
        gap:9,
        alignItems:"center"
    }
})

export default Subheader