import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { theme } from '../config';

const EmptyComponent = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 180,
          height: 180
        }}
        source={require('../assets/undraw_happy_music.png')}
      />
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 50
  },
  textStyle: {
    fontSize: 18,
    marginTop: 20,
    color: theme.textSecondary
  }
});

export default EmptyComponent;
