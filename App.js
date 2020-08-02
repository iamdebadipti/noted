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
import auth from '@react-native-firebase/auth';

// create main stack navigation
const Stack = createStackNavigator();

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <LoadingFullPage />; // we are still waiting firebase to connect
  }

  return (
    <NavigationContainer>
      {/* status bar */}
      <StatusBar backgroundColor={theme.mainColor} barStyle="light-content" />
      {/* main stack */}
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        {/* check if user exists */}
        {!user ? (
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
