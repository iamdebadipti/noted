import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { theme } from '../config';

const NoteTags = ({ tagList }) => {
  return (
    <View style={styles.container}>
      <Icon name="tag" size={18} color={theme.accentColor} style={{ padding: 6 }} />
      {/* rendering tag list here */}
      <View style={styles.tagsFlex}>
        {tagList.map((tag) => {
          return (
            <View style={styles.tagSingle} key={tag.id}>
              <Text style={styles.tagSingleText}>{tag.name}</Text>
              <TouchableOpacity>
                <Icon style={styles.tagSingleRemove} name="minus-circle" size={16} color={theme.accentColor} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      {/* tag add text input */}
      {/* <View>
        <TextInput style={{ borderWidth: 1 }} />
      </View> */}
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
    backgroundColor: theme.lightestGray,
    borderRadius: 20,
    marginRight: 5,
    marginBottom: 5
  },
  tagSingleText: {
    fontSize: 12,
    lineHeight: 14
  },
  tagSingleRemove: {
    marginRight: -8,
    padding: 4
  }
});

export default NoteTags;
