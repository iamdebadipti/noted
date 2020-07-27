import React, { useState, Fragment } from 'react';
import { View, TextInput, StyleSheet, Text, ScrollView } from 'react-native';
import NoteHeader from '../components/NoteHeader';

const NotePage = ({ note, handleGoBack }) => {
  const [noteText, setNoteText] = useState(note ? note.title : '');

  // console.warn('rendered...');

  const handleToolIconClick = (action) => {
    // available tool actions - INFO | SHARE | TRASH
    console.warn('action', action);
  };

  return (
    <Fragment>
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
        />
      </ScrollView>
      <View>
        <Text>End</Text>
      </View>
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
    fontSize: 18
  }
});

export default NotePage;
