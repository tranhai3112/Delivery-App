import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpEmail} from '../../../screens/auth';
import colors from '../../../themes/colors';

const HEADER_PADDING_TOP = 70;
const HEADER_PADDING_HORIZONTAL = 12;

const AuthStack = createNativeStackNavigator();

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
        },
      }}>
      <AuthStack.Screen
        name="signup_email"
        component={SignUpEmail}></AuthStack.Screen>
      {/* 
      <AuthStack.Screen
        name="signup_phone"
        component={() => <></>}></AuthStack.Screen>
      <AuthStack.Screen
        name="signUp_email"
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
