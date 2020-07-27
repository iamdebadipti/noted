import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../config';
import { useNavigation } from '@react-navigation/native';

const NoteListItem = ({ item, setModalShow, setSelectedNoteId }) => {
  // using the react navigation - useNavigation hook
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      // on press navigate to Note stack pushing note_id in the params
      onPress={() => navigation.navigate('Note', { note_id: item.id })}
      style={styles.container}
      // long press action -- set the note id, then show the modal
      onLongPress={async () => {
        await setSelectedNoteId(item.id);
        await setModalShow(true);
      }}
      delayLongPress={250}
      activeOpacity={theme.activeOpacity}
    >
      <Text style={styles.textHeading}>{item.title}</Text>
      <Text style={styles.textDescription}>{item.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.lightGray,
    backgroundColor: '#fff'
  },
  textHeading: {
    fontSize: 18,
    color: theme.textMain,
    marginBottom: 6
  },
  textDescription: {
    fontSize: 16,
    color: theme.textSecondary,
    maxHeight: 60
  }
});

export default NoteListItem;
