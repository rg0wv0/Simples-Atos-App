import React, { useState } from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  TouchableOpacity, 
  Linking, 
  Alert,
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';

import { CheckBox } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';

import { TextItem } from '../components/TextItem';

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
  },
  textStyleThree: {
    fontSize: 21,
    color: colors.text,
    flexDirection: "row",
  },
});

export default ({navigation}) => {

  const [isSelected, setSelected] = useState(true)
  const [isSelectedTwo, setSelectedTwo] = useState(false)
  const [isSelectedThree, setSelectedThree] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.push('Home')}>
          <Entypo name="home" size={50} color={colors.black} style={{paddingTop: 5}} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.textStyleOne} onPress={() => openUrl('https://www.kurytibametropole.org/')}>
          <TextItem style={styles.textStyleOne} text="Lista de Atos" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={{flexDirection:"row", alignItems:"center"}}
          onPress={() => navigation.push('Home')}
        >

          <CheckBox 
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="purple"
            uncheckedColor="black"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
            size={48}
          />
          
          <Text 
            style={styles.textStyleThree} 
          >
            Ato 1 - Lalala
          </Text>
          
        </TouchableOpacity>

        <TouchableOpacity 
          style={{flexDirection:"row", alignItems:"center"}}
          onPress={() => navigation.push('Home')}
        >

          <CheckBox 
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="purple"
            uncheckedColor="black"
            checked={isSelectedTwo}
            onPress={() => setSelectedTwo(!isSelectedTwo)}
            size={48}
          />

          <Text 
            style={styles.textStyleThree}
          >
            Ato 2 - Lalala
          </Text>

        </TouchableOpacity>

        <TouchableOpacity 
          style={{flexDirection:"row", alignItems:"center"}}
          onPress={() => navigation.push('Home')}
        >

          <CheckBox 
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="purple"
            uncheckedColor="black"
            checked={isSelectedThree}
            onPress={() => setSelectedThree(!isSelectedThree)}
            size={48}
          />

          <Text 
            style={styles.textStyleThree}
          >
            Ato 3 - Lalala
          </Text>

        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}


/*          
<CheckBox 
checkedIcon="check"
uncheckedIcon="square-o"
checkedColor="purple"
uncheckedColor="black"
checked={isSelected}
onPress={() => setSelected(!isSelected)}
size={48}
/>
*/