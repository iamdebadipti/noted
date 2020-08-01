import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { theme } from '../config';

const LoadingFullPage = ({ size, color, text }) => {
  const [show, setShow] = useState(false);

  // wait 100ms before showing the loader
  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setShow(true);
      console.warn('hello error');
    }, 100);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return show ? (
    <View style={styles.container}>
      <ActivityIndicator size={size ? size : 'large'} color={color ? color : theme.accentColor} />
      <Text style={styles.textStyle}>{text ? text : 'Loading'}</Text>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    color: theme.textMain,
    fontSize: 18,
    marginTop: 8
  }
});

export default LoadingFullPage;
