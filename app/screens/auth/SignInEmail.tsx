import React from 'react';
import {Text} from 'react-native';
import {
  CustomTextInput,
  CustomButton,
  Divider,
  ExternalLink,
} from '../../components/common';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import colors from '../../themes/colors';
import AuthWrapper from './AuthWrapper';
import {SignInEmailScreenNavigationProp} from '../../navigation/stack/auth/AuthStackTypes';
import {EMAIL_REGEX} from './common';

const BUTTON_MARGIN_TOP = 50;
const INPUT_MARGIN_BOTTOM = 6;

export const SignInEmail = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();
  const onSubmit = values => {
    console.log(values);
    reset();
  };
  const navigation = useNavigation<SignInEmailScreenNavigationProp>();
  const navigateToForgotPassword = React.useCallback(() => {
    reset();
    navigation.navigate('forgotPassword_screen1', {type: 'email'});
  }, []);
  return (
    <AuthWrapper
      title="Welcome Back."
      outerText="Don't have an account?"
      innerText="Register now"
      navigateTo="signup_email">
      <CustomTextInput
        label="Email"
        keyboardType="email-address"
        name="Email"
        containerStyle={{marginBottom: INPUT_MARGIN_BOTTOM}}
        control={control}
        rules={{
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          required: 'Email is required',
        }}
      />
      <CustomTextInput
        label="Password"
        secureTextEntry
        name="Password"
        containerStyle={{marginBottom: INPUT_MARGIN_BOTTOM}}
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters',
          },
        }}
      />
      <Text
        style={[colors.gray, {alignSelf: 'flex-end'}] as any}
        onPress={navigateToForgotPassword}>
        Forgot password?
      </Text>
      <CustomButton
        containerStyle={{marginTop: BUTTON_MARGIN_TOP}}
        onPress={handleSubmit(onSubmit)}
        text="Sign in"
      />
      <Divider verticalSpace={30} />
      <ExternalLink />
    </AuthWrapper>
  );
};
