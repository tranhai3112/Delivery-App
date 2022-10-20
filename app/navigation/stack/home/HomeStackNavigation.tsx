import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNavigatorParamList} from './HomeStackTypes';
import colors from '../../../themes/colors';
import {HomeScreen} from '../../../screens/notAuth/home/HomeScreen';

import {HomeHeader} from './headers/HomeHeader';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HEADER_PADDING_HORIZONTAL = 12;

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator
      id="HomeStackNavigator"
      screenOptions={{
        headerShadowVisible: false,
        headerBackVisible: true,
        contentStyle: {
          flex: 1,
        },
      }}>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: '',
          header: props => <HomeHeader {...props} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
