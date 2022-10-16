import React from 'react';
import {View, Text} from 'react-native';
import {Controller, ControllerProps} from 'react-hook-form';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../themes/colors';
interface CustomCheckboxProps {}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type IControllerProps = PartialBy<ControllerProps, 'render'>;

export const CustomCheckbox: React.FC<
  CustomCheckboxProps & IControllerProps
> = ({control, name, rules}) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              value={value}
              onValueChange={onChange}
              style={{}}
              tintColors={{
                true: colors.primary,
                false: error ? 'red' : colors.gray,
              }}
              //ios style
            />
            <Text>
              I agree to the{' '}
              <Text style={{color: colors.primary} as any}>
                Terms of service
              </Text>{' '}
              and{' '}
              <Text style={{color: colors.primary} as any}>Privacy Policy</Text>
            </Text>
          </View>
        )}
      />
    </View>
  );
};
