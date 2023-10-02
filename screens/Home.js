import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Subheader from '../components/Subheader'
import Category from '../components/Category'
import Carosal from '../components/Carosal'
import Services from '../components/Services'
import Deals from '../components/Deals'
import { ScrollView } from 'react-native'
import Brands from '../components/Brands'


const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header/>
      <Subheader/>
      <Category/>
      <Carosal/>
      <Services/>
      <Deals/>
      <Brands/>
    </ScrollView>
  )
}

export default Home