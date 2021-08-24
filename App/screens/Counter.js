import React, { useContext, createContext, useState, useEffect } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CheckBox } from 'react-native-elements'

import { Entypo } from '@expo/vector-icons';

const CounterContext = createContext(0);

const useCounter = () => useContext(CounterContext);

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isSelected, setSelected] = useState(true)

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  useEffect(() => {
    if (count !== 0) {
      AsyncStorage.setItem('DEMO_APP::COUNT_VALUE', `${count}`)
    }
  }, [count]);

  useEffect(() => {
    AsyncStorage.getItem('DEMO_APP::COUNT_VALUE').then((value) => {
      if (value) {
        setCount(parseInt(value, 10));
      }
    });
  }, []);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, isSelected, setSelected }}>
      {children}
    </CounterContext.Provider>
  );
};

const App = () => {
  const { count, increment, decrement, isSelected, setSelected } = useCounter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => increment()} />
      <Button title="Decrement" onPress={() => decrement()} />

      <CheckBox 
        checkedIcon="check"
        uncheckedIcon="square-o"
        checkedColor="purple"
        uncheckedColor="black"
        checked={isSelected}
        onPress={() => setSelected(!isSelected)}
        size={48}
      />

    </View>
  );
};

export default ({navigation}) => (
  <CounterContextProvider>
    <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.push('Home')}>
      <Entypo name="home" size={50} color='black' style={{paddingTop: 5}} />
    </TouchableOpacity>
    <App />
  </CounterContextProvider>
);
