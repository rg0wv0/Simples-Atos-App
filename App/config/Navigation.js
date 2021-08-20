import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Comousar from '../screens/Comousar';
import Ato1 from '../screens/Ato1';
import Listaatos from '../screens/Listaatos';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Comousar">

    <MainStack.Screen 
      name="Home" 
      component={Home}
      options={{ headerShown: false }} 
    />

    <MainStack.Screen 
      name="Comousar" 
      component={Comousar}
      options={{ headerShown: false }} 
    />

    <MainStack.Screen 
      name="Ato1" 
      component={Ato1}
      options={{ headerShown: false }}  
    />

    <MainStack.Screen 
      name="Listaatos" 
      component={Listaatos}
      options={{ headerShown: false }} 
    />

  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);