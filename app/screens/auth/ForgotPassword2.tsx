import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AuthWrapper from './AuthWrapper';
import {CustomTextInput, CustomButton} from '../../components/common';
import {useForm} from 'react-hook-form';
import colors from '../../themes/colors';
import {style as fontStyles} from '../../themes/fonts';
import {
  ForgotPassword2ScreenRouteProp,
  ForgotPassword2ScreenNavigationProp,
} from '../../navigation/stack/auth/AuthStackTypes';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
type ForgotPassword2FormData = {
  number1: number | string;
  number2: number | string;
  number3: number | string;
  number4: number | string;
};

const INPUT_SIZE = 70;

export const ForgotPassword2 = () => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    formState: {isDirty, dirtyFields},
  } = useForm<ForgotPassword2FormData | any>({
    defaultValues: {number1: '', number2: '', number3: '', number4: ''},
  });
  const n1Ref = React.useRef<TextInput>();
  const n2Ref = React.useRef<TextInput>();
  const n3Ref = React.useRef<TextInput>();
  const n4Ref = React.useRef<TextInput>();
  const n1 = watch('number1');
  const n2 = watch('number2');
  const n3 = watch('number3');
  const n4 = watch('number4');
  const navigation = useNavigation<any>();
  const {params} = useRoute<ForgotPassword2ScreenRouteProp>();
  const onSubmit = (values: ForgotPassword2FormData): void => {
    console.log(values);
    navigation.navigate('forgotPassword_screen3');
  };
  React.useEffect(() => {
    // forward
    console.log(dirtyFields);

    if (n1) n2Ref.current?.focus();
    if (n2) n3Ref.current?.focus();
    if (n3) n4Ref.current?.focus();
    if (n1 && n2 && n3 && n4) console.log('');
    // onSubmit({number1: n1, number2: n2, number3: n3, number4: n4});
    // if (!n1) n1Ref.current?.focus();
    // else if (!n2) n1Ref.current?.focus();
    // else if (!n3) n2Ref.current?.focus();
    // else if (!n4) console.log('');
    // backward
  }, [n1, n2, n3, n4]);
  const ReSendCode = (): void => {};
  return (
    <AuthWrapper title="Verify Email Number.">
      <Text style={fontStyles.medium_regular}>
        I send the authorization code to
      </Text>
      <Text style={fontStyles.medium_regular}>
        {params.name} by {params.type}. Please enter the code below.
      </Text>
      <View style={styles.inputWrapper}>
        <CustomTextInput
          keyboardType="decimal-pad"
          control={control}
          maxLength={1}
          name="number1"
          inputStyle={styles.input}
          rules={{
            required: true,
          }}
          autoFocus
          inputRef={n1Ref}
        />
        <CustomTextInput
          keyboardType="decimal-pad"
          control={control}
          maxLength={1}
          name="number2"
          inputStyle={styles.input}
          rules={{
            required: true,
          }}
          inputRef={n2Ref}
        />
        <CustomTextInput
          keyboardType="decimal-pad"
          control={control}
          maxLength={1}
          name="number3"
          inputStyle={styles.input}
          rules={{
            required: true,
          }}
          inputRef={n3Ref}
        />
        <CustomTextInput
          keyboardType="decimal-pad"
          control={control}
          maxLength={1}
          name="number4"
          inputStyle={styles.input}
          rules={{
            required: true,
          }}
          inputRef={n4Ref}
        />
      </View>
      <CustomButton text="Continue" onPress={handleSubmit(onSubmit)} />
      <Text style={styles.textWrapper}>
        Didn't receive code?{' '}
        <Text style={{color: colors.primary} as any} onPress={ReSendCode}>
          Resend Again
        </Text>
      </Text>
    </AuthWrapper>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 30,
  },
  input: {
    width: INPUT_SIZE,
    height: INPUT_SIZE,
    textAlign: 'center',
    ...fontStyles.h4,
    color: colors.black,
  },
  textWrapper: {
    textAlign: 'center',
    marginTop: 30,
  },
});
