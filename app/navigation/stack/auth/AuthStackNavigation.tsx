import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignInEmail,
  SignUpEmail,
  ForgotPassword1,
  ForgotPassword2,
  ForgotPassword3,
  OnBoardScreen,
} from '../../../screens/auth';
import {AuthStackNavigatorParamList} from './AuthStackTypes';
import colors from '../../../themes/colors';

const HEADER_PADDING_TOP = 60;
const HEADER_PADDING_HORIZONTAL = 12;

const AuthStack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator
      id="AuthStackNavigator"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingTop: HEADER_PADDING_TOP,
          paddingHorizontal: HEADER_PADDING_HORIZONTAL,
          backgroundColor: colors.white,
          flex: 1,
        },
      }}>
      <AuthStack.Screen name="onboard" component={OnBoardScreen} />
      <AuthStack.Screen name="signin_email" component={SignInEmail} />
      <AuthStack.Screen name="signup_email" component={SignUpEmail} />
      <AuthStack.Screen
        name="forgotPassword_screen1"
        component={ForgotPassword1}
        options={{
          headerShown: true,
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      <AuthStack.Screen
        name="forgotPassword_screen2"
        component={ForgotPassword2}
        options={{
          headerShown: true,
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      <AuthStack.Screen
        name="forgotPassword_screen3"
        component={ForgotPassword3}
        options={{
          headerShown: true,
          headerTitle: '',
          headerShadowVisible: false,
        }}
      />
      {/* 
      <AuthStack.Screen
        name="signup_phone"
        component={() => <></>}></AuthStack.Screen>
      <AuthStack.Screen
        name="signUp_phone"
        component={() => <></>}></AuthStack.Screen> */}
      {/* phải truyền thêm 1 biến params "type":"email"|"password" khi mà chuyển sang stack này */}
      {/* <AuthStack.Screen
        name="forgotPassword_screen1"
        component={() => <></>}></AuthStack.Screen>
      <AuthStack.Screen
        name="forgotPassword_screen2"
        component={() => <></>}></AuthStack.Screen>
      <AuthStack.Screen
        name="forgotPassword_screen3"
        component={() => <></>}></AuthStack.Screen> */}
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigation;
