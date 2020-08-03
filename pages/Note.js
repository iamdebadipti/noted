import React, { Fragment } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import NoteHeader from '../components/NoteHeader';
import { theme } from '../config';
import NoteTags from '../components/NoteTags';

const NotePage = ({ note, handleGoBack, handleInputChange, handleToolIconClick }) => {
  const { title, body, tags } = note; // destructuring note abject

  return (
    <Fragment>
      {/* note tool actions */}
      <NoteHeader handleGoBack={handleGoBack} handleToolIconClick={handleToolIconClick} />
      <View style={styles.container}>
        {/* autofocus if it is a new note request */}
        <TextInput
          style={{ ...styles.inputStyle, fontSize: 20 }}
          value={title}
          multiline
          // autoFocus={note === null}
          onChangeText={(text) => handleInputChange('title', text)}
          // avoiding unusual text breaks
          textBreakStrategy="simple"
          placeholder="Note Title"
        />
        <TextInput
          style={styles.inputStyle}
          value={body}
          multiline
          // autoFocus={note === null}
          onChangeText={(text) => handleInputChange('body', text)}
          // avoiding unusual text breaks
          textBreakStrategy="simple"
          placeholder="Write Here..."
        />
      </View>
      {/* note tags */}
      <NoteTags tagList={tags} />
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
