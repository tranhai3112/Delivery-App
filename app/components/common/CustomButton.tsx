import React from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  StyleSheet,
  StyleProp,
  FlexStyle,
  View,
} from 'react-native';
import colors from '../../themes/colors';
import {style as fontStyles} from '../../themes/fonts';
import {Controller} from 'react-hook-form';

interface ICustomButton extends PressableProps {
  text?: string;
  containerStyle?: StyleProp<FlexStyle>;
  rippleEffect?: boolean;
}

const PRESSABLE_HEGHT = 50;

export const CustomButton: React.FC<ICustomButton> = ({
  text,
  containerStyle,
  onPress,
  rippleEffect = true,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable
        style={styles.pressable}
        android_ripple={{color: rippleEffect ? colors.gray : colors.primary}}
        onPress={onPress}>
        <Text style={[styles.text, fontStyles.medium_bold] as any}>{text}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  pressable: {
    backgroundColor: colors.primary,
    height: PRESSABLE_HEGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
});
