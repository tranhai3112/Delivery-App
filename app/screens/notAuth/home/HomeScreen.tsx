import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import colors from '../../../themes/colors';
import {style as fontStyles} from '../../../themes/fonts';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEGHT = Dimensions.get('window').height;
const FLATLIST1_DATA = [
  {
    id: '1',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '2',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '3',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '4',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '5',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '6',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '7',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '8',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '9',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '10',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '11',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '12',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '13',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '14',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '15',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
  {
    id: '16',
    imagePath: require('../../../assets/images/Burger.png'),
    alt: 'burger',
  },
];

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/backgroundHome.png')}
        style={styles.image}
        resizeMode="cover"></Image>
      <View>
        <Text
          style={[fontStyles.h4, {fontWeight: 'bold', color: colors.black}]}>
          Categories
        </Text>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingTop: 6, paddingBottom: 20}}>
          <FlatList
            scrollEnabled={false}
            numColumns={Math.ceil(FLATLIST1_DATA.length / 2)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={FLATLIST1_DATA}
            renderItem={props => (
              <View style={styles.itemContainer}>
                <Image
                  source={props.item.imagePath}
                  style={[styles.itemImage]}
                />
                <Text style={{color: colors.black}}>{props.item.alt}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
  },
  image: {
    width: WINDOW_WIDTH * 0.9,
    height: WINDOW_HEGHT * 0.3,
    alignSelf: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  itemImage: {
    height: 40,
    width: 40,
  },
});
