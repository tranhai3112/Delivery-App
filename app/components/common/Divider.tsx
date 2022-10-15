import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import LinearGradient from 'react-native-linear-gradient';

const LINEARGRADIENT_WIDTH = 110;
const LINEARGRADIENT_OFFSET = -3;

interface IDividerProps {
  text?: string;
  verticalSpace?: number;
}

export const Divider: React.FC<IDividerProps> = ({text, verticalSpace}) => {
  return (
    <View style={[styles.container, {marginVertical: verticalSpace}]}>
      <LinearGradient
        colors={[colors.white, colors.black]}
        style={[styles.linearGradient]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View
          style={[
            styles.innerGradient,
            styles.innerGradientTop,
            {
              left: LINEARGRADIENT_OFFSET,
              transform: [{rotate: '-1deg'}],
            },
          ]}></View>
        <View
          style={[
            styles.innerGradient,
            styles.innerGradientBottom,
            {
              left: LINEARGRADIENT_OFFSET,
              transform: [{rotate: '1deg'}],
            },
          ]}></View>
      </LinearGradient>
      <Text style={colors.black as any}>{text}</Text>
      <LinearGradient
        colors={[colors.black, colors.white]}
        style={[styles.linearGradient]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <View
          style={[
            styles.innerGradient,
            styles.innerGradientTop,
            {right: LINEARGRADIENT_OFFSET, transform: [{rotate: '1deg'}]},
          ]}></View>
        <View
          style={[
            styles.innerGradient,
            styles.innerGradientBottom,
            {
              right: LINEARGRADIENT_OFFSET,
              transform: [{rotate: '-1deg'}],
            },
          ]}></View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  linearGradient: {
    height: 5,
    width: LINEARGRADIENT_WIDTH,
    borderRadius: 20,
  },
  innerGradient: {
    position: 'absolute',
    backgroundColor: colors.white,
  },

  innerGradientTop: {
    top: -1,
    width: LINEARGRADIENT_WIDTH - LINEARGRADIENT_OFFSET,
    height: 2.5,
  },
  innerGradientBottom: {
    bottom: -1,
    width: LINEARGRADIENT_WIDTH - LINEARGRADIENT_OFFSET,
    height: 2.5,
  },
});

Divider.defaultProps = {
  text: 'Or continue with',
  verticalSpace: 10,
};
