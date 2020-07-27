import React from 'react';
import { View, TextInput, Button } from 'react-native';

const NotePage = ({ note, handleGoBack }) => {
  return (
    <View>
      {/* autofocus if it is a new note request */}
      <TextInput value={note ? note.title : 'New Note'} autoFocus={note === null} />
      <Button title="Go Back" onPress={() => handleGoBack()} />
    </View>
  );
};

export default NotePage;
