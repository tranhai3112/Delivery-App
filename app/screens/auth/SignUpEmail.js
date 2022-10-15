import React from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import {style as fontStyles} from '../../themes/fonts';
import {
  CustomTextInput,
  CustomButton,
  Divider,
  ExternalLink,
} from '../../components/common';
import {useForm} from 'react-hook-form';
import colors from '../../themes/colors';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BUTTON_MARGIN_TOP = 50;
const INPUT_MARGIN_BOTTOM = 12;
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const SignUpEmail = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSubmit = values => {
    console.log(values);
  };
  return (
    <View>
      <Text style={[fontStyles.h2, styles.headerTitle]}>Welcome Back.</Text>
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
      <Text style={[colors.gray, {alignSelf: 'flex-end'}]}>
        Forgot password?
      </Text>
      <CustomButton
        containerStyle={{marginTop: BUTTON_MARGIN_TOP}}
        onPress={handleSubmit(onSubmit)}
        text="Sign in"
      />
      <Divider verticalSpace={30} />
      <ExternalLink />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    width: WINDOW_WIDTH / 2,
    marginBottom: 16,
  },
});
