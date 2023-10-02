import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Brand1 from '../assets/brand1.jpeg'
import Brand2 from '../assets/brand2.jpeg'
import Brand3 from '../assets/brand3.jpeg'
import Brand4 from '../assets/brand4.jpeg'

const Brands = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.title}>Brands of the day</Text>
                <View style={styles.row}>
                    <View style={styles.brands}>
                        <Image source={Brand2} style={styles.image} />
                        <Text style={styles.brandtitle}>Colorfit Icon 2 1.8'' Display with Bluetooth Calling, AI Voice Assistant </Text>
                    </View>
                    <View style={styles.brands}>
                        <Image source={Brand1} style={styles.image} />
                        <Text style={styles.brandtitle}>Min. 20% off | on Himalya products</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.brands}>
                        <Image source={Brand3} style={styles.image} />
                        <Text style={styles.brandtitle}>Synthetic Sole Material: Rubber Pattern: Solid Fastening</Text>
                    </View>
                    <View style={styles.brands}>
                        <Image source={Brand4} style={styles.image} />
                        <Text style={styles.brandtitle}>Zebronics Zeb-Space Deck Pro Wireless Bluetooth 40W</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },
    innercontainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        padding: 10,
    },
    image: {
        height: 150,
        width: '100%',
        borderRadius: 10
    },
    row: {
        flexDirection: "row",
    },
    brands: {
        width: "50%",
        padding: 10,
    },
    brandtitle:{
        fontSize:13,
        marginTop:10,
        color:"black",
    }
})

export default Brands