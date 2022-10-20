import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {getHeaderTitle} from '@react-navigation/elements';
import colors from '../../../../themes/colors';
import {style as fontStyles} from '../../../../themes/fonts';

const HEADER_HEIGHT = 60;

export const HomeHeader: React.FC<NativeStackHeaderProps> = ({
  navigation,
  route,
  options,
  back,
}) => {
  const title = getHeaderTitle(options, route.name);
  const onPress = (): void => {
    navigation.navigate('');
  };
  const onSearch = () => {
    navigation.navigate('');
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.headerLeft} onPress={onPress}>
        <OcticonsIcon
          name="location"
          size={22}
          color={colors.primary}
          style={{marginRight: 6}}
        />
        <Text
          style={
            [
              fontStyles.large_bold,
              {marginRight: 6, color: colors.black},
            ] as any
          }>
          Choose an address
        </Text>
        <AntDesignIcon name="right" size={22} color={colors.black} />
      </Pressable>
      <Pressable onPress={onSearch}>
        <AntDesignIcon name="search1" size={22} color={colors.black} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADER_HEIGHT,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
