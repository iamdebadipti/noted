import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../config';

const NoteListItem = ({ item, setModalShow, setSelectedItemId }) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedItemId(item.id)}
      style={styles.container}
      onLongPress={async () => {
        await setSelectedItemId(item.id);
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
