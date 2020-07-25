import React from 'react';
import { View, Text } from 'react-native';

const EmptyComponent = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default EmptyComponent;
