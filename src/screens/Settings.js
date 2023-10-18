import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';
const Settings = ({navigation}) => {
  const User = useSelector(state => state.data);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [profile, setProfile] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(modalVisible);
  const handleUserDetails = async () => {
    try {
      const loginDetail = await AsyncStorage.getItem('loginDetail');
      const parse = await JSON.parse(loginDetail);
      // console.log(parse);
      setName(parse.name);
      setNumber(parse.phone);
    } catch (error) {
      console.log('Settings component AsyncStorage log', error);
    }
  };
  handleUserDetails();
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      console.log('settings log Sign Out Successful');
      // navigation.replace('Login');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Login'}],
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout2 = async () => {
    setModalVisible(true);
  };

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        transparent={true}
        visible={modalVisible}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(240, 248, 255, 0.8)',
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              // padding: 40,
              width: '90%',
              height: 200,
              borderRadius: 10,
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Montserrat-Regular',
                color: '#000',
                textAlign: 'left',
              }}>
              Logout
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: 'gray',
                textAlign: 'center',
                marginVertical: 10,
              }}>
              Are you sure you want to logout?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                position: 'absolute',
                bottom: 20,
                right: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    color: '#483d8b',
                    fontSize: 16,
                  }}>
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // setModalVisible(!modalVisible);
                  handleLogout();
                }}
                style={{marginHorizontal: 20, marginLeft: 50}}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Bold',
                    color: '#483d8b',
                    fontSize: 16,
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* modal is here */}
      {renderModal()}
      <View style={styles.title}>
        {/* back button */}
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={{width: 25, height: 25, tintColor: '#000'}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#000',
            paddingHorizontal: 10,
          }}>
          Settings
        </Text>
      </View>
      <View style={styles.ProfileView}>
        {/* profile picture */}
        {profile == '' ? (
          <Image
            source={require('../assets/images/dummy.jpeg')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              resizeMode: 'contain',
              borderWidth: 1,
              // borderColor: '#bb84ee',
              borderColor: '#000000',
            }}
          />
        ) : (
          <Image
            source={require('../assets/images/userICON.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              resizeMode: 'contain',
              borderWidth: 1,
              // borderColor: '#bb84ee',
              borderColor: '#000000',
            }}
          />
        )}

        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          {/* user name */}
          {name == '' ? (
            <Text style={{color: '#000000', fontSize: 20, fontWeight: '500'}}>
              user
            </Text>
          ) : (
            <Text style={{color: '#000000', fontSize: 20, fontWeight: '500'}}>
              {name}
            </Text>
          )}
          {/* user number */}
          {number == '' ? (
            <Text style={{color: '#000000', fontSize: 14}}>1234567890</Text>
          ) : (
            <Text style={{color: '#000000', fontSize: 14}}>{number}</Text>
          )}
        </View>
      </View>
      {/* other settings */}
      <View style={styles.otherSettings}>
        <Text style={{color: 'grey', marginBottom: 10}}>Other Settings</Text>
        {/* contact us button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ContactUs');
          }}
          style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
            source={require('../assets/images/contactus.png')}
            style={styles.btnIcon}
          />
          <View style={styles.btnChildView}>
            <Text style={styles.btnText2}>Contact Us</Text>
          </View>
        </TouchableOpacity>
        {/* change language button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangeLanguage');
          }}
          style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
            source={require('../assets/images/changelanguage.png')}
            style={styles.btnIcon}
          />
          <View style={styles.btnChildView}>
            <Text style={styles.btnText2}>Change Language</Text>
          </View>
        </TouchableOpacity>
        {/* about us button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AboutUs');
          }}
          style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
            source={require('../assets/images/aboutus.png')}
            style={styles.btnIcon}
          />
          <View style={styles.btnChildView}>
            <Text style={styles.btnText2}>About Us</Text>
          </View>
        </TouchableOpacity>
        {/* logout button */}
        <TouchableOpacity
          style={{flexDirection: 'row', marginVertical: 10}}
          onPress={() => {
            // handleLogout();
            handleLogout2();
          }}>
          <Image
            source={require('../assets/images/logout.png')}
            style={styles.btnIcon}
          />
          <View style={styles.btnChildView}>
            <Text style={styles.btnText2}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerChildView}>
          <TouchableOpacity
            style={styles.privacyButton}
            onPress={() => navigation.navigate('PrivacyPolicy')}>
            <Text style={styles.btnstext}>Privacy Policy</Text>
          </TouchableOpacity>
          <View
            style={{borderLeftWidth: 1, height: 15, borderColor: 'silver'}}
          />
          <TouchableOpacity
            style={styles.privacyButton}
            onPress={() => navigation.navigate('RefundAndCancellation')}>
            <Text style={styles.btnstext}>Refund & Cancellation</Text>
          </TouchableOpacity>
          <View
            style={{borderLeftWidth: 1, height: 15, borderColor: 'silver'}}
          />

          <TouchableOpacity
            style={styles.privacyButton}
            onPress={() => navigation.navigate('TermAndCondition')}>
            <Text style={styles.btnstext}>Term & Condition</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    padding: 10,
  },
  ProfileView: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingVertical: 20,
    elevation: 5,
  },
  otherSettings: {
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingLeft: 10,
    elevation: 5,
  },
  btnChildView: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    //   backgroundColor: 'green',
    flex: 1,
    marginLeft: 10,
    paddingBottom: 12,
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  footerChildView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  privacyButton: {
    // backgroundColor: '#FFFF',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 8,
    color: 'black',
    // borderWidth: 0.5,
    // elevation: 5,
  },
  btnText2: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  btnIcon: {
    width: 20,
    height: 20,
  },
  btnstext: {
    fontSize: 10,
    color: '#000',
    // borderLeftWidth: 1,
    // paddingLeft: 20,
  },
});
