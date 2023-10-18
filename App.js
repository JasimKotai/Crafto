import React, {useEffect} from 'react';

import MainNavigation from './src/navigator/MainNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import {PermissionsAndroid, Platform, Alert, NativeModules} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const {TruecallerAuthModule} = NativeModules;
import {
  notificationListener,
  requestUserPermission,
} from './src/utils/notification';
import Login from './src/screens/Login';
import Temp from './src/components/Temp';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      const androidVersion = Platform.Version;
      if (androidVersion >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const granted = PermissionsAndroid.request(permission);
        // console.log(granted);
        if (granted) {
          console.log('The user has granted permission.');
          const unsubscribe = messaging().onMessage(async remoteMessage => {
            // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            console.log('=======', remoteMessage);
            Alert.alert(JSON.stringify(remoteMessage));
          });

          return unsubscribe;
        } else {
          console.log('The user has denied permission. : ');
        }
      }
    } else {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert(
          'A new FCM message arrived!',
          JSON.stringify(remoteMessage),
        );
        console.log('=======', remoteMessage);
      });

      return unsubscribe;
    }

    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //   console.log('=======', remoteMessage);
    // });

    // return unsubscribe;
  }, []);

  // useEffect(() => {
  //   requestUserPermission();
  //   notificationListener();
  // }, []);

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
    // <Temp />
  );
};

export default App;
