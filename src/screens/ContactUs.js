import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  PermissionsAndroid,
  Platform,
  checkMultiple,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS from 'react-native-fs';
import ViewShot from 'react-native-view-shot';

const ContactUs = ({navigation}) => {
  const [name, setName] = useState('');
  const [checkBox, setCheckBox] = useState(null);
  // receiving user name using asyncstorage
  useEffect(() => {
    const getUserName = async () => {
      try {
        const res = await AsyncStorage.getItem('loginDetail');
        const parse = await JSON.parse(res);
        setName(parse.name);
      } catch (error) {
        console.log('Contact screen log:', error);
      }
    };
    getUserName();
  }, []);

  // const requestCameraPermission = async () => {
  //   try {
  //     const writePermissionStatus = await request(
  //       PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  //     );
  //     const readPermissionStatus = await request(
  //       PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  //     );
  //     console.log(writePermissionStatus);
  //     if (
  //       writePermissionStatus === 'granted' &&
  //       readPermissionStatus === 'granted'
  //     ) {
  //       console.log('Permissions granted');
  //     } else {
  //       console.log('Permissions denied');
  //     }
  //   } catch (error) {
  //     console.error('Error requesting permissions:', error);
  //   }
  // };

  const requestCameraPermission = async () => {
    try {
      // READ_MEDIA_IMAGES
      if (Platform.OS === 'android') {
        const androidVersion = Platform.Version;
        if (androidVersion >= 33) {
          const permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
          const granted = await PermissionsAndroid.request(permission);
          // console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // console.log('Contact Screen log; Permission granted android >= 33');
            handleDownload();
          } else {
            console.log('Permission denied');
          }
        } else {
          const permission =
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

          const granted = await PermissionsAndroid.request(permission);
          // console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Contact Screen log; Permission granted android <= 33');
            handleDownload();
          } else {
            console.log('Permission denied');
          }
        }
      }

      // const permission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      // const granted = await PermissionsAndroid.request(permission);
      // console.log(granted);
      // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //   console.log('Permission granted');
      //   handleDownload();
      // } else {
      //   console.log('Permission denied');
      // }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  const handleDownload = () => {
    // Define the URL of the image you want to download
    const imageUrl =
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';

    const timestamp = Date.now();
    const uniqueFileName = `image ${timestamp}.jpg`;

    // Define the path where you want to save the downloaded image
    const imagePath = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;

    // Use RNFS to download the image
    RNFS.downloadFile({
      fromUrl: imageUrl,
      toFile: imagePath,
    })
      .promise.then(response => {
        if (response.statusCode === 200) {
          console.log('Image downloaded successfully.');
          // You can now use the image at `imagePath`.
          console.log(response);
          Alert.alert('Saved');
        } else {
          console.error(
            'Image download failed with status code:',
            response.statusCode,
          );
        }
      })
      .catch(error => {
        console.error('Image download error:', error);
      });
  };
  // CHECK ANDROID VERSION
  // useEffect(() => {
  //   // Check the Android version and request permissions accordingly
  //   if (Platform.OS === 'android') {
  //     const androidVersion = Platform.Version;
  //     console.log(androidVersion);
  //     if (androidVersion >= 33) {
  //       console.log('androidVersion >= 33');
  //     } else {
  //       console.log('less than 33');
  //     }
  //   }
  // }, []);

  const viewShotRef = useRef();

  const saveScreenshot = async () => {
    const screenshotUri = await viewShotRef.current.captureRef();
    console.log('----', screenshotUri);
    const fileName = `${new Date().getTime()}.png`;

    await RNFS.writeFile(fileName, screenshotUri, 'base64');

    alert('Screenshot has been saved to ' + fileName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TitleView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#000',
            paddingHorizontal: 10,
          }}>
          Contact Us
        </Text>
      </View>
      <ScrollView>
        {/* viewshort */}
        <ViewShot ref={viewShotRef}>
          <View style={styles.parent}>
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.TextInput}
            />
            <Text
              style={{
                backgroundColor: '#FFFFFF',
                width: '40%',
                textAlign: 'center',
                marginBottom: -10,
                position: 'absolute',
                marginLeft: 30,
              }}>
              Enter Your Name
            </Text>
          </View>
        </ViewShot>
        {/* What Can We Help you with? */}
        <View style={styles.helpView}>
          <Text style={{fontSize: 20, color: '#000000', marginBottom: 20}}>
            What Can We Help you with?
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCheckBox(1);
            }}>
            <Text style={styles.Btntext}>Quotes are not visible</Text>
            <View
              style={
                checkBox == 1 ? styles.focusedCheckBox : styles.checkBoxView
              }>
              <Image
                source={require('../assets/images/check.png')}
                tintColor={'#FFF'}
                style={{width: 15, height: 15}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCheckBox(2);
            }}
            style={styles.button}>
            <Text style={styles.Btntext}>
              Payment has been made but premium plan still not activated
            </Text>
            <View
              style={
                checkBox == 2 ? styles.focusedCheckBox : styles.checkBoxView
              }>
              <Image
                source={require('../assets/images/check.png')}
                tintColor={'#FFF'}
                style={{width: 15, height: 15}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCheckBox(3);
            }}
            style={styles.button}>
            <Text style={styles.Btntext}>Need quotes in another language</Text>
            <View
              style={
                checkBox == 3 ? styles.focusedCheckBox : styles.checkBoxView
              }>
              <Image
                source={require('../assets/images/check.png')}
                tintColor={'#FFF'}
                style={{width: 15, height: 15}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCheckBox(4);
            }}
            style={styles.button}>
            <Text style={styles.Btntext}>Others</Text>
            <View
              style={
                checkBox == 4 ? styles.focusedCheckBox : styles.checkBoxView
              }>
              <Image
                source={require('../assets/images/check.png')}
                tintColor={'#FFF'}
                style={{width: 15, height: 15}}
              />
            </View>
          </TouchableOpacity>

          <View style={{marginVertical: 50}}>
            {checkBox == 4 ? (
              <TextInput
                placeholder="pls tell us more about your problem"
                multiline={true}
                style={styles.tellUsMore}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => {
                requestCameraPermission();
                // saveScreenshot();
              }}
              style={styles.Submit}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#FFFF'}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  TitleView: {
    padding: 10,
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    elevation: 5,
  },
  parent: {
    padding: 10,
    backgroundColor: '#FFFF',
    marginTop: 50,
  },
  TextInput: {
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginHorizontal: 10,
  },
  helpView: {
    padding: 10,
    paddingTop: 30,
    marginHorizontal: 10,
    // backgroundColor: 'black'
  },
  button: {
    // backgroundColor: 'lime',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 3,
    justifyContent: 'space-between',
  },
  Btntext: {
    fontSize: 18,
    color: '#000000',
    // backgroundColor: 'red',
    flex: 0.95,
  },
  checkBoxView: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
  },
  focusedCheckBox: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#000',
    borderRadius: 20,
    borderWidth: 2,
  },
  tellUsMore: {
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black',
    fontSize: 16,
  },
  Submit: {
    backgroundColor: '#bb84ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
});
