import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  NativeModules,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useContext, createContext} from 'react';
import axios from 'axios';
import {AddUserData} from '../Redux/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {TruecallerAuthModule} = NativeModules;

const Login = ({navigation, children}) => {
  const [name, setName] = useState('jasim');
  const [phone, setPhone] = useState('1234567890');
  const [status, setStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (name === '') {
      Alert.alert('Name Error', 'Please fill in all fields.');
    } else if (phone.length !== 10) {
      Alert.alert('Number Error', 'Please fill in all fields.');
    } else {
      try {
        setIsLoading(true); // Start loading
        let data = new FormData();
        data.append('name', name);
        data.append('phone', phone);
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://192.168.1.21/crafto/api/sign-in.php',
          headers: {
            // Set your headers here
            'Content-Type': 'multipart/form-data',
          },
          data: data,
        };
        const response = await axios.request(config);
        setStatus(response.data.status);
        // console.log('Login api response', response.data.user_details.name);
        const json = JSON.stringify(response.data.user_details);
        await AsyncStorage.setItem('loginDetail', json);
        setIsLoading(false); // Stop loading
        if (response.data.status_code == '500') {
          Alert.alert('invalid', 'user not found');
        }
      } catch (error) {
        setIsLoading(false); // Stop loading
        console.log('login error :', error);
        Alert.alert('Network Error');
      }
    }
  };

  useEffect(() => {
    if (status == true) {
      // Alert.alert('Login Successful');
      navigation.replace('DashBoard');
      // console.log('useEffect call navigating to HomeScreen');
    } else {
    }
  }, [status]);

  // const loginWithTruecaller =  () => {
  //   var userprofile = then(TruecallerAuthModule.authenticate());
  //   console.log('trucaller error Login Page :', userprofile);
  // };
  const loginWithTruecaller = async () => {
    try {
      console.log('hello truecaller');
      var userprofile = await TruecallerAuthModule.authenticate();
      // console.log('Truecaller user profile:~', userprofile);
    } catch (error) {
      console.error('Truecaller authentication error:~', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/BG2.png')}
        style={styles.BG}>
        <SafeAreaView>
          <View style={styles.content}>
            <View style={styles.headerView}>
              <View style={styles.titleView}>
                <Text style={styles.Title}>Login with</Text>
              </View>
              <View style={styles.truecallerIconView}>
                <TouchableOpacity
                  style={styles.TrueBtn}
                  onPress={loginWithTruecaller}
                  accessibilityLabel="learn more">
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      // backgroundColor: '#5e72e4',
                    }}>
                    <Image
                      source={require('../assets/images/truecall.png')}
                      style={styles.truecaller}
                    />
                    <Text style={styles.truecallerTxt}>Truecaller</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.credentialsView}>
              <Text style={{fontSize: 15, color: 'grey', fontWeight: '500'}}>
                Or Login with credentials
              </Text>
            </View>
            <View style={styles.TextInputView}>
              <View style={styles.TextInputDiv}>
                <Image
                  source={require('../assets/images/userICON.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: '#ADB5BD',
                    marginRight: 5,
                  }}
                />
                <TextInput
                  placeholder="Name"
                  placeholderTextColor="#ADB5BD"
                  keyboardType="name-phone-pad"
                  value={name}
                  clearButtonMode="while-editing"
                  autoCapitalize="none"
                  onChangeText={setName}
                  style={styles.TextInput}
                />
              </View>
              <View style={styles.TextInputDiv}>
                <Image
                  source={require('../assets/images/phone.png')}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: '#ADB5BD',
                    marginRight: 5,
                  }}
                />
                <TextInput
                  placeholder="Phone Number"
                  placeholderTextColor="#ADB5BD"
                  keyboardType="number-pad"
                  value={phone}
                  onChangeText={setPhone}
                  style={styles.TextInput}
                />
              </View>

              {/* <View
                style={{
                  width: '100%',
                  height: 40,
                  // backgroundColor: 'gold',
                  paddingLeft: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CheckBox
                  style={{
                    width: 22,
                    height: 22,
                    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
                    // backgroundColor: 'red',
                  }}
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={{color: 'black', marginLeft: 5, fontSize: 16}}>
                  I agree with the
                  <Text style={{color: '#5e72e4', fontSize: 17}}>
                    {' '}
                    Privacy Policy
                  </Text>
                </Text>
              </View> */}
              <View
                style={{
                  width: '100%',
                  height: 70,
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  style={styles.signUpBtn}
                  onPress={handleLogin}>
                  {isLoading ? (
                    // Step 3: Show ActivityIndicator while loading
                    <ActivityIndicator color="white" />
                  ) : (
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 22,
                        fontWeight: 'bold',
                      }}>
                      Login
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 40,
                  // backgroundColor: 'lime',
                  flexDirection: 'row',
                  paddingLeft: 20,
                  alignItems: 'center',
                  marginTop: 120,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 16, color: 'grey', fontWeight: '500'}}>
                  Don't have an account?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.replace('SignUp');
                  }}>
                  <Text
                    style={{
                      color: '#5e72e4',
                      fontSize: 18,
                      fontWeight: '800',
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '90%',
    height: 650,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 50,
  },
  headerView: {
    width: '100%',
    height: 170,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  titleView: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    // backgroundColor: 'lime',
    justifyContent: 'center',
    marginVertical: 10,
  },
  truecallerIconView: {
    width: '100%',
    height: 80,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  BG: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 18,
    color: 'grey',
    fontWeight: '500',
  },
  truecaller: {
    width: 30,
    height: 30,
  },
  TrueBtn: {
    width: 250,
    height: 45,
    backgroundColor: '#172b4d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 20,
    shadowColor: '#00000014',
    shadowOffset: {width: -2, height: 20},
    shadowOpacity: 0.99,
    shadowRadius: 7,
  },
  truecallerTxt: {
    // color: '#5e72e4',
    color: 'white',
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  TextInputDiv: {
    width: '90%',
    flexDirection: 'row',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'centers',
    shadowColor: '#00000014',
    shadowOffset: {width: -2, height: 20},
    shadowOpacity: 0.99,
    shadowRadius: 7,
    paddingLeft: 5,
    marginBottom: 20,
  },
  TextInput: {
    width: '80%',
    height: 40,
    // backgroundColor: 'black',
    paddingLeft: 10,
    color: '#000',
  },
  signUpBtn: {
    width: '90%',
    paddingVertical: 15,
    backgroundColor: '#5e72e4',
    // backgroundColor: '#bb84ee',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  credentialsView: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'skyblue',
    marginTop: 30,
    marginBottom: 10,
  },
  TextInputView: {
    width: '100%',
    height: 300,
    // backgroundColor: 'gold',
    alignItems: 'center',
    paddingVertical: 20,
  },
});
