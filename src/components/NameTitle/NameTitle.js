import React from 'react';
import { View, Text } from 'react-native';

const NameTitle = ({ name, joined }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ color: '#666' }}>{joined}</Text>
    </View>
  );
};

export default NameTitle;
