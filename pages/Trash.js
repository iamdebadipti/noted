import React, { Fragment } from 'react';
import { View, Button, Text } from 'react-native';
import PageHeader from '../components/PageHeader';

export default function Trash({ navigation }) {
  return (
    <Fragment>
      <PageHeader
        title={'Trash'}
        leftAction={{ action: () => navigation.toggleDrawer(), icon: 'menu' }}
        rightAction={{ action: () => console.log('empty trash'), icon: 'trash-2' }}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginBottom: 10 }}>Trash Page</Text>
      </View>
    </Fragment>
  );
}
