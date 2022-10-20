import React from 'react';
import {queryClient} from './app/api';
import {QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';

// navigation
import AuthStackNavigation from './app/navigation/stack/auth/AuthStackNavigation';
import BottomTabNavigation from './app/navigation/bottomTab/BottomTabNavigation';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {useReactQueryGlobalState} from './app/api';
import colors from './app/themes/colors';
const App = () => {
  const [loggedIn] = useReactQueryGlobalState('LoggedIn', false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darkGray : colors.white,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        {loggedIn ? <BottomTabNavigation /> : <AuthStackNavigation />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const AppWrapper = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default AppWrapper;
