import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PremiumLockerButton from '../components/PremiumLockerButton';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [screen, setScreen] = useState('1');
  const [profilepic, setProfilePic] = useState();
  const [premiumkey, setPremiumKey] = useState(null);

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

  return (
    <View style={styles.container}>
      <View style={styles.backBtnView}>
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(CommonActions.goBack());
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Edit Design</Text>
      </View>
      {/* personal and business btns */}
      <View style={styles.switchBTNSView}>
        <TouchableOpacity
          onPress={() => {
            setScreen('1');
          }}
          style={screen == '1' ? styles.focusedButton : styles.normalButton}>
          <Text style={screen == '1' ? styles.focusedTxt : styles.normalTxt}>
            PERSONAL
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setScreen('2');
          }}
          style={screen == '2' ? styles.focusedButton : styles.normalButton}>
          <Text style={screen == '2' ? styles.focusedTxt : styles.normalTxt}>
            BUSINESS
          </Text>
        </TouchableOpacity>
      </View>
      {/* personal screen is here  */}
      <View style={styles.container}>
        {screen == '1' ? (
          <ScrollView style={styles.container}>
            <View style={styles.DetailsView}>
              <Text style={styles.commonTittlesText}>Personal Details</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.inputName}
                // textContentType="name"
                placeholderTextColor={'#808080'}
              />
              {premiumkey !== null ? (
                <TextInput
                  placeholder="About"
                  cursorColor={'#bb84ee'}
                  // textAlign="center"
                  placeholderTextColor={'#808080'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="About" />
              )}
            </View>
            {/* choose photo (profile select) */}
            <View style={styles.choosePhotoView}>
              <Text style={styles.commonTittlesText}>Choose Photo</Text>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <TouchableOpacity style={styles.upload}>
                  <Image
                    source={require('../assets/images/plus.png')}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 5,
                    borderWidth: 2,
                    borderRadius: 50,
                    marginLeft: 20,
                  }}>
                  <Image
                    source={
                      profilepic === undefined
                        ? require('../assets/images/dummy.jpeg')
                        : {uri: profilepic}
                    }
                    style={{width: 50, height: 50, borderRadius: 30}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* contact details view */}
            <View style={styles.contactDetails}>
              <Text style={styles.commonTittlesText}>Contact Details</Text>
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Contact Number"
                  placeholderTextColor={'silver'}
                  inputMode="numeric"
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Contact Number" />
              )}
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Address"
                  placeholderTextColor={'silver'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Address" />
              )}
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Social Media"
                  placeholderTextColor={'silver'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Social Media" />
              )}
            </View>
            {/* organization details view */}
            <View style={styles.organizationDetails}>
              <Text style={styles.commonTittlesText}>Organization Details</Text>
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Organization Name"
                  placeholderTextColor={'silver'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Organization Name" />
              )}
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Organization Logo"
                  placeholderTextColor={'silver'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Organization Logo" />
              )}
            </View>
            {/* personal screen end here */}
          </ScrollView>
        ) : (
          // business screen is here
          <ScrollView style={styles.container}>
            <View style={styles.DetailsView}>
              <Text style={styles.commonTittlesText}>Personal Details</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                style={styles.inputName}
                placeholderTextColor={'#808080'}
              />
              {premiumkey !== null ? (
                <TextInput
                  placeholder="About"
                  cursorColor={'#bb84ee'}
                  placeholderTextColor={'#808080'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="About" />
              )}
            </View>
            {/* contact details view */}
            <View style={styles.contactDetails}>
              <Text style={styles.commonTittlesText}>Contact Details</Text>
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Contact Number"
                  placeholderTextColor={'silver'}
                  inputMode="numeric"
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Contact Number" />
              )}
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Address"
                  placeholderTextColor={'silver'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Address" />
              )}
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Social Media"
                  placeholderTextColor={'silver'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Social Media" />
              )}
            </View>
            {/* organization details view */}
            <View style={styles.organizationDetails}>
              <Text style={styles.commonTittlesText}>Organization Details</Text>
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Organization Name"
                  placeholderTextColor={'silver'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Organization Name" />
              )}
              {premiumkey !== null ? (
                <TextInput
                  placeholder="Organization Logo"
                  placeholderTextColor={'silver'}
                  style={styles.inputName}
                />
              ) : (
                <PremiumLockerButton title="Organization Logo" />
              )}
            </View>
          </ScrollView>
        )}
      </View>

      {/* save button */}
      <View
        style={{
          backgroundColor: '#FFFF',
          paddingHorizontal: 20,
          paddingVertical: 10,
          elevation: 5,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#00B0F0',
            paddingVertical: 10,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#FFFF',
              fontFamily: 'Montserrat-Regular',
            }}>
            Save Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backBtnView: {
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    // justifyContent: 'center'
    alignItems: 'center',
  },
  DetailsView: {
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    elevation: 5,
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'black',
    paddingVertical: 10,
    marginVertical: 10,
    // height: 50,
  },
  switchBTNSView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  focusedButton: {
    paddingVertical: 8,
    paddingHorizontal: 35,
    // backgroundColor: '#00B0F0',
    backgroundColor: '#bb84ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalButton: {
    paddingVertical: 8,
    paddingHorizontal: 35,
    // backgroundColor: '#bb84ee',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedTxt: {
    color: '#FFFF',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  normalTxt: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  commonTittlesText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
  choosePhotoView: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
  },
  upload: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
  },
  contactDetails: {
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    elevation: 5,
  },
  organizationDetails: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
});
