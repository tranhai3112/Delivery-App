import React from 'react';
import {queryClient} from './app/api';
import {QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';

// navigation
import AuthStackNavigation from './app/navigation/stack/auth/AuthStackNavigation';
import BottomTabNavigation from './app/navigation/bottomTab/BottomTabNavigation';

import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {View, Text} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const loggedIn = false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          {loggedIn ? (
            <>
              <BottomTabNavigation />
            </>
          ) : (
            <>
              <AuthStackNavigation />
            </>
          )}
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

export default App;
