import React from 'react';
import { View, Button, Text } from 'react-native';

export default function Trash({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 10 }}>Trash Page</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Menu" />
    </View>
  );
}
