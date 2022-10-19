import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import colors from '../../themes/colors';

const OUTER_CONTAINER = 70;
const CIRCLE_SIZE = 50;

const CustomCartTabBarButton: React.FC<BottomTabBarButtonProps> = ({
  children,
  onPress,
}) => {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.circle}>{children}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: OUTER_CONTAINER,
    height: OUTER_CONTAINER,
    backgroundColor: colors.white,
    borderTopLeftRadius: OUTER_CONTAINER / 2,
    borderTopRightRadius: OUTER_CONTAINER / 2,
    // backgroundColor: colors.white,
    top: -18,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  container: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: colors.primary,
    shadowOpacity: 0.7,
    shadowRadius: 5,
    zIndex: 10,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    zIndex: 10,
  },
});

export default CustomCartTabBarButton;
