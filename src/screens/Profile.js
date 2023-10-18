import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
  Alert,
  Platform,
  PermissionsAndroid,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';
const Profile = ({navigation}) => {
  const [organizationDetails, setOrganizationDetails] = useState({
    email: '',
    orgName: '',
  });
  // console.log(organizationDetails);
  const [dummy, setDummy] = useState();
  const [profilepic, setProfilePic] = useState('');

  const User = useSelector(state => state.data.data);
  // console.log(
  //   'Profile Component useSelector log: ',
  //   'http://192.168.1.14/crafto/admin/media/' + User.profile_photo,
  // );

  const setData = async () => {
    if (organizationDetails.email == '') {
      Alert.alert('Error', 'name can not be empty');
    } else if (organizationDetails.orgName == '') {
      Alert.alert('Error', 'organization name can not be empty');
    } else {
      try {
        await AsyncStorage.setItem('Email', organizationDetails.email);
        await AsyncStorage.setItem('Organization', organizationDetails.orgName);
        Alert.alert('Saved', 'successful');
        setOrganizationDetails({email: '', orgName: ''});
      } catch (e) {
        // saving error
        console.log('async storage error profile screen', e);
      }
    }
  };

  const requestCameraPermission = async () => {
    try {
      // READ_MEDIA_IMAGES
      if (Platform.OS === 'android') {
        const androidVersion = Platform.Version;
        if (androidVersion >= 33) {
          const permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
          const granted = await PermissionsAndroid.request(permission);
          // console.log('======', granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // console.log('Permission granted android >= 33');
            handleImagePicker();
          } else {
            console.log('Permission denied android 13 or greater');
          }
        } else {
          const permission =
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

          const granted = await PermissionsAndroid.request(permission);
          // console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permission granted android <= 33');
            handleImagePicker();
          } else {
            console.log('Permission denied less than android 13');
          }
        }
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  const handleImagePicker = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
      });
      if (!result.didCancel) {
        navigation.navigate('UploadScreen', {file: result.assets});
        console.log('profile com result', result);
      }
    } catch (err) {
      console.log('profile component handleImagePicker ERROR~', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* back button  */}
      <View style={styles.title}>
        <View style={{flex: 0.4, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('DashBoard');
              // navigation.dispatch(
              //   CommonActions.reset({
              //     index: 0,
              //     routes: [{name: 'DashBoard'}],
              //   }),
              // );
            }}>
            <Image
              source={require('../assets/images/back.png')}
              style={{width: 25, height: 25, tintColor: '#000'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              // fontWeight: '500',
              color: '#000',
              paddingHorizontal: 10,
              // fontFamily: 'Roboto-Bold',
            }}>
            Your Profile
          </Text>
        </View>
        {/* setting button */}
        <View style={{flex: 0.35, backgroundColor: 'white'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Settings');
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/images/setting.png')}
              style={{width: 18, height: 18, marginRight: 4}}
            />
            <Text style={{fontSize: 18, fontWeight: '400', color: '#000'}}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Profile Picture */}
      <View style={styles.parent}>
        <TouchableOpacity
          onPress={() => {
            requestCameraPermission();
          }}>
          {profilepic == '' ? (
            <Image
              // source={require('../assets/images/dummy.jpeg')}
              source={require('../assets/images/dummy.jpeg')}
              style={styles.ProfilePhotoBtnImg}
            />
          ) : (
            <Image
              // source={require('../assets/images/dummy.jpeg')}
              source={{
                uri:
                  'http://192.168.1.21/crafto/admin/media/' +
                  User?.profile_photo,
              }}
              style={styles.ProfilePhotoBtnImg}
            />
          )}

          {/* <Image
            // source={require('../assets/images/dummy.jpeg')}
            source={{
              uri:
                'http://192.168.1.21/crafto/admin/media/' + User?.profile_photo,
            }}
            style={styles.ProfilePhotoBtnImg}
          /> */}
          <View style={styles.cameraIconView}>
            <Image
              source={require('../assets/images/camera.png')}
              style={styles.cameraIcon}
            />
          </View>
        </TouchableOpacity>
        {/* <Text style={styles.userName}>{User.name}</Text> */}
        <TouchableOpacity
          style={styles.editProfile}
          // onPress={() => requestCameraPermission()}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}>
          <Image
            source={require('../assets/images/edit-text.png')}
            style={{
              width: 20,
              height: 20,
              marginHorizontal: 10,
              tintColor: '#FFFF',
            }}
          />
          <Text style={{fontSize: 16, color: '#FFFF', fontWeight: 'bold'}}>
            EDIT PROFILE
          </Text>
        </TouchableOpacity>
      </View>
      {/* organization View */}
      <ScrollView>
        <View style={styles.BusinessDetailsView}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#808080',
              marginVertical: 10,
            }}>
            Organization details
          </Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={'#808080'}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.EmailInput}
            value={organizationDetails.email}
            onChangeText={value =>
              setOrganizationDetails({...organizationDetails, email: value})
            }
          />
          <TextInput
            placeholder="Organization name"
            placeholderTextColor={'#808080'}
            keyboardType="name-phone-pad"
            autoCapitalize="none"
            style={styles.EmailInput}
            value={organizationDetails.orgName}
            onChangeText={value =>
              setOrganizationDetails({...organizationDetails, orgName: value})
            }
          />
          <TouchableOpacity
            onPress={() => {
              setData();
            }}
            style={
              styles.editProfile
              //   {
              //   paddingVertical: 10,
              //   borderWidth: 2,
              //   borderColor: 'silver',
              //   backgroundColor: '#bb84ee',
              //   alignItems: 'center',
              //   borderRadius: 10,
              // }
            }>
            <Text style={{color: '#FFF', fontSize: 18, fontWeight: '500'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <View style={styles.flatListRenderView}>
        <Text style={{fontSize: 20, fontWeight: '500', color: '#000'}}>
          Profile Images
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={{marginVertical: 15}}>
                <Image
                  source={require('../assets/images/IMG.png')}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 20,
                    marginRight: 10,
                    borderWidth: 2,
                    borderColor: 'silver',
                  }}
                />
              </TouchableOpacity>
            );
          }}
          // keyExtractor={item => item.id}
        />
      </View> */}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  parent: {
    padding: 10,
    backgroundColor: '#FFFF',
    // backgroundColor: '#f9f9',
    alignItems: 'center',
    paddingVertical: 20,
  },
  ProfilePhotoBtnImg: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    padding: 5,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 20,
    backgroundColor: '#FFFF',
  },
  cameraIcon: {
    width: 20,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: '#FFFF',
  },
  cameraIconView: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    // bottom: 20,
    marginTop: -24,
  },
  userName: {
    fontSize: 22,
    fontWeight: '500',
    color: '#000',
    paddingVertical: 10,
  },
  editProfile: {
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#bb84ee',
    borderRadius: 10,
    marginTop: 20,
  },
  flatListRenderView: {
    padding: 10,
    // paddingVertical: 20,
    backgroundColor: '#FFF',
    marginTop: 20,
  },
  BusinessDetailsView: {
    padding: 10,
    backgroundColor: '#FFF',
    marginTop: 20,
  },
  EmailInput: {
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: 'silver',
    color: '#000000',
    fontSize: 16,
    marginVertical: 10,
  },
});
