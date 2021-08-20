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
  },
  textStyleFour: {
    paddingHorizontal: 35,
    paddingVertical: 4,
    fontSize: 21,
    color: colors.text,
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "justify",
    marginBottom: 40,
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
          <TextItem style={styles.textStyleOne} text="Como Usar?" />
        </TouchableOpacity>

        <Text style={styles.textStyleThree}> 
          O propósito deste aplicativo é oferecer um conjunto
          de simples atos que, quando realizados, possam trazer
          certas experiências não tão comuns no cotidiano de cada pessoa.
        </Text>

        <Text style={styles.textStyleThree}> 
          Sendo assim, recomendamos que você visualize a Lista de Atos
          e escolha realizar os que mais te interessem. 
        </Text>

        <Text style={styles.textStyleThree}> 
          Ou, se preferir, você também pode clicar no botão Ato Aleatório
          para receber um ato surpresa. 
        </Text>

        <Text style={styles.textStyleThree}> 
          Cada ano que passar, vamos criar uma nova lista com novos atos
          para que cada novo ano seja repleto de novas oportunidades.
        </Text>

        <Text style={styles.textStyleFour}>
          Esperamos que estes simples atos possam te tirar um pouco da rotina e
          do automático, e te trazer novas aventuras e memórias! 
        </Text>
    
      </ScrollView>
    </SafeAreaView>
  );
};