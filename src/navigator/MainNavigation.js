import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../splash/Splash';
import EditPage from '../components/EditPage';
import Login from '../screens/Login';
import Account from '../screens/Account';
import Profile from '../screens/Profile';
import DashBoard from '../screens/DashBoard';
import SignUp from '../screens/SignUp';
import Settings from '../screens/Settings';
import ContactUs from '../screens/ContactUs';
import AboutUs from '../screens/AboutUs';
import ChangeLanguage from '../screens/ChangeLanguage';
import CreateScreen from '../screens/CreateScreen';
import EditProfile from '../screens/EditProfile';
import UploadScreen from '../components/UploadScreen';
import CreateScreenChild from '../screens/CreateScreenChild';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import RefundAndCancellation from '../screens/RefundAndCancellation';
import TermAndCondition from '../screens/TermAndCondition';
import BusinessScreen from '../screens/BusinessScreen';
import PersonalScreen from '../screens/PersonalScreen';
import Test from '../components/Test';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
        <Stack.Screen
          name="EditPage"
          component={EditPage}
          options={{
            headerShown: false,
            headerTitle: '',
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="UploadScreen" component={UploadScreen} />
        <Stack.Screen name="CreateScreenChild" component={CreateScreenChild} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen
          name="RefundAndCancellation"
          component={RefundAndCancellation}
        />
        <Stack.Screen name="TermAndCondition" component={TermAndCondition} />
        <Stack.Screen name="BusinessScreen" component={BusinessScreen} />
        <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
