import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect, useState, useRef, useCallback} from 'react';
import Share from 'react-native-share';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {User_Details} from '../Redux/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchImageLibrary} from 'react-native-image-picker';

const Temp = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [clicked, setClicked] = useState('');
  const [focusData, setFocusData] = useState();
  // console.log('focusData screen onview flatish :', focusData.post_name);
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [switchScreen, setSwitchScreen] = useState(1);

  const category = [
    {key: '1', name: 'All'},
    {key: '2', name: 'Day Special'},
    {key: '3', name: 'Birthday'},
    {key: '4', name: 'Political'},
    {key: '5', name: 'Good Morning'},
    {key: '6', name: 'Good Night'},
    {key: '7', name: 'Suvichar'},
    {key: '8', name: 'Bhagwan'},
    {key: '9', name: 'Updesh'},
    {key: '10', name: 'Motivation'},
    {key: '11', name: 'Love'},
  ];
  const temp = value => {
    setClicked(value);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    const ApiData = async () => {
      try {
        const response = await fetch(
          `http://192.168.1.21/crafto/api/get-all.php?key=${selectedCategory}`,
          // 'https://jsonplaceholder.typicode.com/users',
        );
        const json = await response.json();
        // console.log('api console', json.category_name);
        setData(json);
        // const newData = [];
        // newData.push(json);
        // setData(newData);
        // console.log(newData);
      } catch (error) {
        console.log('dashboard Api fetch error', error);
      }
    };
    ApiData();
  }, [selectedCategory]);
  // firsttry
  const onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    // console.log('Visible item or focused item : ', viewableItems[0]?.item);
    setFocusData(viewableItems[0]?.item);
    // console.log('iteration', changed);
  }, []); // first try

  // const [focused, setFocused] = useState([]);
  // console.log(focused.item);
  const options = {
    message: 'this is message',
  };

  // SHARE Function
  const HandleShare = async () => {
    const shareOptions = {
      // url: focusData.post_name,
      url: 'hello',
    };
    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('share error screen Home2', error);
    }
  };
  // Asyncstorage getting data from profile screen
  const [Email, setEmail] = useState('');
  const [Organization, setOrganization] = useState('');
  const [profilepic, setProfilePic] = useState('');
  const [profileName, setProfileName] = useState('');
  // console.log('+++++++', you.user_id);
  const getEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('Email');
      const org = await AsyncStorage.getItem('Organization');
      const loginDetail = await AsyncStorage.getItem('loginDetail');
      // console.log(loginDetail);
      const parse = await JSON.parse(loginDetail);
      // console.log(
      //   `DashBoard component getting user login data using async ${parse.name}`,
      // );
      if (parse !== null) {
        setProfileName(parse.name);
      }
      if (email !== null) {
        setEmail(email);
      }
      if (org !== null) {
        setOrganization(org);
      }
    } catch (err) {
      console.log('dashboard comp asyncstorage error ', err);
    }
  };
  getEmail();

  // storage permission
  // const requestCameraPermission = async () => {
  //   try {
  //     // READ_MEDIA_IMAGES
  //     if (Platform.OS === 'android') {
  //       const androidVersion = Platform.Version;
  //       if (androidVersion >= 33) {
  //         const permission = PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES;
  //         const granted = await PermissionsAndroid.request(permission);
  //         console.log('======', granted);
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           console.log('Permission granted android >= 33');
  //           handleImagePicker();
  //         } else {
  //           console.log('Permission denied android 13 or greater');
  //         }
  //       } else {
  //         const permission =
  //           PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

  //         const granted = await PermissionsAndroid.request(permission);
  //         // console.log(granted);
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           console.log('Permission granted android <= 33');
  //           handleImagePicker();
  //         } else {
  //           console.log('Permission denied less than android 13');
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error requesting permission:', error);
  //   }
  // };

  // const handleImagePicker = async () => {
  //   try {
  //     const result = await launchImageLibrary({
  //       mediaType: 'photo',
  //     });

  //     navigation.navigate('CreateScreenChild', {image: result.assets[0].uri});
  //   } catch (err) {
  //     console.log('handleImagePicker ERROR~', err);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* create button  */}
        <View style={styles.postButtonView}>
          <TouchableOpacity
            style={styles.PostBtn}
            onPress={() => {
              // requestCameraPermission();
              navigation.navigate('CreateScreen');
            }}>
            <Text style={styles.PostBtnTxt}>hello +</Text>
          </TouchableOpacity>
        </View>
        {/* profile picture button  */}
        <View style={styles.ProfileView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            {profilepic == '' ? (
              <Image
                source={require('../assets/images/dummy.jpeg')}
                style={styles.profilePicture}
              />
            ) : (
              <Image
                source={require('../assets/images/IMG.png')}
                style={styles.profilePicture}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {/* category */}
      <View style={styles.CateDiv}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '500',
            marginLeft: 20,
          }}>
          Select Categories
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category}
          style={{marginVertical: 10}}
          renderItem={({item}) => {
            return (
              <View
                style={
                  clicked === item.name
                    ? {
                        backgroundColor: 'black',
                        marginHorizontal: 10,
                        paddingHorizontal: 20,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                      }
                    : {
                        backgroundColor: 'white',
                        marginHorizontal: 10,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#808080',
                      }
                }>
                <TouchableOpacity>
                  <Text
                    style={
                      clicked === item.name
                        ? {
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }
                        : {
                            color: 'black',
                            fontSize: 14,
                            // fontWeight: '500',
                          }
                    }
                    onPress={() => {
                      temp(item.name);
                      setSelectedCategory(item.key);
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      {/* personal and business button start  */}
      <View
        style={{
          backgroundColor: '#FFFF',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 5,
        }}>
        <View>
          <TouchableOpacity
            style={switchScreen == 1 ? styles.PersonalBtm : styles.businessBtn}
            onPress={() => setSwitchScreen(1)}>
            <Text
              style={
                switchScreen == 1
                  ? styles.beforeSwitchButtonTxt
                  : styles.afterswitchButtonTxt
              }>
              Personal
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={switchScreen == 2 ? styles.PersonalBtm : styles.businessBtn}
          onPress={() => setSwitchScreen(2)}>
          <Text
            style={
              switchScreen == 2
                ? styles.beforeSwitchButtonTxt
                : styles.afterswitchButtonTxt
            }>
            Business
          </Text>
        </TouchableOpacity>
      </View>
      {/* personan and business button end  */}

      {/* Screening Switching function start ------- */}
      {/* Personal Screen */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/* <ViewFFFFFF style={{flex: 1, backgroundColor: 'blue'}}> */}
      {switchScreen == 1 ? (
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          {/* flatlist rendering start */}
          <FlatList
            data={data}
            pagingEnabled={true}
            // onViewableItemsChanged={onViewableItemsChanged}
            // viewabilityConfig={{
            //   itemVisiblePercentThreshold: 50,
            // }}
            // showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100}}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    width: windowWidth / 1,
                    height: windowHeight / 1.5,
                    // backgroundColor: 'rgba(0,0,0,0.8)',
                    backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: windowWidth / 1.01,
                      height: windowHeight / 2,
                      backgroundColor: '#000',
                      borderWidth: 1,
                      borderColor: '#FFFF',
                      paddingBottom: 10,
                    }}>
                    <Image
                      source={{
                        uri:
                          'http://192.168.1.21/crafto/admin/media/' +
                          item.post_name,
                      }}
                      style={{
                        flex: 1,
                        resizeMode: 'cover',
                      }}
                    />
                    <View style={styles.flatlistProfiePic}>
                      {profilepic == '' ? (
                        <Image
                          source={require('../assets/images/dummy.jpeg')}
                          style={styles.FlatListUserProfile}
                        />
                      ) : (
                        <Image
                          source={
                            require('../assets/images/IMG.png')
                            // {
                            //   uri:
                            //     'http://192.168.1.14/crafto/admin/media/' +
                            //     userDetails.profile_photo,
                            // }
                          }
                          style={styles.FlatListUserProfile}
                        />
                      )}
                    </View>
                    {/* <Text style={styles.Robin}>{item.name}</Text> */}
                    {profileName == '' ? (
                      <Text style={styles.Robin}>user</Text>
                    ) : (
                      <Text style={styles.Robin}>{profileName}</Text>
                    )}
                  </View>
                </View>
              );
            }}
          />
        </View>
      ) : null}

      {/* business  screen*/}
      {switchScreen == 2 ? (
        <View
          style={{
            flex: 1,
            backgroundColor: '#FFFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          {/* flatlist rendering start */}
          <FlatList
            data={data}
            pagingEnabled={true}
            // onViewableItemsChanged={onViewableItemsChanged}
            // viewabilityConfig={{
            //   itemVisiblePercentThreshold: 50,
            // }}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100}}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    width: windowWidth / 1,
                    height: windowHeight / 1.5,
                    // backgroundColor: 'rgba(0,0,0,0.8)',
                    backgroundColor: 'aliceblue',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      width: windowWidth / 1.01,
                      height: windowHeight / 1.8,
                      backgroundColor: '#000',
                      borderWidth: 1,
                      borderColor: '#FFFF',
                      paddingBottom: 10,
                    }}>
                    <Image
                      source={{
                        uri:
                          'http://192.168.1.21/crafto/admin/media/' +
                          item.post_name,
                      }}
                      style={{
                        flex: 1,
                        resizeMode: 'cover',
                      }}
                    />
                    {/* <Text style={styles.textOnImage}>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's
                        </Text> */}
                    <View style={styles.flatlistProfiePic2}>
                      {profilepic == '' ? (
                        <Image
                          source={require('../assets/images/dummy.jpeg')}
                          style={styles.FlatListUserProfile}
                        />
                      ) : (
                        <Image
                          source={
                            require('../assets/images/IMG.png')
                            // {
                            //   uri:
                            //     'http://192.168.1.14/crafto/admin/media/' +
                            //     userDetails.profile_photo,
                            // }
                          }
                          style={styles.FlatListUserProfile}
                        />
                      )}
                    </View>
                    {profileName == '' ? (
                      <Text style={styles.Robin2}>user</Text>
                    ) : (
                      <Text style={styles.Robin2}>{profileName}</Text>
                    )}
                    {Email == '' && Organization == '' ? (
                      <View>
                        <Text style={styles.RobinEmail}>Email</Text>
                        <Text style={styles.RobinOrganization}>
                          Organization
                        </Text>
                      </View>
                    ) : (
                      <View>
                        <Text style={styles.RobinEmail}>{Email}</Text>
                        <Text style={styles.RobinOrganization}>
                          {Organization}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              );
            }}
          />
        </View>
      ) : null}
      {/* Screening Switching function end ------- */}

      {/* share download edit buttons 👇🏻 */}
      <View style={styles.threeBTNS}>
        <TouchableOpacity style={styles.shareBtn} onPress={() => HandleShare()}>
          <Image
            source={require('../assets/images/share.png')}
            style={styles.shareIcon}
          />
          <Text style={styles.shareTxt}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // requestCameraPermission();
          }}
          style={styles.DownloadBtn}>
          <Image
            source={require('../assets/images/download.png')}
            style={styles.shareIcon}
          />
          <Text style={styles.shareTxt}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            navigation.navigate('EditPage', {focusedImage: focusData});
          }}>
          <Image
            source={require('../assets/images/edit.png')}
            style={styles.shareIcon}
          />
          <Text style={styles.shareTxt}>Edit</Text>
        </TouchableOpacity>
      </View>
      {/* share download edit buttons end */}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Temp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'flex-end',
  },
  PostBtn: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bb84ee',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  postButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ProfileView: {
    alignItems: 'center',
    // position: 'absolute',
    // right: 10,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
  },
  PostBtnTxt: {
    color: '#bb84ee',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'whitesmoke',
    borderWidth: 2,
    borderColor: 'silver',
  },
  CateDiv: {
    backgroundColor: '#FFFF',
  },
  PersonalBtm: {
    width: 150,
    height: 40,
    backgroundColor: '#bb84ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  businessBtn: {
    width: 150,
    height: 40,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  afterswitchButtonTxt: {color: 'black', fontSize: 16, fontWeight: 'bold'},
  beforeSwitchButtonTxt: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  Robin: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  Robin2: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  RobinEmail: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  RobinOrganization: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center',
  },
  shareBtn: {
    // width: 110,
    // height: 40,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'black',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareTxt: {
    color: 'white',
    fontSize: 14,
  },
  shareIcon: {
    width: 15,
    height: 15,
    tintColor: 'white',
    resizeMode: 'contain',
    marginRight: 5,
  },
  DownloadBtn: {
    // width: 130,
    // height: 40,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#bb84ee',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBtn: {
    // width: 110,
    // height: 40,
    paddingVertical: 10,
    paddingHorizontal: 22,
    backgroundColor: '#000000',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOnImage: {
    color: 'white',
    position: 'absolute',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 240,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  flatlistProfiePic: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: -40,
    borderWidth: 2,
    borderColor: 'silver',
  },
  flatlistProfiePic2: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'silver',
    marginTop: -45,
  },
  threeBTNS: {
    width: '100%',
    height: 70,
    backgroundColor: 'whitesmoke',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  FlatListUserProfile: {
    width: 62,
    height: 62,
    borderRadius: 31,
  },
});

