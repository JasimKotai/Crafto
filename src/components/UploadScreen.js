import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {AddUserData} from '../Redux/Action';
import {baseUrl} from '../Redux/Api';

const UploadScreen = ({navigation, route}) => {
  // dispatch
  const dispatch = useDispatch();
  const [userdata, setUserdata] = useState('');
  // route params
  const {file} = route.params;
  // console.log('file  ::', file[0]);

  // editing user profile
  const handleProfilePicture = async () => {
    try {
      let data = new FormData();
      data.append('id', '19');
      data.append('name', 'jasim');
      data.append('phone', '1234567890');
      const newFileName = file[0].fileName;
      const newImageObject = {
        uri: file[0].uri,
        type: file[0].type,
        name: file[0].fileName,
      };
      data.append('profile_photo', newImageObject, newFileName);
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        // url: baseUrl + '/edit-details.php',
        url: 'http://192.168.1.21/crafto/api/edit-details.php',
        headers: {
          // Set your headers here
          'Content-Type': 'multipart/form-data',
        },
        data: data,
      };
      const response = await axios.request(config);
      console.log('UploadScreeb profile upload api response : ', response.data);
      if (response !== null) {
        navigation.goBack();
      }
      setUserdata(response);
      // dispatch(SaveUserProfile(uploadProfile));
      // dispatch(AddUserData(response.data));
    } catch (error) {
      Alert.alert('Error', 'network error');
      navigation.naviagte('Profile');
      console.log('handleProfilePicture Upload Screen:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFF',
          padding: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        {/* go Back Cross Button */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/close1.png')}
            style={{width: 25, height: 25, tintColor: '#000'}}
          />
        </TouchableOpacity>
        {/* Uploading profile pic Button */}
        <TouchableOpacity
          onPress={() => {
            handleProfilePicture();
          }}>
          <Image
            source={require('../assets/images/check1.png')}
            style={{width: 35, height: 35, tintColor: '#000'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.parent}>
        <View style={styles.child}>
          <Image
            source={{uri: file[0].uri}}
            style={{width: '100%', height: 400}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  parent: {
    backgroundColor: '#FFFF',
  },
  child: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    elevation: 10,
  },
});
