import React from 'react';
import { 
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

import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';

import { TextItem, TextSeparator } from '../components/TextItem';


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
    width: screen.width * 0.2,
    height: screen.height * 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width * 1,
    height: screen.height * 0.5
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push('Comousar')}>
            <Entypo name="cog" size={32} color={colors.red} />
          </TouchableOpacity>
        </SafeAreaView>
        
        <TouchableOpacity onPress={() => navigation.push('Ato1')}>
          <TextItem text="Home" />
        </TouchableOpacity>

        <TextSeparator />

        <TextItem 
          text="Olá, que tal?"
        />

        <TouchableOpacity onPress={() => navigation.push('Ato1')}>
          <Entypo name="aircraft" size={50} color={colors.red} style={{marginLeft: 165, paddingTop: 50}} />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => openUrl('https://www.kurytibametropole.org/')}>
            <Image source={require('../assets/images/planta-cor.png')} resizeMode="contain" style={styles.image} />
          </TouchableOpacity>

          <Image source={require('../assets/images/baloes-cor.png')} resizeMode="contain" style={styles.image} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};