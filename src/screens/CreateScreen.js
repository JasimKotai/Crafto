import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const CreateScreen = ({navigation}) => {
  const [wallpaper, setWallpaper] = useState('');
  const [loading, setLoading] = useState(true);
  // const [selectImage, setSelectImage] = useState('');
  const [img, setIMG] = useState('');
  // console.log(img.path);
  const fetchWallpaper = async () => {
    try {
      const url = await fetch(
        `http://192.168.1.21/crafto/api/get-all.php?key=1`,
      );
      const response = await url.json();

      // console.log('api console Post Screen', response);
      setWallpaper(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWallpaper();
  }, []);

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
            // console.log('CreateScreen Permission granted android >= 33');
            handleImagePicker();
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
            handleImagePicker();
          } else {
            console.log('Permission denied');
          }
        }
      }
    } catch (error) {
      console.error('Error requesting permission:', error);
    }
  };

  const handleImagePicker = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        width: 350,
        height: 350,
        cropping: true,
        mediaType: 'photo',
        compressImageQuality: 1,
      });
      setIMG(image);
      // console.log('handleImagePicker log :', image);
      navigation.navigate('CreateScreenChild', {image: image.path});
    } catch (error) {
      console.log('create screen handleImagePicker log:', error);
    }
  };
  //
  // const handleImagePicker = async () => {
  //   try {
  //     const result = await launchImageLibrary({
  //       mediaType: 'photo',
  //     });
  //     console.log('create screen result:', result);
  //     navigation.navigate('CreateScreenChild', {image: result.assets[0].uri});
  //   } catch (err) {
  //     console.log('handleImagePicker ERROR~', err);
  //   }
  // };

  // const handleImagePicker = async () => {
  //   let options = {
  //     storageOptions: {
  //       path: 'image',
  //     },
  //   };

  //   try {
  //     const response = await new Promise((resolve, reject) => {
  //       launchImageLibrary(options, response => {
  //         if (response.didCancel) {
  //           reject('Image selection cancelled');
  //         } else if (response.error) {
  //           reject('ImagePicker Error: ' + response.error);
  //         } else {
  //           resolve(response);
  //         }
  //       });
  //     });

  //     setSelectImage(response.assets[0].uri);
  //     console.log(response.assets[0].uri);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  //
  return (
    <SafeAreaView style={styles.Parent}>
      <View style={styles.HeaderView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text style={styles.Title}>Create</Text>
      </View>
      <View style={styles.AddBtnView}>
        <TouchableOpacity
          style={styles.AddBtn}
          onPress={() => {
            // handleImagePicker()
            requestCameraPermission();
          }}>
          <Image
            source={require('../assets/images/add-image.png')}
            style={{width: 30, height: 30, marginRight: 10}}
            tintColor="green"
          />
          <Text style={styles.AddBtnText}>Add image from gallery</Text>
        </TouchableOpacity>
      </View>
      {/* SELECTED IMAGE JUST TEMPORARY CHACK  */}
      {/* <View>
        <Image source={{uri: selectImage}} style={{width: 300, height: 300}}/>
      </View> */}
      <View style={styles.RenderWallpaperView}>
        <Text
          style={{
            fontSize: 22,
            color: '#000000',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          OR
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#000000',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Select Wallpaper
        </Text>
        <FlatList
          data={wallpaper}
          contentContainerStyle={{paddingBottom: 50}}
          // onRefresh={() => handleWallpaper()}
          // refreshing={loading}
          renderItem={({item}) => {
            return (
              <View style={styles.flatlistParentView}>
                <TouchableOpacity>
                  <Image
                    source={{
                      uri:
                        'http://192.168.1.14/crafto/admin/media/' +
                        item.post_name,
                    }}
                    style={{height: 300, resizeMode: 'cover'}}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
  },
  HeaderView: {
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Title: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
    marginLeft: 9,
  },
  AddBtnView: {
    // flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f0f0f0',
  },
  AddBtn: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingVertical: 18,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    marginVertical: 5,
  },
  AddBtnText: {
    color: '#000000',
    fontSize: 22,
    fontWeight: '400',
  },
  RenderWallpaperView: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  flatlistParentView: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
