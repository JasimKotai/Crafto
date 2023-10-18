import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const NotificationIcon = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/noti.png')}
          style={{width: 25, height: 25, tintColor: 'red', marginRight: 20}}
        />
        {/* <Text>hello</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default NotificationIcon;
