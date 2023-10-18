import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
  Platform,
  PermissionsAndroid,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const BusinessScreen = ({navigation, route, img}) => {
  // console.log('Business screen:::: ', img);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [name, setName] = useState('');
  const [profilepic, setProfilePic] = useState(img);
  const [modalVisible, setModalVisible] = useState(false);

  const data = [1, 1, 1];
  const handleUserDetails = async () => {
    try {
      const loginDetail = await AsyncStorage.getItem('loginDetail');
      const userName = await JSON.parse(loginDetail);
      setName(userName.name);
    } catch (error) {
      console.log('personal screen component AsyncStorage log', error);
    }
  };
  handleUserDetails();

  // text input onfucus function
  const onFocus = () => {
    setModalVisible(true);
    console.log('business log: The TextInput is focused');
  };

  const handleModalPopUp = () => {
    return (
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        // transparent={true}
        visible={modalVisible}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'aliceblue',
            // backgroundColor: 'rgba(240, 248, 255, 0.8)',
          }}>
          <View
            style={{
              backgroundColor: '#FFFF',
              flexDirection: 'row',
              height: 40,
              paddingHorizontal: 15,
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#000',
              }}>
              Premium
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <Image
                source={require('../assets/images/close1.png')}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          </View>
          {/* premium view */}
          <View
            style={{
              height: 220,
              backgroundColor: '#FFFF',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assets/images/BG.png')}
              style={{width: 170, height: 180}}
            />
            <View>
              {/* yearly plan */}
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'blueviolet',
                    width: 130,
                    height: 60,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-SemiBold',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    Yearly Plan
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    ₹ 499
                  </Text>
                </View>
              </TouchableOpacity>
              {/* monthly plan */}
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'blueviolet',
                    width: 130,
                    height: 60,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-SemiBold',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    Monthly Plan
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    ₹ 99
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* premium view end */}
          {/* free plan view */}
          <View
            style={{
              height: 220,
              backgroundColor: '#FFFF',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assets/images/BG.png')}
              style={{width: 170, height: 180}}
            />
            <View>
              {/* yearly plan */}
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'blueviolet',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-SemiBold',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    Share
                  </Text>
                </View>
              </TouchableOpacity>
              {/* monthly plan */}
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'blueviolet',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    borderRadius: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    Download
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* free plan view end */}
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {handleModalPopUp()}
      <ScrollView>
        {/* main image */}
        <View style={styles.carouselImageView}>
          <Image
            source={
              profilepic === undefined
                ? require('../assets/images/dummy.jpeg')
                : {uri: profilepic}
              // {uri: img}
            }
            // source={{
            //   uri: 'http://192.168.1.21/crafto/admin/media/',
            //   //  +
            //   // focusedImage.post_name,
            // }}
            style={{width: '100%', height: 400, resizeMode: 'cover'}}
          />
        </View>
        {/* personal detail */}
        <View style={styles.DetailsView}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Personal Details
          </Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.inputName}
            // textContentType="name"
            placeholderTextColor={'#808080'}
          />
          <TextInput
            placeholder="About"
            onFocus={onFocus}
            cursorColor={'#bb84ee'}
            // textAlign="center"
            placeholderTextColor={'#808080'}
            style={styles.inputName}
          />
        </View>
        {/* choose photo */}
        <View style={styles.choosePhotoView}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            Choose Photo
          </Text>
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
        {/* contact details */}
        <View style={styles.contactDetails}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Contact Details
          </Text>
          <TextInput
            placeholder="Contact Number"
            inputMode="numeric"
            onFocus={onFocus}
            style={styles.inputName}
            placeholderTextColor={'#808080'}
          />
          <TextInput
            placeholder="Address"
            placeholderTextColor={'#808080'}
            style={styles.inputName}
            onFocus={onFocus}
          />
          <TextInput
            placeholder="Social Media"
            placeholderTextColor={'#808080'}
            style={styles.inputName}
            onFocus={onFocus}
          />
        </View>
        {/* organisation detail */}
        <View style={styles.organizationDetails}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Organisation Details
          </Text>
          <TextInput
            placeholder="Organization Name"
            placeholderTextColor={'#808080'}
            style={styles.inputName}
            onFocus={onFocus}
          />
          <TextInput
            placeholder="Organization Logo"
            placeholderTextColor={'#808080'}
            style={styles.inputName}
            onFocus={onFocus}
          />
        </View>
        {/* choose image style */}
        <View style={styles.chooseDesignView}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            Choose Designs
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => {
              return (
                <View style={styles.flatlistParent}>
                  <Image
                    source={
                      profilepic === undefined
                        ? require('../assets/images/dummy.jpeg')
                        : {uri: profilepic}
                    }
                    // source={{
                    //   uri: 'http://192.168.1.14/crafto/admin/media/',
                    // +
                    // focusedImage.post_name,
                    // }}
                    style={{width: 250, height: 200}}
                  />
                  <Image
                    source={
                      profilepic === undefined
                        ? require('../assets/images/dummy.jpeg')
                        : {uri: profilepic}
                    }
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      alignSelf: 'center',
                      marginTop: -30,
                      borderWidth: 1,
                      borderColor: '#000',
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'black',
                      textAlign: 'center',
                    }}>
                    {name == '' ? 'user' : name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default BusinessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TitleView: {
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    // justifyContent: 'center'
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '500',
    marginLeft: 15,
  },
  childView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  focusedButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    // backgroundColor: '#00B0F0',
    backgroundColor: '#bb84ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    // backgroundColor: '#bb84ee',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focusedTxt: {
    color: '#FFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  normalTxt: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  carouselImageView: {
    backgroundColor: '#FFFF',
    paddingHorizontal: 5,
  },
  DetailsView: {
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 5,
    elevation: 5,
  },
  inputName: {
    borderWidth: 2,
    borderColor: 'silver',
    borderRadius: 5,
    paddingLeft: 10,
    color: 'black',
    paddingVertical: 10,
    marginVertical: 10,
  },
  choosePhotoView: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
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
    marginHorizontal: 5,
    elevation: 5,
  },
  organizationDetails: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  chooseDesignView: {
    paddingVertical: 20,
    // backgroundColor: '#f0f0f0',
    backgroundColor: 'whitesmoke',
    paddingLeft: 20,
    elevation: 5,
  },
  flatlistParent: {
    height: 250,
    backgroundColor: 'white',
    marginVertical: 10,
    marginRight: 20,
  },
  footerView: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
  },
  shareBTN: {
    flexDirection: 'row',
    backgroundColor: 'green',
    paddingHorizontal: 45,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  downloadBTN: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingHorizontal: 32,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
});
