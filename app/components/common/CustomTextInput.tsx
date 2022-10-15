import React from 'react';
import {
  TextInput,
  TextInputProps,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import {style as fontStyles} from '../../themes/fonts';
import colors from '../../themes/colors';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Controller, ControllerProps} from 'react-hook-form';

interface ICustomTextInputProps extends TextInputProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
}
const INPUT_HEIGHT = 50;

export const CustomTextInput: React.FC<
  ICustomTextInputProps & ControllerProps
> = ({
  label,
  control,
  rules,
  keyboardType,
  placeholder,
  containerStyle,
  secureTextEntry,
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
              <TextInput
                placeholder={placeholder || label || ''}
                keyboardType={keyboardType}
                style={[
                  styles.input,
                  {borderColor: error ? 'red' : colors.black},
                ]}
                secureTextEntry={eyeVisible}
                value={value}
                onChangeText={onChange}
              />
              {error && (
                <Text style={{color: 'red', alignSelf: 'stretch'}}>
                  {error.message || 'error'}
                </Text>
              )}
            </>
          )}
        />

        {secureTextEntry && (
          <FeatherIcon
            name={eyeVisible ? 'eye-off' : 'eye'}
            color={colors.black}
            size={INPUT_HEIGHT / 2}
            style={styles.password}
            onPress={() => setEyeVisible(prevState => !prevState)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    // borderColor: colors.black,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 4,
    height: INPUT_HEIGHT,
  },
  password: {
    position: 'absolute',
    top: INPUT_HEIGHT / 3,
    right: INPUT_HEIGHT / 3,
  },
});
