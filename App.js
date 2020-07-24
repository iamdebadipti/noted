import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from './components/DrawerComponent';
import AllNotes from './pages/AllNotes';
import Trash from './pages/Trash';

// create drawer navigation
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* status bar variant */}
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {/* drawer navigation */}
      <Drawer.Navigator
        initialRouteName="All Notes"
        drawerContent={(props) => <DrawerComponent {...props} />}
      >
        <Drawer.Screen name="All Notes" component={AllNotes} />
        <Drawer.Screen name="Trash" component={Trash} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
