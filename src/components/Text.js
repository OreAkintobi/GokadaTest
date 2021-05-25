import React from 'react';
import { Text } from 'react-native';

const CustomText = ({ children, style }) => {
  return (
    <Text
      style={[
        {
          textShadowOffset: {
            width: 0.1,
            height: 0.1,
          },
          textShadowRadius: 0.1,
          textShadowColor: '#000',
          color: '#fff',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default CustomText;
