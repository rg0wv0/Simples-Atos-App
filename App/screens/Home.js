import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Alert, 
  StyleSheet, 
  StatusBar } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

import { TextItem, TextSeparator } from '../components/TextItem'

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
  Alert.alert('Desculpe, algo deu errado.', 'Por favor tente de novo mais tarde.');
});
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow,
  },
});

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        <TextItem 
          text="Home"
        />

        <TextSeparator />

        <TextItem 
          text="Olá, tá bem?"
        />

        <TouchableOpacity onPress={() => openUrl('https://www.kurytibametropole.org/')}>
          <Entypo name="aircraft" size={50} color={colors.red} style={{marginLeft: 165, paddingTop: 100}} />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};