// downloading image
// const handleDownloadImage = () => {
//   const {config, fs} = RNFetchBlob;

//   let DownloadDir = fs.dirs.DownloadDir; // Change to the desired directory
//   let option = {
//     fileCache: true,
//     addAndroidDownloads: {
//       useDownloadManager: true,
//       notification: true,
//       title: 'Downloading',
//       path: `${DownloadDir}/${new Date().toISOString()}.jpg`,
//     },
//   };

//   config(option)
//     .fetch(
//       'GET',
//       'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
//     )
//     .then(res => {
//       console.log('Image downloaded:', res.path());
//       Alert.alert('saved');
//     })
//     .catch(error => {
//       console.error('Error downloading image:', error);
//     });
// };
// };

//
//
//
// this code is copy of before alot chnages in create screen child as a backup
{
  /* <View
  style={{
    display: 'flex',
    position: 'absolute',
    // backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    left: textLeft,
    right: textRight,
    top: textTop,
    bottom: textBottom,
  }}>
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1, y: 0}}
    colors={
      gradientColor == null
        ? ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']
        : gradientColor
    }
    style={{
      padding: textOnImage.length == 0 ? 0 : 35,
      borderRadius: 10,
    }}>
    <Draggable
      // x={-50}
      minX={-160}
      maxX={230}
      minY={-160}
      maxY={230}
      children={
        <Text
          style={{
            fontSize: textSize,
            color: textColor,
            textShadowColor: shadowColor,
            fontFamily: textStyle,
            textShadowRadius: shadowRadius,
            textShadowOffset: {width: 2, height: 1},
            fontStyle: italicBtn == true ? 'italic' : 'normal',
          }}>
          {textOnImage}
        </Text>
      }
    />
    <Text
                style={{
                  fontSize: textSize,
                  color: textColor,
                  textShadowColor: shadowColor,
                  fontFamily: textStyle,
                  textShadowRadius: shadowRadius,
                  textShadowOffset: {width: 2, height: 1},
                  fontStyle: italicBtn == true ? 'italic' : 'normal',
                }}>
                {textOnImage}
              </Text>
  </LinearGradient>
</View> */
}
