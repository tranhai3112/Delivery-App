import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs';
import {BottomTabNavigatorParamList} from './BottomTabTypes';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Text, StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import CustomCartTabBarButton from './CustomCartTabBarButton';

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();
const BOTTOM_TAB_BAR_HEIGHT = 66;

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      id="bottomTabNavigation"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderRadius: 15,
          height: BOTTOM_TAB_BAR_HEIGHT,
        },
      }}>
      <BottomTab.Screen
        name="home"
        component={() => <></>}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FeatherIcon
              name="home"
              size={20}
              color={focused ? colors.primary : colors.lightGray}
              style={{alignSelf: 'center'}}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={[
                styles.label,
                {
                  color: focused ? colors.primary : colors.lightGray,
                  display: focused ? 'flex' : 'none',
                },
              ]}>
              .
            </Text>
          ),
        }}
      />
      <BottomTab.Screen
        name="favorite"
        component={() => <></>}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FeatherIcon
              name="heart"
              size={20}
              color={focused ? colors.primary : colors.lightGray}
              style={{alignSelf: 'center'}}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={[
                styles.label,
                {
                  color: focused ? colors.primary : colors.lightGray,
                  display: focused ? 'flex' : 'none',
                },
              ]}>
              .
            </Text>
          ),
        }}
      />
      <BottomTab.Screen
        name="cart"
        component={() => <></>}
        options={{
          tabBarShowLabel: false,
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused, color}) => (
            <FontAwesome5Icon
              name="shopping-bag"
              size={20}
              color={'#fff'}
              style={{alignSelf: 'center'}}
            />
          ),
          tabBarButton: (props: BottomTabBarButtonProps) => (
            <CustomCartTabBarButton {...props} />
          ),
        }}
      />
      <BottomTab.Screen
        name="notifycation"
        component={() => <></>}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FeatherIcon
              name="bell"
              size={20}
              color={focused ? colors.primary : colors.lightGray}
              style={{alignSelf: 'center'}}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={[
                styles.label,
                {
                  color: focused ? colors.primary : colors.lightGray,
                  display: focused ? 'flex' : 'none',
                },
              ]}>
              .
            </Text>
          ),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={() => <></>}
        options={{
          tabBarIcon: ({focused, color}) => (
            <FontAwesomeIcon
              name="user-o"
              size={20}
              color={focused ? colors.primary : colors.lightGray}
              style={{alignSelf: 'center'}}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={[
                styles.label,
                {
                  color: focused ? colors.primary : colors.lightGray,
                  display: focused ? 'flex' : 'none',
                },
              ]}>
              .
            </Text>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {position: 'absolute', bottom: 4, fontSize: 32},
});

export default BottomTabNavigation;
