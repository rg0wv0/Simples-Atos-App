import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Alert, 
  StyleSheet, 
  StatusBar,
  View,
  Dimensions,
  Image } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

import { TextItem, TextSeparator } from '../components/TextItem'

const screen = Dimensions.get('window');
const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
  Alert.alert('Desculpe, algo deu errado.', 'Por favor tente de novo mais tarde.');
});
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    width: screen.width * 0.4,
    height: screen.height * 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
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
          <Entypo name="aircraft" size={50} color={colors.red} style={{marginLeft: 165, paddingTop: 10}} />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/planta-cor.png')} style={styles.image} resizeMode="contain" />
          <Image source={require('../assets/images/baloes-cor.png')} style={styles.image} resizeMode="contain" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};