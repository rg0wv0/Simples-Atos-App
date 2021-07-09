import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Alert,
  StatusBar } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

import { TextItem, TextSeparator } from '../components/TextItem'

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
  Alert.alert('Desculpe, algo deu errado.', 'Por favor tente de novo mais tarde.');
});
}

export default ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        <TextItem text="Como Usar" />

        <TextSeparator />

        <TouchableOpacity onPress={() => openUrl('https://www.kurytibametropole.org/')}>
          <TextItem text="Olá, tudo bem?" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.push('Ato1')}>
          <Entypo name="heart" size={50} color={colors.red} style={{marginLeft: 165, paddingTop: 100}} />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};