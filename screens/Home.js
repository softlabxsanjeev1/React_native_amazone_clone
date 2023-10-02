import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Category from '../components/Category'
import Carosal from '../components/Carosal'
import Services from '../components/Services'


const Home = () => {
  return (
    <View>
      <Header/>
      <Subheader/>
      <Category/>
      <Carosal/>
      <Services/>
    </View>
  )
}

export default Home