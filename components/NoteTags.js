import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../config';

const NoteTags = ({ tagList, handleInputChange, handleRemoveTag }) => {
  const [tagText, setTagText] = useState('');

  // tag input text change handle -- setting the state
  const handleTagInputChange = (text) => {
    setTagText(text);
  };

  return (
    <View style={styles.container}>
      <Icon name="tag" size={18} color={theme.textSecondary} style={{ padding: 6 }} />

      <View style={styles.tagsFlex}>
        {tagList.length > 0
          ? // rendering tag list here
            tagList.map((tag, index) => {
              return (
                <View style={styles.tagSingle} key={index}>
                  <Text style={styles.tagSingleText}>{tag}</Text>
                  <TouchableOpacity onPress={() => handleRemoveTag(index)}>
                    <Icon style={styles.tagSingleRemove} name="minus-circle" size={16} color={theme.accentColor} />
                  </TouchableOpacity>
                </View>
              );
            })
          : null}
        {/* tag add text input */}
        <View>
          <TextInput
            style={styles.tagAddInput}
            value={tagText}
            onChangeText={(text) => handleTagInputChange(text)}
            placeholder="Add Tag..."
            onSubmitEditing={async () => {
              await handleInputChange('tags', tagText);
              await setTagText('');
            }}
            // after submit prevent focus lose
            blurOnSubmit={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    overflow: 'hidden',
    backgroundColor: '#ffffff'
  },
  tagsFlex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  tagSingle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 26,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: theme.mainColorOpac,
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 5
  },
  tagSingleText: {
    fontSize: 14,
    lineHeight: 16
  },
  tagSingleRemove: {
    marginRight: -8,
    padding: 4
  },
  tagAddInput: {
    padding: 0,
    borderWidth: 0,
    fontSize: 14,
    marginLeft: 10,
    minWidth: 80,
    color: theme.textMain
  }
});

export default NoteTags;
