import React from 'react';
import {CustomButton, CustomTextInput} from '../../components/common';
import {useForm, Control, useWatch, FieldValues} from 'react-hook-form';
import AuthWrapper from './AuthWrapper';

interface ForgotPassword3FormData {
  Password: string;
  ConfirmPassword: string;
}

export const ForgotPassword3 = () => {
  const {control, handleSubmit, reset, watch} = useForm<
    ForgotPassword3FormData | any
  >();
  const pwd = watch('Password');
  const onSubmit = (values: ForgotPassword3FormData): void => {
    console.log(values);
  };
  return (
    <AuthWrapper title="Reset Password.">
      <CustomTextInput
        name="Password"
        label="Password"
        containerStyle={{marginBottom: 10}}
        control={control}
        secureTextEntry
        rules={{
          required: 'password is required',
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters',
          },
        }}
      />
      <CustomTextInput
        name="ConfirmPassword"
        label="Confirm password"
        control={control}
        containerStyle={{marginBottom: 40}}
        secureTextEntry
        rules={{
          required: 'This field is required',
          minLength: {
            value: 8,
            message: 'Password should be at least 8 characters',
          },
          validate: (value: string): boolean | string =>
            value === pwd || 'password do not match',
        }}
      />
      <CustomButton text="Done" onPress={handleSubmit(onSubmit)} />
    </AuthWrapper>
  );
};
