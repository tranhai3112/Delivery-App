import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const IMAGE_WRAPPER_SIZE = 70;

export const ExternalLink = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/Apple_logo_black.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/Facebook_Logo.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/Google_Logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: colors.gray2,
    width: IMAGE_WRAPPER_SIZE,
    height: IMAGE_WRAPPER_SIZE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: IMAGE_WRAPPER_SIZE / 2,
    height: IMAGE_WRAPPER_SIZE / 2,
    resizeMode: 'contain',
  },
});
