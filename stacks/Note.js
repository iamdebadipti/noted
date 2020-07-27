import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { allNotes } from '../fake';

const Note = ({ navigation }) => {
  // note data
  const [note, setNote] = useState(null);

  // get navigation params
  const { params } = useRoute();

  useEffect(() => {
    if (params) {
      const noteId = params.note_id;
      // get the particular note matching the ID
      const noteObj = allNotes.filter((note) => note.id === noteId);
      setNote(noteObj[0]);
    }
  }, [params]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Note Screen</Text>
      <Text>{note ? note.title : 'Loading...'}</Text>
      <Button title="Home Screen" onPress={() => navigation.navigate('Main')} />
    </View>
  );
};

export default Note;
