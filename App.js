import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './config';
import Main from './stacks/Main';
import Note from './stacks/Note';
import Search from './stacks/Search';
import LogIn from './stacks/LogIn';
import SignUp from './stacks/SignUp';
import LoadingFullPage from './components/LoadingFullPage';

// create main stack navigation
const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // temporary / dummy functionality to check if user is logged in
    setTimeout(() => {
      setIsLoggedIn(false);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    // We haven't finished checking if the user exists -- loader
    return <LoadingFullPage />;
  }

  return (
    <NavigationContainer>
      {/* status bar */}
      <StatusBar backgroundColor={theme.mainColor} barStyle="light-content" />
      {/* main stack */}
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        {/* show screens as per the isLoggedIn status */}
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
            <Stack.Screen name="LogIn" component={LogIn} options={{ title: 'Log In' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Note" component={Note} />
            <Stack.Screen name="Search" component={Search} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
