import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  StatusBar,
  Dimensions,
  StyleSheet,
  Text
 } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

import { TextItem } from '../components/TextItem';

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
  },
  textStyleThree: {
    paddingHorizontal: 35,
    paddingVertical: 4,
    fontSize: 21,
    color: colors.text,
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "justify",
    marginBottom: 15,
  }
});

export default ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.push('Home')}>
          <Entypo name="home" size={50} color={colors.black} style={{paddingTop: 5}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.textStyleOne} onPress={() => navigation.push('Home')}>
          <TextItem style={styles.textStyleOne} text="Como Usar" />
        </TouchableOpacity>

        <Text style={styles.textStyleThree}> 
          O propósito deste aplicativo é sempre poder 
          bla bla bla bla bla bla e bla bla bla bla bla bla bl 
          e bla bla bla bla e bla bla bla
          e quando eu bla bla bla
          tb posso bla
        </Text>

        <Text style={styles.textStyleThree}> 
          Uhum ósito deste aplicativo é sempre poder 
          bla bla bla bla bla bla e bla bla bla bla bla bla bl 
          e bla bla bla bla e bla bla bla
          e quando eu bla bla bla
          tb posso bla
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};