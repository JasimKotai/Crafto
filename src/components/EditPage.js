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
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import ViewShot from 'react-native-view-shot';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import PersonalScreen from '../screens/PersonalScreen';
import BusinessScreen from '../screens/BusinessScreen';
const EditPage = ({navigation, route}) => {
  const [screen, setScreen] = useState('1');
  const data = [1, 1, 1];
  // const {focusedImage} = route.params;
  // console.log('edit component focusedImage ::', focusedImage);
  const image = route.params;
  // console.log('-------', image);
  const shareimage = image.Img;
  // console.log('EditPage log image-', shareimage);

  const HandleShare = async () => {
    const shareOptions = {
      // url: sharingData,
      url: shareimage,
    };
    try {
      await Share.open(shareOptions);
    } catch (error) {
      console.log('share error screen Home2', error);
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
          // console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // console.log('Permission granted android >= 33');
            handleDownload();
          } else {
            console.log('Permission denied');
          }
        } else {
          const permission =
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

          const granted = await PermissionsAndroid.request(permission);
          // console.log(granted);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permission granted android <= 33');
            handleDownload();
          } else {
            console.log('Permission denied');
          }
        }
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  // const handleDownload = () => {
  //   // Define the URL of the image you want to download
  //   const imageUrl = shareimage;

  //   const timestamp = Date.now();
  //   const uniqueFileName = `image ${timestamp}.jpg`;

  //   // Define the path where you want to save the downloaded image
  //   const imagePath = `${RNFS.DownloadDirectoryPath}/${uniqueFileName}`;

  //   // Use RNFS to download the image
  //   RNFS.downloadFile({
  //     fromUrl: imageUrl,
  //     toFile: imagePath,
  //   })
  //     .promise.then(response => {
  //       if (response.statusCode === 200) {
  //         console.log('Image downloaded successfully.');
  //         // You can now use the image at `imagePath`.
  //         console.log(response);
  //         Alert.alert('Saved');
  //       } else {
  //         console.error(
  //           'Edit Page log: Image download failed with status code:',
  //           response.statusCode,
  //         );
  //       }
  //     })
  //     .catch(error => {
  //       console.error('Image download error:', error);
  //     });
  // };
  // text input onfucus function
  const [focused, setFocused] = useState(false);
  const onFocus = () => {
    setFocused(true);
    console.log('Edit Page log: The TextInput is focused');
  };

  //
  const handleDownload = async () => {
    try {
      const image = CameraRoll.save(shareimage, 'photo');
      if (image) {
        Alert.alert(
          '',
          'Image saved successfully.',
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.log('editpage handleDownload log:', error);
    }
  };
  //

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TitleView}>
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
      <View style={styles.childView}>
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
      <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
        {screen == '1' ? (
          <PersonalScreen img={image.Img} />
        ) : (
          <BusinessScreen img={image.Img} />
        )}
      </View>
      <View style={styles.footerView}>
        <TouchableOpacity style={styles.shareBTN} onPress={() => HandleShare()}>
          <Image
            source={require('../assets/images/whatsapp.png')}
            style={{width: 13, height: 13, tintColor: '#FFFF'}}
            tintColor="#FFFF"
          />
          <Text
            style={{
              fontSize: 14,
              color: '#FFFF',
              fontWeight: '600',
              paddingLeft: 5,
            }}>
            Share
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            requestCameraPermission();
            // saveScreenshotToDownload();
          }}
          style={styles.downloadBTN}>
          <Image
            source={require('../assets/images/download.png')}
            style={{width: 13, height: 13}}
            tintColor="#FFA500"
          />
          <Text
            style={{
              fontSize: 14,
              color: '#FFA500',
              fontWeight: '600',
              paddingLeft: 5,
            }}>
            Download
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditPage;

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
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 5,
  },
  inputName: {
    borderWidth: 2,
    borderColor: 'silver',
    borderRadius: 10,
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
    borderRadius: 20,
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
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 5,
  },
  organizationDetails: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    marginBottom: 20,
  },
  chooseDesignView: {
    paddingVertical: 20,
    // backgroundColor: '#f0f0f0',
    backgroundColor: 'whitesmoke',
    paddingLeft: 20,
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

// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import React from 'react';
// const EditPage = ({navigation, route}) => {
//   const {data} = route.params;
//   console.log('Data ::', data);
//   return (
//     <View style={styles.container}>
//       <SafeAreaView>
//         <View style={styles.TitleDiv}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.goBack();
//             }}>
//             <Image
//               source={require('../assets/images/back.png')}
//               style={styles.Back}
//             />
//           </TouchableOpacity>
//           <Text style={styles.TitleTxt}>Edit Design</Text>
//         </View>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <View style={styles.PhotoDiv}>
//             <View style={styles.photoFrame}>
//               <Image
//                 source={require('../assets/images/photo.jpeg')}
//                 style={styles.Photo}
//               />
//               <Text
//                 style={{
//                   position: 'absolute',
//                   top: 20,
//                   left: 20,
//                   right: 20,
//                   bottom: 20,
//                   textAlign: 'center',
//                   color: 'white',
//                   fontSize: 22,
//                   fontWeight: 'bold',
//                 }}>
//                 {/* {data.name} */}
//               </Text>
//             </View>
//             <View style={styles.NextBtnDiv}>
//               <TouchableOpacity style={styles.BackBtn}>
//                 <Image
//                   source={require('../assets/images/less-than.png')}
//                   style={{width: 10, height: 10, marginRight: 20}}
//                 />
//                 <Text style={styles.nextbackTxt}>Back</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.NextBtn}>
//                 <Text style={styles.nextbackTxt}>Next</Text>
//                 <Image
//                   source={require('../assets/images/greater-than.png')}
//                   style={{width: 10, height: 10, marginLeft: 20}}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View style={styles.personalDetail}>
//             <View
//               style={{
//                 height: 40,
//                 paddingHorizontal: 15,
//                 backgroundColor: 'white',
//                 alignContent: 'center',
//                 justifyContent: 'center',
//               }}>
//               <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
//                 Personal Details
//               </Text>
//             </View>
//             <View>
//               <TextInput
//                 placeholder="Name"
//                 style={styles.TeextInput}
//                 autoCapitalize="none"
//               />
//             </View>
//             <View>
//               <TextInput
//                 placeholder="About"
//                 style={styles.TeextInput}
//                 autoCapitalize="none"
//               />
//             </View>
//           </View>
//           <View style={styles.addPhotoDiv}>
//             <View>
//               <Text
//                 style={{
//                   color: 'black',
//                   fontSize: 20,
//                   marginHorizontal: 15,
//                   fontWeight: 'bold',
//                   marginVertical: 10,
//                   borderRadius: 10,
//                 }}>
//                 Upload Photo
//               </Text>
//             </View>
//             <View style={{flexDirection: 'row'}}>
//               <View>
//                 <TouchableOpacity
//                   style={{
//                     width: 70,
//                     height: 70,
//                     backgroundColor: 'silver',
//                     borderRadius: 50,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginHorizontal: 10,
//                   }}>
//                   <Image
//                     source={require('../assets/images/plus.png')}
//                     style={{width: 25, height: 25}}
//                   />
//                 </TouchableOpacity>
//                 <Text
//                   style={{
//                     color: 'black',
//                     fontSize: 14,
//                     fontWeight: 'bold',
//                     textAlign: 'center',
//                     marginTop: 5,
//                   }}>
//                   Upload
//                 </Text>
//               </View>
//               <View>
//                 <TouchableOpacity
//                   style={{
//                     width: 72,
//                     height: 72,
//                     backgroundColor: 'white',
//                     borderRadius: 50,
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginHorizontal: 10,
//                     borderWidth: 2,
//                     borderColor: 'black',
//                   }}>
//                   <Image
//                     source={require('../assets/images/IMG.png')}
//                     style={{width: 60, height: 60, borderRadius: 50}}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//           <View style={styles.ContactView}>
//             <Text style={styles.ContactTitle}>Contact</Text>
//             <TextInput placeholder="Number" style={styles.ContactInput} />
//             <TextInput placeholder="Address" style={styles.ContactInput} />
//             <TextInput placeholder="Social" style={styles.ContactInput} />
//           </View>
//           <View style={styles.organization}>
//             <Text style={styles.organizationTitle}>Organization</Text>
//             <TextInput
//               placeholder="Organization Name"
//               style={styles.organizationInput}
//             />
//             <TextInput
//               placeholder="Organization Logo"
//               style={styles.organizationInput}
//             />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </View>
//   );
// };

// export default EditPage;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'whitesmoke',
//   },
//   TitleDiv: {
//     width: '100%',
//     height: '12%',
//     backgroundColor: 'white',
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingLeft: '3%',
//   },
//   Back: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     tintColor: 'black',
//   },
//   TitleTxt: {
//     color: 'black',
//     fontSize: 22,
//     paddingLeft: 20,
//     fontWeight: 'bold',
//   },
//   PhotoDiv: {
//     width: '100%',
//     height: 450,
//     backgroundColor: 'whitesmoke',
//   },
//   photoFrame: {
//     width: '100%',
//     height: 360,
//     backgroundColor: 'white',
//   },
//   Photo: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   NextBtnDiv: {
//     width: '100%',
//     height: 80,
//     backgroundColor: 'white',
//     justifyContent: 'space-around',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   BackBtn: {
//     width: 100,
//     height: 30,
//     backgroundColor: 'whitesmoke',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   NextBtn: {
//     width: 100,
//     height: 30,
//     backgroundColor: 'whitesmoke',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   nextbackTxt: {
//     color: 'black',
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   personalDetail: {
//     display: 'flex',
//     height: 200,
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     borderRadius: 10,
//   },
//   TeextInput: {
//     height: 40,
//     backgroundColor: 'white',
//     borderWidth: 2,
//     borderColor: 'black',
//     marginHorizontal: 20,
//     borderRadius: 10,
//     paddingLeft: 20,
//     color: 'black',
//     marginTop: 20,
//   },
//   addPhotoDiv: {
//     display: 'flex',
//     height: 160,
//     backgroundColor: 'white',
//     marginVertical: 20,
//     borderRadius: 10,
//     justifyContent: 'flex-start',
//   },
//   ContactView: {
//     display: 'flex',
//     height: 250,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   ContactTitle: {
//     color: 'black',
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingLeft: 18,
//     marginTop: 10,
//   },
//   ContactInput: {
//     height: 40,
//     backgroundColor: 'white',
//     borderWidth: 2,
//     borderColor: 'black',
//     marginHorizontal: 20,
//     borderRadius: 10,
//     paddingLeft: 20,
//     color: 'black',
//     marginTop: 20,
//   },
//   organization: {
//     display: 'flex',
//     height: 100,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     marginBottom: 199,
//   },
//   organizationTitle: {
//     fontSize: 18,
//     color: 'black',
//     marginLeft: 15,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   organizationInput: {
//     height: 40,
//     backgroundColor: 'white',
//     borderWidth: 2,
//     borderColor: 'black',
//     marginHorizontal: 20,
//     borderRadius: 10,
//     paddingLeft: 20,
//     color: 'black',
//     marginTop: 20,
//   },
// });

/////////////////////////////////////////////////////////////////////
