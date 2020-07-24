import React from 'react';
import { View, Button, Text } from 'react-native';

export default function AllNotes({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 10 }}>All Notes Page</Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Open Menu" />
    </View>
  );
}
