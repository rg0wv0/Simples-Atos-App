import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../redux/store';

import Home from '../screens/Home';
import Comousar from '../screens/Comousar';

import Ato1 from '../screens/Ato1';
import Ato2 from '../screens/Ato2';
import Ato3 from '../screens/Ato3';
import Ato4 from '../screens/Ato4';
import Ato5 from '../screens/Ato5';
import Ato6 from '../screens/Ato6';
import Ato7 from '../screens/Ato7';
import Ato8 from '../screens/Ato8';
import Ato9 from '../screens/Ato9';
import Ato10 from '../screens/Ato10';
import Ato11 from '../screens/Ato11';
import Ato12 from '../screens/Ato12';
import Ato13 from '../screens/Ato13';
import Ato14 from '../screens/Ato14';
import Ato15 from '../screens/Ato15';
import Ato16 from '../screens/Ato16';
import Ato17 from '../screens/Ato17';
import Ato18 from '../screens/Ato18';
import Ato19 from '../screens/Ato19';
import Ato20 from '../screens/Ato20';

import Listaatos from '../screens/Listaatos';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName="Home">

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
      name="Ato2" 
      component={Ato2}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato3" 
      component={Ato3}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato4" 
      component={Ato4}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato5" 
      component={Ato5}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato6" 
      component={Ato6}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato7" 
      component={Ato7}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato8" 
      component={Ato8}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato9" 
      component={Ato9}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato10" 
      component={Ato10}
      options={{ headerShown: false }}  
    />
        
    <MainStack.Screen 
      name="Ato11" 
      component={Ato11}
      options={{ headerShown: false }}  
    />
        
    <MainStack.Screen 
      name="Ato12" 
      component={Ato12}
      options={{ headerShown: false }}  
    />
            
    <MainStack.Screen 
      name="Ato13" 
      component={Ato13}
      options={{ headerShown: false }}  
    />
        
    <MainStack.Screen 
      name="Ato14" 
      component={Ato14}
      options={{ headerShown: false }}  
    />
            
    <MainStack.Screen 
      name="Ato15" 
      component={Ato15}
      options={{ headerShown: false }}  
    />
            
    <MainStack.Screen 
      name="Ato16" 
      component={Ato16}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato17" 
      component={Ato17}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato18" 
      component={Ato18}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato19" 
      component={Ato19}
      options={{ headerShown: false }}  
    />
    
    <MainStack.Screen 
      name="Ato20" 
      component={Ato20}
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
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <MainStackScreen />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);