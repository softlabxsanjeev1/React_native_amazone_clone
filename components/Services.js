import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import PayBills from '../assets/pay-bills.jpeg';
import ScanQR from '../assets/scan-qr.jpeg';
import Service1 from '../assets/service1.jpeg'
import {RecentSearchData} from '../data/RecentSearchData'


const Services = () => {
    return (
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        >
            <View style={styles.servicecontainer}>
                <View style={styles.row}>
                    <View style={styles.innercontainer}>
                        <Image source={AmazonPay} style={styles.imgstyle} />
                        <Text style={styles.title}>Pay</Text>
                    </View>
                    <View style={styles.innercontainer}>
                        <Image source={SendMoney} style={styles.imgstyle} />
                        <Text style={styles.title}>Send Money</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.innercontainer}>
                        <Image source={PayBills} style={styles.imgstyle} />
                        <Text style={styles.title}>PayBills</Text>
                    </View>
                    <View style={styles.innercontainer}>
                        <Image source={ScanQR} style={styles.imgstyle} />
                        <Text style={styles.title}>Scan QR</Text>
                    </View>
                </View>
            </View>
            {/* recent search */}
            {RecentSearchData.map((item,i) =>(
                <View style={styles.outercontainer} key={i}>
                    <Text style={styles.recentsearch}>{item.title}</Text>
                    <Image source={item.image} style={styles.serviceimage} />
                </View>
            ))
            }            
        </ScrollView>        
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:5,
        padding:5,
    },
    servicecontainer: {
        padding: 5,
        backgroundColor: "#f0eaea",
        borderRadius:5,
        elevation:5,
        paddingHorizontal:10,
    },
    imgstyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
    },
    row: {
        flexDirection: "row"
    },
    title: {
        color: "black",
        fontSize: 12,
    },
    innercontainer: {
        padding:7,
        alignItems:"center",
        paddingTop:10,
        justifyContent:"center",
    },
    outercontainer:{
        backgroundColor:"#ece2e2",
        padding:5,
        marginHorizontal:5,
        borderRadius:20,
        width:140,

    },
    serviceimage:{
        width:"100%",
        height:120,
        borderRadius:10,
        marginBottom:5,
    },
    recentsearch:{
        fontSize:15,
        color:"black",
        marginBottom:5,
        textAlign:"center",
        borderRadius:20,
        marginVertical:5,
    }
})

export default Services