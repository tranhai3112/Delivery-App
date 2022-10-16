import React from 'react';
import {
  TextInput,
  TextInputProps,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
  TextStyle,
} from 'react-native';
import {style as fontStyles} from '../../themes/fonts';
import colors from '../../themes/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Controller, ControllerProps} from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';

interface ICustomTextInputProps extends TextInputProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputRef?: React.Ref<any>;
}
// cái này chịu
//https://stackoverflow.com/questions/43159887/make-a-single-property-optional-in-typescript
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type IControllerProps = PartialBy<ControllerProps, 'render'>;

const INPUT_HEIGHT = 50;

export const CustomTextInput: React.FC<
  ICustomTextInputProps & IControllerProps
> = ({
  label,
  control,
  rules,
  keyboardType,
  placeholder,
  containerStyle,
  inputStyle,
  secureTextEntry,
  inputRef,
  ...props
}) => {
  const [eyeVisible, setEyeVisible] = React.useState(secureTextEntry);
  return (
    <View style={[containerStyle]}>
      {label && <Text style={fontStyles.extralarge_bold as any}>{label}</Text>}
      <View>
        <Controller
          control={control}
          name={props.name}
          rules={rules}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <>
              {/* <LinearGradient
                style={styles.linearGradient}
                colors={[colors.white, colors.gray]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}> */}
              <TextInput
                placeholder={placeholder || label || ''}
                keyboardType={keyboardType}
                style={[
                  styles.input,
                  {
                    borderColor: error ? 'red' : colors.gray2,
                  },
                  inputStyle,
                ]}
                secureTextEntry={eyeVisible}
                value={value}
                onChangeText={onChange}
                maxLength={props.maxLength}
                autoFocus={props.autoFocus}
                ref={inputRef}
              />
              {/* </LinearGradient> */}
              {error && (
                <Text style={{color: 'red', alignSelf: 'stretch'}}>
                  {error.message || 'error'}
                </Text>
              )}
              {secureTextEntry && (
                <FeatherIcon
                  name={eyeVisible ? 'eye-off' : 'eye'}
                  color={colors.black}
                  size={INPUT_HEIGHT / 2}
                  style={styles.icon}
                  onPress={() => setEyeVisible(prevState => !prevState)}
                />
              )}
              {/* {!error && value && !secureTextEntry && (
                <FeatherIcon
                  name={'check'}
                  color={colors.primary}
                  size={INPUT_HEIGHT / 2}
                  style={styles.icon}
                />
              )} */}
            </>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 20,
    height: INPUT_HEIGHT,
    marginTop: 4,
  },
  input: {
    paddingHorizontal: 10,
    height: INPUT_HEIGHT,
    backgroundColor: colors.gray2,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 4,
  },
  icon: {
    position: 'absolute',
    top: INPUT_HEIGHT / 3,
    right: INPUT_HEIGHT / 3,
  },
});
