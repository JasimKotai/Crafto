import {View, Text, Image} from 'react-native';
import React from 'react';

const ProfileIcon = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/IMG.png')}
        style={{
          width: 65,
          height: 65,
          borderRadius: 50,
          borderWidth: 2,
          borderColor: 'red',
        }}
      />
    </View>
  );
};

export default ProfileIcon;
