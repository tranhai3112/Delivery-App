import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {style as fontStyles} from '../../themes/fonts';
import colors from '../../themes/colors';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {
  SignInEmailScreenNavigationProp,
  AuthStackNavigatorParamList,
} from '../../navigation/stack/auth/AuthStackTypes';
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

interface AuthWrapperProps {
  children: React.ReactNode;
  title: string;
  showText?: boolean;
  outerText?: string;
  innerText?: string;
  navigateTo?: 'signin_email' | 'signup_email';
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
  title,
  outerText,
  innerText,
  navigateTo,
  showText = true,
}) => {
  const [textWidth, setTextWidth] = React.useState<number>(0);
  // const navigation = useNavigation<SignInEmailScreenNavigationProp>();
  const navigation = useNavigation<any>();

  const navigateToSignUp = React.useCallback(() => {
    navigation.navigate(navigateTo);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text style={[fontStyles.h2, styles.headerTitle] as any}>{title}</Text>
      {children}
      {showText && (
        <Text
          style={[
            styles.bottomText,
            {left: Math.floor((WINDOW_WIDTH - textWidth) / 2)},
          ]}
          onLayout={event => {
            setTextWidth(event.nativeEvent.layout.width);
          }}>
          {outerText}{' '}
          <Text style={{color: colors.primary}} onPress={navigateToSignUp}>
            {innerText}
          </Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    width: WINDOW_WIDTH / 2,
    marginBottom: 16,
  },
  bottomText: {
    position: 'absolute',
    top: WINDOW_HEIGHT - 80,
    left: WINDOW_WIDTH / 6,
    textAlign: 'center',
  },
});

export default React.memo(AuthWrapper);
