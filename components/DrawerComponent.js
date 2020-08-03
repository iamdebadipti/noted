import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const DrawerComponent = ({ ...props }) => {
  // handle sign out
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <Button title="Sign Out" onPress={() => handleSignOut()} />
    </DrawerContentScrollView>
  );
};

export default DrawerComponent;
