import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PersonalScreen = ({navigation, route, img}) => {
  const [profilepic, setProfilePic] = useState(img);
  const [modalVisible, setModalVisible] = useState(false);
  const data = [1, 1, 1];
  const [name, setName] = useState('');

  const handleUserDetails = async () => {
    try {
      const loginDetail = await AsyncStorage.getItem('loginDetail');
      const userName = await JSON.parse(loginDetail);
      //   console.log('=======', userName.name);
      setName(userName.name);
    } catch (error) {
      console.log('personal screen component AsyncStorage log', error);
    }
  };
  handleUserDetails();

  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setModalVisible(true);
    console.log('personal screen log: The TextInput is focused');
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
    <ScrollView style={styles.container}>
      {handleModalPopUp()}
      {/* main image */}
      <View style={styles.carouselImageView}>
        <Image
          source={
            profilepic === undefined
              ? require('../assets/images/dummy.jpeg')
              : {uri: profilepic}
          }
          // source={{
          //   uri: 'http://192.168.1.21/crafto/admin/media/',
          //   //  +
          //   // focusedImage.post_name,
          // }}
          style={{width: '100%', height: 400, resizeMode: 'cover'}}
        />
      </View>
      {/* personal details */}
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
          placeholder="name"
          style={styles.inputName}
          textContentType="name"
          placeholderTextColor={'silver'}
        />
        <TextInput
          placeholder="About"
          onFocus={onFocus}
          cursorColor={'#bb84ee'}
          // textAlign="center"
          style={styles.inputName}
          placeholderTextColor={'silver'}
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
          placeholderTextColor={'silver'}
          inputMode="numeric"
          style={styles.inputName}
        />
        <TextInput
          placeholder="Address"
          placeholderTextColor={'silver'}
          style={styles.inputName}
        />
        <TextInput
          placeholder="Social Media"
          placeholderTextColor={'silver'}
          style={styles.inputName}
        />
      </View>
      <View style={styles.organizationDetails}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000000',
          }}>
          Organization Details
        </Text>
        <TextInput
          placeholder="Organization Name"
          placeholderTextColor={'silver'}
          style={styles.inputName}
        />
        <TextInput
          placeholder="Organization Logo"
          placeholderTextColor={'silver'}
          style={styles.inputName}
        />
      </View>
      {/* choose image designs */}
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
                  // source={require('../assets/images/photo.jpeg')}
                  source={{
                    uri: 'http://192.168.1.14/crafto/admin/media/',
                    // +
                    // focusedImage.post_name,
                  }}
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
  );
};

export default PersonalScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderWidth: 0.5,
    borderColor: '#808080',
    borderRadius: 5,
    paddingLeft: 10,
    color: '#000',
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
});
