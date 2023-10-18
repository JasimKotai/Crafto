import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {CommonActions} from '@react-navigation/native';

const ChangeLanguage = ({navigation}) => {
  const [engFocused, setEngFocused] = useState(false);
  const [hindiFocused, setHindiFocused] = useState(false);

  const requestReadMediaImagesPermission = async () => {
    try {
      const permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
      const granted = await PermissionsAndroid.request(permission);
      console.log('***', granted === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
      console.warn('==', err);
    }

    //     const granted = await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    //       {
    //         title: 'Read Media Images Permission',
    //         message: 'This app needs permission to read media images.',
    //         buttonPositive: 'OK',
    //       },
    //     );
    // console.log(granted);
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //       console.log('Permission to read media images granted');
    //     } else {
    //       console.log('Permission to read media images denied');
    //     }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/images/back.png')}
          style={{width: 25, height: 25, tintColor: '#000'}}
        />
      </TouchableOpacity>
      <View style={styles.parent}>
        <View style={styles.TitleView}>
          <Text style={styles.Title}>Language</Text>
          <Text style={styles.description}>Please choose language</Text>
        </View>
        <TouchableOpacity
          style={engFocused == true ? styles.onFocused : styles.engButton}
          onPress={() => {
            setEngFocused(!engFocused);
            setHindiFocused(false);
            // requestReadMediaImagesPermission();
            // navigation.navigate('DashBoard');
          }}>
          <Text
            style={
              engFocused == true ? styles.onFocusedTxtColor : styles.BtnTxt
            }>
            English
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={hindiFocused == true ? styles.onFocused : styles.engButton}
          onPress={() => {
            setHindiFocused(!hindiFocused);
            setEngFocused(false);
            // navigation.navigate('HomeScreen');
          }}>
          <Text
            style={
              hindiFocused == true ? styles.onFocusedTxtColor : styles.BtnTxt
            }>
            Hindi
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangeLanguage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  parent: {
    flex: 0.73,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  TitleView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  Title: {
    fontSize: 26,
    color: '#000',
    fontWeight: '500',
  },
  description: {
    color: '#000000',
    fontSize: 20,
  },
  engButton: {
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#ead7fc',
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#bb84ee',
  },
  BtnTxt: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  onFocused: {
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#bb84ee',
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#bb84ee',
  },
  onFocusedTxtColor: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
  },
});
