import React from 'react'; // , { useState }
import { 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Alert,
  StatusBar,
  Dimensions,
  StyleSheet,
} from 'react-native';
// import { Checkbox } from 'react-native-elements'

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

import { TextItem } from '../components/TextItem'

import { TextItemThree } from '../components/TextItemThree'

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

  // const [isSelected, setSelected] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.push('Home')}>
          <Entypo name="home" size={50} color={colors.black} style={{paddingTop: 5}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.textStyleOne} onPress={() => navigation.push('Home')}>
          <TextItem style={styles.textStyleOne} text="Lista de Atos" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openUrl('https://www.kurytibametropole.org/')}>
          <TextItemThree 
            text="O propósito deste aplicativo é poder bla bla bla bla bla bla" 
          />
        </TouchableOpacity>

        {/* <Checkbox 
          title="testando"
          checkedIcon="check"
          uncheckedIcon="square-o"
          checkedColor="green"
          uncheckedColor="red"
          checked={isSelected}
          onPress={() => setSelected(!isSelected)}
        /> */}

      </ScrollView>
    </SafeAreaView>
  );
};