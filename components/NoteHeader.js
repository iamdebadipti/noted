import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../config';
import Icon from 'react-native-vector-icons/Feather';
import { NOTE_ACTIONS } from '../utils/constants';

const NoteHeader = ({ handleGoBack, handleToolIconClick }) => {
  return (
    <View style={styles.headerStyle}>
      {/* handle navigate back to home */}
      <TouchableOpacity onPress={() => handleGoBack()} activeOpacity={theme.activeOpacity}>
        <Icon name="arrow-left" size={24} color={theme.textSecondary} style={styles.toolIcon} />
      </TouchableOpacity>

      {/* right note tools - SHARE | TRASH | INFO - onPress action  handleToolIconClick(actionName)*/}
      <View style={{ flexDirection: 'row' }}>
        {NOTE_ACTIONS.map((action) => {
          return (
            <TouchableOpacity
              key={action.action}
              activeOpacity={theme.activeOpacity}
              style={styles.toolMargin}
              onPress={() => handleToolIconClick(action.action)}
            >
              <Icon name={action.icon} size={24} color={theme.textSecondary} style={styles.toolIcon} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1
  },
  headerStyle: {
    backgroundColor: '#ffffff',
    height: 56,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  toolIcon: {
    padding: 5
  },
  toolMargin: {
    marginLeft: 15
  }
});

export default NoteHeader;
