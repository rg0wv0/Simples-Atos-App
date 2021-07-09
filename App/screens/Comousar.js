import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

import { TextItem, TextSeparator } from '../components/TextItem'

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
  Alert.alert('Desculpe, algo deu errado.', 'Por favor tente de novo mais tarde.');
});
}

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

        <TextItem 
          text="Como Usar"
          rightIcon={
            <Entypo name="heart" size={20} color={colors.red} />
          }
        />

        <TextSeparator />

        <TextItem 
          text="Olá, tudo bem?"
        />

        <TouchableOpacity onPress={() => openUrl('https://www.kurytibametropole.org/')}>
          <Entypo name="heart" size={50} color={colors.red} style={{marginLeft: 165, paddingTop: 100}} />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};