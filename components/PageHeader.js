import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../config';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PageHeader = ({ title, leftAction, rightAction }) => {
  return (
    <View style={styles.headingStyle}>
      {leftAction ? (
        <TouchableOpacity style={styles.menuAction} onPress={() => leftAction.action()}>
          <Icon name={leftAction.icon} size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 34 }} />
      )}
      <Text style={styles.headingFont}>{title}</Text>
      {rightAction ? (
        <TouchableOpacity style={styles.menuAction} onPress={() => rightAction.action()}>
          <Icon name={rightAction.icon} size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 34 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  menuAction: {
    padding: 5
  },
  headingStyle: {
    height: 56,
    backgroundColor: theme.mainColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  headingFont: {
    fontSize: theme.headingFontSize,
    fontWeight: '600',
    color: '#fff'
  }
});

export default PageHeader;
