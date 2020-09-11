import React, { Fragment } from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import NoteHeader from '../components/NoteHeader';
import { theme } from '../config';
import NoteTags from '../components/NoteTags';
import Icon from 'react-native-vector-icons/Feather';

const NotePage = ({
  note,
  handleGoBack,
  handleInputChange,
  handleToolIconClick,
  handleSaveNote,
  handleRemoveTag,
  handleUpdateNote
}) => {
  const { id, title, body, tags } = note; // destructuring note abject

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
          style={{ ...styles.inputStyle, minHeight: 100 }}
          value={body}
          multiline
          // autoFocus={note === null}
          onChangeText={(text) => handleInputChange('body', text)}
          // avoiding unusual text breaks
          textBreakStrategy="simple"
          placeholder="Write Here..."
        />
      </View>
      {/* save note floating button */}
      <TouchableOpacity
        style={styles.floatingButton}
        activeOpacity={theme.activeOpacity}
        onPress={() => (id !== '' ? handleUpdateNote() : handleSaveNote())}
      >
        <Icon name="check" size={24} color="#ffffff" />
      </TouchableOpacity>
      {/* note tags */}
      <NoteTags tagList={tags} handleInputChange={handleInputChange} handleRemoveTag={handleRemoveTag} />
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
  },
  floatingButton: {
    position: 'absolute',
    bottom: 60,
    right: 30,
    width: 54,
    height: 54,
    backgroundColor: theme.accentColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27,
    elevation: 4
  }
});

export default NotePage;
