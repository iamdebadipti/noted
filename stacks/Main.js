import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AllNotes from '../pages/AllNotes';
import Trash from '../pages/Trash';
import DrawerComponent from '../components/DrawerComponent';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../config';

// create drawer navigation
const Drawer = createDrawerNavigator();

const Main = () => {
  return (
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
  );
};

export default Main;
