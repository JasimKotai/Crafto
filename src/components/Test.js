import {View, Text, Image} from 'react-native';
import React from 'react';

const Test = ({navigation, route}) => {
  const img = route.params;
  console.log('Test screen',img);
  return (
    <View>
      <Text>Test</Text>
      <Image source={{uri: img.img}} style={{width: '100%', height: 400}} />
    </View>
  );
};

export default Test;
