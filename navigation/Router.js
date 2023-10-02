import React from 'react'
import Home from '../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductScreen from '../screens/ProductScreen';
import { NavigationContainer } from '@react-navigation/native';
const Router = () => {
   const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home'
          component={Home}
        />
        <Stack.Screen name='product'
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>    
  )
}

export default Router