import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './config';
import Main from './stacks/Main';
import Note from './stacks/Note';
import Search from './stacks/Search';

// create main stack navigation
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* status bar */}
      <StatusBar backgroundColor={theme.mainColor} barStyle="light-content" />
      {/* main stack */}
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Note" component={Note} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
