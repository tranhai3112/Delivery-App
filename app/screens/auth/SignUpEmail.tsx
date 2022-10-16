import React from 'react';
import AuthWrapper from './AuthWrapper';
import {useNavigation} from '@react-navigation/native';
import {
  CustomTextInput,
  CustomButton,
  Divider,
  ExternalLink,
  CustomCheckbox,
} from '../../components/common';
import {useForm} from 'react-hook-form';
import {SignUpEmailScreenNavigationProp} from '../../navigation/stack/auth/AuthStackTypes';
import {EMAIL_REGEX} from './common';

const BUTTON_MARGIN_TOP = 10;
const INPUT_MARGIN_BOTTOM = 6;

export const SignUpEmail = () => {
  const navigation = useNavigation<SignUpEmailScreenNavigationProp>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm(); // {mode: 'onChange'}
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <AuthWrapper
      title="Create Account."
      outerText="Already have an account"
      innerText="Sign in"
      navigateTo="signin_email">
      <CustomTextInput
        label="Full name"
        control={control}
        containerStyle={{marginBottom: INPUT_MARGIN_BOTTOM}}
        name="fullName"
        rules={{required: 'full name is required'}}
      />
      <CustomTextInput
        label="Email address"
        control={control}
        keyboardType="email-address"
        name="Email"
        containerStyle={{marginBottom: INPUT_MARGIN_BOTTOM}}
        rules={{
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          required: 'full name is required',
        }}
      />
      <CustomTextInput
        label="Password"
        control={control}
        name="Password"
        secureTextEntry
        containerStyle={{marginBottom: INPUT_MARGIN_BOTTOM}}
        rules={{
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters',
          },
          required: 'password is required',
        }}
      />
      <CustomCheckbox
        control={control}
        name="termServices"
        rules={{required: 'Terms of service is required'}}
      />
      <CustomButton
        containerStyle={{marginTop: BUTTON_MARGIN_TOP}}
        onPress={handleSubmit(onSubmit)}
        text="Create account"
      />
      <Divider verticalSpace={16} />
      <ExternalLink />
    </AuthWrapper>
  );
};
