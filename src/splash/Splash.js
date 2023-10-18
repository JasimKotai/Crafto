import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const handleUserLogin = async () => {
    try {
      const uri = await AsyncStorage.getItem('loginDetail');
      // console.log('Splash log:', uri);
      if (uri) {
        navigation.replace('DashBoard');
      } else {
        navigation.replace('SignUp');
      }
    } catch (error) {
      console.log('Splash log: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/BG3.png')}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/images/craft-icon.png')}
          style={styles.icon}
        />
        <Text style={styles.Title}>Crafto</Text>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => {
            // navigation.replace('SignUp');
            // navigation.replace('DashBoard');
            handleUserLogin();
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 100,
    height: 100,
  },
  Title: {
    fontSize: 36,
    color: '#ffff',
    fontWeight: 'bold',
  },
  Btn: {
    backgroundColor: '#FFFF',
    width: '90%',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 20,
  },
});

// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// const Splash = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require('../assets/images/BG.png')}
//         style={styles.BG}>
//         <View
//           style={{
//             width: '100%',
//             height: '26%',
//             flexDirection: 'row',
//             // backgroundColor: 'black',
//             justifyContent: 'space-between',
//           }}>
//           <Image
//             source={require('../assets/images/Oval.png')}
//             style={styles.Oval}
//           />
//           <Image
//             source={require('../assets/images/Oval.png')}
//             style={styles.OvalRight}
//           />
//         </View>
//         <View
//           style={{
//             width: '100%',
//             height: '20%',
//             // backgroundColor: 'rgba(255,255,255,0.5)',
//             // flexDirection: 'column-reverse',
//             paddingLeft: 20,
//           }}>
//           <Image
//             source={require('../assets/images/LOGO.png')}
//             style={styles.LOGO}
//           />

//           <Image
//             source={require('../assets/images/Oval.png')}
//             style={styles.OvalThird}
//           />
//         </View>
//         <View
//           style={{
//             width: '100%',
//             height: 200,
//             // backgroundColor: 'silver',
//             paddingLeft: '10%',
//             paddingTop: 20,
//           }}>
//           <Text style={styles.Txt}>Design</Text>
//           <Text style={styles.Txt}>System</Text>
//           <Text style={styles.desTxt}>
//             Fully coded React Native components.
//           </Text>
//           <Image
//             source={require('../assets/images/Oval.png')}
//             style={styles.OvalFourth}
//           />
//         </View>
//         <View
//           style={{
//             width: '100%',
//             height: 250,
//             // backgroundColor: 'silver',
//             paddingHorizontal: 30,
//           }}>
//           <Image
//             source={require('../assets/images/Oval.png')}
//             style={styles.OvalLast}
//           />
//           <TouchableOpacity
//             style={styles.Btn}
//             onPress={() => {
//               navigation.replace('SignUp');
//               // navigation.replace('DashBoard');
//             }}>
//             <Text style={{fontSize: 14, fontWeight: 'bold'}}>Get Started</Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// export default Splash;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   BG: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   Oval: {
//     width: 120,
//     height: 120,
//     // right: 50,
//     marginLeft: -55,
//     top: 0,
//   },
//   OvalRight: {
//     width: 199,
//     height: 199,
//     alignSelf: 'flex-end',
//     top: -20,
//     marginRight: -70,
//   },
//   OvalThird: {
//     width: 120,
//     height: 120,
//     position: 'absolute',
//     marginLeft: 20,
//     marginTop: 40,
//   },
//   LOGO: {
//     width: 200,
//     height: 60,
//     marginLeft: 20,
//     marginTop: 20,
//     tintColor: 'white',
//   },
//   Txt: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   desTxt: {
//     color: 'white',
//     fontSize: 16,
//     marginTop: 15,
//   },
//   OvalFourth: {
//     width: 120,
//     height: 120,
//     alignSelf: 'flex-end',
//     // left: 50,
//     marginRight: -80,
//     marginTop: -60,
//   },
//   OvalLast: {
//     width: 120,
//     height: 120,
//     marginTop: 80,
//     position: 'absolute',
//     marginLeft: 80,
//   },
//   Btn: {
//     width: '100%',
//     height: 40,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 10,
//     marginTop: 170,
//   },
// });
