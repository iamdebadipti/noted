import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

export default function DrawerComponent({ ...props }) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
