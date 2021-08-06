import React from 'react';
import { 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Alert, 
  StyleSheet, 
  StatusBar,
  Dimensions,
  Image } from 'react-native';

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
    paddingTop: 300,
    width: screen.width * 0.75,
    height: screen.height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screen.width * 1,
    height: screen.height * 0.3
  },
  header: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 50,
  },
});

export default ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <TouchableOpacity 
          style={styles.imageContainer}
          onPress={() => openUrl('https://en.wikipedia.org/wiki/Ren_(Confucianism)')}
        > 
          <Image 
            source={require('../assets/images/Simples-Atos.png')} 
            style={styles.image} 
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.push('Comousar')} 
          style={styles.header}
        >
          <TextItem text="Como Usar?" />
        </TouchableOpacity>

        <TextSeparator />

        <TouchableOpacity 
          style={styles.header}
          onPress={() => navigation.push('Listaatos')}
        >
          <TextItem text="Lista de Atos" />
        </TouchableOpacity>

        <TextSeparator />

        <TouchableOpacity 
          style={styles.header}
          onPress={() => navigation.push('Ato1')}
        >
          <TextItem text="Ato Aleatório" />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};