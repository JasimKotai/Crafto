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
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';

const Account = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  // const signUpUser = () => {
  //   var formdata = new FormData();
  //   formdata.append('name', name);
  //   formdata.append('phone', phone);
  //   formdata.append('password', password);

  //   var requestOptions = {
  //     method: 'POST',
  //     body: formdata,
  //     redirect: 'follow',
  //   };

  //   fetch('http://192.168.1.14/crafto/api/sign-up.php', requestOptions)
  //     .then(response => response.text())
  //     .then(result => console.log('api respnse', typeof JSON.parse(result)))
  //     .catch(error => console.log('error', error));
  // };

  const signUpUser = async () => {
    if (phone.length == 10) {
      try {
        var formdata = new FormData();
        formdata.append('name', name);
        formdata.append('phone', phone);
        // formdata.append('password', password);
        // var requestOptions = {
        //   method: 'POST',
        //   body: formdata,
        //   redirect: 'follow',
        // };
        const response = await axios.post(
          'http://192.168.1.14/crafto/api/sign-up.php',
          formdata,
        );
        console.log('api signUp response :', response.data);
        console.log('api signUp response data status :', response.data.status);
        setStatus(response.data.status);
        if (status == true) {
          navigation.navigate('Login');
        }
        // setApiResponse(response.data);
      } catch (error) {
        console.log('user login fail Account screen : ', error);
      }
    } else {
      Alert.alert('phone number invalid');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/BG2.png')}
        style={styles.BG}>
        <SafeAreaView>
          <View
            style={{
              width: '90%',
              height: 650,
              backgroundColor: 'whitesmoke',
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 50,
            }}>
            <View
              style={{
                width: '100%',
                height: 170,
                backgroundColor: 'white',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}>
              <View
                style={{
                  width: '100%',
                  height: 40,
                  alignItems: 'center',
                  // backgroundColor: 'lime',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}>
                <Text style={styles.Title}>Sign up with</Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 80,
                  // backgroundColor: 'yellow',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity style={styles.TrueBtn}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      // backgroundColor: '#5e72e4',
                      // width: 170,
                      // height: 40,
                      // borderRadius: 20,
                      // alignItems: 'center',
                      // justifyContent: 'center'
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
            <View
              style={{
                width: '100%',
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                // backgroundColor: 'skyblue',
                marginTop: 30,
                marginBottom: 10,
              }}>
              <Text style={{fontSize: 15, color: 'grey'}}>
                Or sign up with credentials
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 300,
                // backgroundColor: 'gold',
                alignItems: 'center',
                paddingVertical: 20,
              }}>
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
                  value={name}
                  onChangeText={setName}
                  keyboardType="name-phone-pad"
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
                  value={phone}
                  onChangeText={setPhoneNumber}
                  keyboardType="number-pad"
                  style={styles.TextInput}
                />
              </View>
              {/* <View style={styles.TextInputDiv}>
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
                  placeholder="Password"
                  placeholderTextColor="#ADB5BD"
                  value={password}
                  onChangeText={setPassword}
                  style={styles.TextInput}
                />
              </View> */}
              <View
                style={{
                  width: '100%',
                  height: 40,
                  // backgroundColor: 'gold',
                  paddingLeft: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={{color: 'black', marginLeft: 5, fontSize: 13}}>
                  I agree with the
                  <Text style={{color: '#5e72e4', fontSize: 14}}>
                    {' '}
                    Privacy Policy
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  height: 70,
                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity style={styles.signUpBtn} onPress={signUpUser}>
                  <Text
                    style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                    CREATE ACCOUNT
                  </Text>
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
                }}>
                <Text style={{fontSize: 16}}>Already have a account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text
                    style={{color: '#5e72e4', fontSize: 18, fontWeight: '800'}}>
                    Sign In
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

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BG: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  Title: {
    fontSize: 18,
    color: 'grey',
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
  },
  signUpBtn: {
    width: 170,
    height: 40,
    backgroundColor: '#5e72e4',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
