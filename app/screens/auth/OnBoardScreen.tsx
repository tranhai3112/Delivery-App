import React from 'react';
import {
  FlatList,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from 'react-native';
import colors from '../../themes/colors';
import {style as fontStyles} from '../../themes/fonts';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {SignInEmailScreenNavigationProp} from '../../navigation/stack/auth/AuthStackTypes';

const WINDOW_WIDTH = Dimensions.get('window').width;
const PADDING = 20;
const IMAGE_SIZE = 200;
const NEXT_BTN_SIZE = 50;

interface DataItems {
  item: {
    title: string;
    subTitle: string;
    id: string;
  };
  onPress: (id: string) => void;
}

const OnBoardScreenItem: React.FC<DataItems> = ({
  item: {title, subTitle, id},
  onPress,
}) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={require('../../assets/images/Apple_logo_black.png')}
        style={[styles.image]}
        resizeMode="contain"
      />
      <View style={{flex: 1}}>
        <Text
          style={[
            fontStyles.h5,
            {
              textAlign: 'center',
              color: colors.black,
              alignSelf: 'center',
              marginBottom: 8,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={{
            width: WINDOW_WIDTH - PADDING * 2,
            textAlign: 'center',
            alignSelf: 'center',
            padding: PADDING,
          }}>
          {subTitle}
        </Text>
        <View style={styles.processContainer}>
          <View style={styles.process}></View>
          <View style={styles.process}></View>
          <View style={styles.process}></View>
        </View>
        <View style={styles.navigate}>
          <Text style={{color: colors.gray2, left: PADDING + 5}}>Skip</Text>
          <Pressable onPress={() => onPress(id)} style={styles.next}>
            <AntdIcon name="arrowright" size={20} color={colors.white} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const DATA = [
  {
    id: '1',
    title: 'Order Quickly',
    subTitle: 'Order from the best restaurants with easy, on-demand delivery',
  },
  {
    id: '2',
    title: 'Free Delivery Offers',
    subTitle: 'Free delivery for new customers and other payment methods',
  },
  {
    id: '3',
    title: 'Friendly And Polite',
    subTitle:
      "Easily find your type of food craving and you'll get delivery in wide range",
  },
];

export const OnBoardScreen = () => {
  const navigation = useNavigation<SignInEmailScreenNavigationProp>();
  const flatListRef = React.useRef<FlatList>(null);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      contentStyle: {
        paddingTop: 30,
        paddingHorizontal: 0,
      },
    });
  }, []);
  const onPressNext = (id: string): void => {
    if (id === '3') {
      navigation.navigate('signin_email');
    } else {
      flatListRef.current?.scrollToOffset({
        offset: +id * WINDOW_WIDTH,
        animated: true,
      });
    }
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        ref={flatListRef}
        data={DATA}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
          return <OnBoardScreenItem item={item} onPress={onPressNext} />;
        }}
        horizontal
        pagingEnabled
      />
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 30,
    flex: 1,
    width: WINDOW_WIDTH,
  },
  navigate: {
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 12,
    width: WINDOW_WIDTH - PADDING,
  },
  next: {
    borderRadius: 12,
    backgroundColor: colors.primary,
    width: NEXT_BTN_SIZE,
    height: NEXT_BTN_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: PADDING,
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
    alignSelf: 'center',
    marginBottom: 70,
  },
  processContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  process: {
    width: 20,
    height: 10,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
  },
  container: {
    width: WINDOW_WIDTH * 3,
    height: '100%',
  },
});
