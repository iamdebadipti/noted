import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from './components/DrawerComponent';
import AllNotes from './pages/AllNotes';
import Trash from './pages/Trash';
import { theme } from './config';
import Icon from 'react-native-vector-icons/Feather';

// create drawer navigation
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* status bar variant */}
      <StatusBar backgroundColor={theme.mainColor} barStyle="light-content" />
      {/* drawer navigation */}
      <Drawer.Navigator initialRouteName="All Notes" drawerContent={(props) => <DrawerComponent {...props} />}>
        <Drawer.Screen
          name="All Notes"
          component={AllNotes}
          options={{
            drawerIcon: () => <Icon name="list" size={24} color={theme.mainColor} />
          }}
        />
        <Drawer.Screen
          name="Trash"
          component={Trash}
          options={{
            drawerIcon: () => <Icon name="trash" size={24} color={theme.mainColor} />
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
