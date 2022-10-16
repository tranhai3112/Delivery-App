import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';
// navigator params check
export type AuthStackNavigatorParamList = {
  signin_email: undefined;
  signup_email: undefined;
  forgotPassword_screen1: {
    type: 'email' | 'phone';
  };
  forgotPassword_screen2: {
    name: string;
    type: 'email' | 'phone';
  };
  forgotPassword_screen3: undefined;
};

// screen navigation check
export type SignInEmailScreenNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'signin_email'
>;

export type SignUpEmailScreenNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'signup_email'
>;

export type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'forgotPassword_screen1'
>;

export type ForgotPassword2ScreenNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'forgotPassword_screen2'
>;

export type ForgotPassword3ScreenNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'forgotPassword_screen3'
>;

// route

export type ForgotPassword2ScreenRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'forgotPassword_screen2'
>;
