import React from 'react';
import {queryClient} from './app/api';
import {QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';

// navigation
import AuthStackNavigation from './app/navigation/stack/auth/AuthStackNavigation';
import BottomTabNavigation from './app/navigation/bottomTab/BottomTabNavigation';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useReactQueryGlobalState} from './app/api';
import {View, Text} from 'react-native';

const App = () => {
  const [loggedIn1] = useReactQueryGlobalState('LoggedIn', false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        {loggedIn1 ? <BottomTabNavigation /> : <AuthStackNavigation />}
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
