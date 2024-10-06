import React from 'react';
import { Image } from 'react-native';

const Avatar = () => {
  return (
    <Image
      source={require('../../assets/avatar.jpg')} // Update the path to your avatar image
      style={{ width: 50, height: 50 }}
    />
  );
};

export default Avatar;
