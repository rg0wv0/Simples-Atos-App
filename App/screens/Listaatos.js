import React, { useEffect } from 'react';
import { 
  SafeAreaView, 
  TouchableOpacity, 
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';


import { useSelector, useDispatch } from 'react-redux';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { getBooks, addBookmark, removeBookmark } from '../redux/actions';





export default ( /* {navigation} */ ) => {
  const { books, bookmarks } = useSelector(state => state.booksReducer);
  const dispatch = useDispatch();

  const fetchBooks = () => dispatch(getBooks());
  const addToBookmarkList = book => dispatch(addBookmark(book));
  const removeFromBookmarkList = book => dispatch(removeBookmark(book));

  useEffect(() => {
    fetchBooks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddBookmark = book => {
    addToBookmarkList(book);
  };

  const handleRemoveBookmark = book => {
    removeFromBookmarkList(book);
  };

  const ifExists = book => {
    if (bookmarks.filter(item => item.id === book.id).length > 0) {
      return true;
    }

    return false;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ marginVertical: 12 }}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          {/* Book Cover */}
          <Image
            source={{ uri: item.image_url }}
            resizeMode='cover'
            style={{ width: 100, height: 150, borderRadius: 10 }}
          />
          {/* Book Metadata */}
          <View style={{ flex: 1, marginLeft: 12 }}>
            {/* Book Title */}
            <View>
              <Text style={{ fontSize: 22, paddingRight: 16, color: 'white' }}>
                {item.title}
              </Text>
            </View>
            {/* Meta info */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center'
              }}
            >
              <MaterialCommunityIcons
                color='#64676D'
                name='book-open-page-variant'
                size={20}
              />
              <Text style={{ fontSize: 14, paddingLeft: 10, color: '#64676D' }}>
                {item.num_pages}
              </Text>
              <MaterialCommunityIcons
                color='#64676D'
                name='star'
                size={20}
                style={{ paddingLeft: 16 }}
              />
              <Text style={{ fontSize: 14, paddingLeft: 10, color: '#64676D' }}>
                {item.rating}
              </Text>
            </View>
            {/* Buttons */}
            <View style={{ marginTop: 14 }}>
              <TouchableOpacity
                onPress={() =>
                  ifExists(item)
                    ? handleRemoveBookmark(item)
                    : handleAddBookmark(item)
                }
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: ifExists(item) ? '#F96D41' : '#2D3038',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40
                }}
              >
                <MaterialCommunityIcons
                  color={ifExists(item) ? 'white' : '#64676D'}
                  size={24}
                  name={ifExists(item) ? 'bookmark-outline' : 'bookmark'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1B26' }}>
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: 'white', fontSize: 22 }}>Bestsellers</Text>
        <View style={{ flex: 1, marginTop: 8 }}>
          <FlatList
            data={books}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}









/* 

const screen = Dimensions.get('window');


return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

        <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.push('Home')}>
          <MaterialCommunityIcons name="home" size={50} color={colors.black} style={{paddingTop: 5}} />
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

        <View style={{ marginTop: 14 }}>
          <TouchableOpacity
            onPress={() =>
              ifExists(item)
                ? handleRemoveBookmark(item)
                : handleAddBookmark(item)
            }
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              padding: 2,
              backgroundColor: ifExists(item) ? '#F96D41' : '#2D3038',
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 40
            }}
          >
            <MaterialCommunityIcons
              color={ifExists(item) ? 'white' : '#64676D'}
              size={24}
              name={ifExists(item) ? 'bookmark-outline' : 'bookmark'}
            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );



}


         
<CheckBox 
checkedIcon="check"
uncheckedIcon="square-o"
checkedColor="purple"
uncheckedColor="black"
checked={isSelected}
onPress={() => setSelected(!isSelected)}
size={48}
/>

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

import colors from '../constants/colors';

*/