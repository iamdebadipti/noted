import React from 'react';
import { View, Text, Button } from 'react-native';

const Search = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search Screen</Text>
      <Button title="Home Screen" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default Search;
