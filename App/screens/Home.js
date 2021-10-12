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

import { TextItem } from '../components/TextItem';

import { TextItemTwo } from '../components/TextItemTwo';


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
    marginTop: 100,
    width: screen.width * 0.65,
    height: screen.height * 0.55,
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
    marginHorizontal: 50,
    marginTop: 50,
    borderColor: colors.black,
    borderWidth: 3,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  footer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 50,
    marginBottom:100,
    borderColor: colors.black,
    borderWidth: 3,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  textStyleOne: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 100,
  }
});

export default ({ navigation }) => {
  
  const atosArray = ['Comousar', 'Listaatos', 'Ato1']
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <TouchableOpacity 
          style={styles.imageContainer}
          onPress={() => openUrl('https://en.wikipedia.org/wiki/Ren_(Confucianism)')}
        > 
          <Image
            resizeMode='contain'
            source={require('../assets/images/g21600.png')} 
            style={styles.image} 
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.push('Comousar')} 
          style={styles.textStyleOne}
        >
          <TextItemTwo style={styles.textStyleOne} text="Como usar?" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.header}
          onPress={() => navigation.push('Listaatos')}
        >
          <TextItem text="Lista de Atos" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.header}
          onPress={() => navigation.push(atosArray[Math.floor(Math.random()*atosArray.length)])}
        >
          <TextItem text="Ato Aleatório" />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};