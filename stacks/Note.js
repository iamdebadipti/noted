import React from 'react';
import { View, Text, Button } from 'react-native';

const Note = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Note Screen</Text>
      <Button title="Home Screen" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default Note;
