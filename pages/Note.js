import React, { useState, Fragment } from 'react';
import { TextInput, StyleSheet, ScrollView } from 'react-native';
import NoteHeader from '../components/NoteHeader';
import { theme } from '../config';
import NoteTags from '../components/NoteTags';

const NotePage = ({ note, handleGoBack }) => {
  // setting the note prop title as the initial state -- if available
  const [noteText, setNoteText] = useState(note ? note.title : '');

  // console.warn('rendered...');

  const handleToolIconClick = (action) => {
    // available tool actions - INFO | SHARE | TRASH
    console.warn('action', action);
  };

  return (
    <Fragment>
      {/* note tool actions */}
      <NoteHeader handleGoBack={handleGoBack} handleToolIconClick={handleToolIconClick} />
      <ScrollView style={styles.container}>
        {/* autofocus if it is a new note request */}
        <TextInput
          style={styles.inputStyle}
          value={noteText}
          multiline
          autoFocus={note === null}
          onChangeText={(text) => setNoteText(text)}
          // avoiding unusual text breaks
          textBreakStrategy="simple"
          placeholder="New Note"
        />
      </ScrollView>
      {/* note tags */}
      <NoteTags tagList={note ? note.tags : []} />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    backgroundColor: '#ffffff'
  },
  inputStyle: {
    textAlignVertical: 'top',
    fontSize: 18,
    color: theme.textMain
  }
});

export default NotePage;
