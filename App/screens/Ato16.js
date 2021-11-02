import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

import { TextItem } from '../components/TextItem'

import { TextItemThree } from '../components/TextItemThree'

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  image: {
    paddingTop: 300,
    width: screen.width * 0.45,
    height: screen.height * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyleOne: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  }
});

export default ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.push('Listaatos')}>
          <Entypo name="list" size={50} color={colors.black} style={{paddingTop: 5}} />
        </TouchableOpacity>

        <TextItem style={styles.textStyleOne} text="Ato 16" />

        <TextItemThree 
          text="Esse é o Ato número 16" 
        />

      </ScrollView>
    </SafeAreaView>
  );
};