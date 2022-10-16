import React from 'react';
import AuthWrapper from './AuthWrapper';
import {useNavigation} from '@react-navigation/native';
import {CustomButton, CustomTextInput} from '../../components/common';
import {useForm} from 'react-hook-form';
import {ForgotPasswordScreenNavigationProp} from '../../navigation/stack/auth/AuthStackTypes';
import {EMAIL_REGEX} from './common';

type ForgotPassword1FormData = {
  Email: string;
};

export const ForgotPassword1 = () => {
  const {control, handleSubmit} = useForm<ForgotPassword1FormData | any>();
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();
  const onSubmit = (values: ForgotPassword1FormData) => {
    navigation.navigate('forgotPassword_screen2', {
      name: values.Email,
      type: 'email',
    });
    console.log(values);
  };
  return (
    <AuthWrapper title="Forgot Password.">
      <CustomTextInput
        label="Email"
        keyboardType="email-address"
        control={control}
        name="Email"
        containerStyle={{marginBottom: 30}}
        rules={{
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          required: 'Email is required',
        }}
      />
      <CustomButton text="Submit" onPress={handleSubmit(onSubmit)} />
    </AuthWrapper>
  );
};
