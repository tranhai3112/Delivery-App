import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator id="bottomTabNavigation">
      <BottomTab.Screen name="home" component={() => <></>}></BottomTab.Screen>
      <BottomTab.Screen
        name="favorite"
        component={() => <></>}></BottomTab.Screen>
      <BottomTab.Screen name="cart" component={() => <></>}></BottomTab.Screen>
      <BottomTab.Screen
        name="notifycation"
        component={() => <></>}></BottomTab.Screen>
      <BottomTab.Screen
        name="profile"
        component={() => <></>}></BottomTab.Screen>
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
