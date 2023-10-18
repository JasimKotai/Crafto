// import {View, Text} from 'react-native';
// import React from 'react';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import DashBoard from '../screens/DashBoard';
// import Profile from '../screens/Profile';
// import Account from '../screens/Account';
// import ChangeLanguage from '../screens/ChangeLanguage';
// import AboutUs from '../screens/AboutUs';
// import ContactUs from '../screens/ContactUs';
// import NotificationIcon from '../components/NotificationIcon';
// import ProfileIcon from '../components/ProfileIcon';
// const Drawers = createDrawerNavigator();
// const Drawer = () => {
//   return (
//     <Drawers.Navigator
//       screenOptions={{
//         headerTransparent: true,
//         drawerActiveBackgroundColor: 'black',
//         drawerActiveTintColor: 'white',
//         headerTintColor: 'black',
//       }}>
//       <Drawers.Screen
//         name="Home"
//         component={DashBoard}
//         options={{
//           headerTitle: '',
//           // headerTitleAlign: 'left',
//           // headerRight: props => <NotificationIcon {...props} />
//           // headerRight: props => <ProfileIcon {...props} />,
//         }}
//       />
//       {/* <Drawers.Screen
//         name="Create Account"
//         component={Account}
//         options={{
//           headerShown: true,
//           headerTitleAlign: 'left',
//           headerTintColor: 'white',
//         }}
//       /> */}
//       {/* <Drawers.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           headerShown: true,
//           headerTitleAlign: 'left',
//           headerTintColor: 'white',
//         }}
//       /> */}
//       <Drawers.Screen
//         name="Change Language"
//         component={ChangeLanguage}
//         options={{headerTitle: ''}}
//       />
//       <Drawers.Screen name="About Us" component={AboutUs} />
//       <Drawers.Screen name="Contact Us" component={ContactUs} />
//     </Drawers.Navigator>
//   );
// };

// export default Drawer;

import {View, Text} from 'react-native';
import React from 'react';

const Drawer = () => {
  return (
    <View>
      <Text>Drawer</Text>
    </View>
  );
};

export default Drawer;
