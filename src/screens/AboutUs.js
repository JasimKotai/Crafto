import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import React, {useState} from 'react';

const AboutUs = ({navigation}) => {
  const [url, setUrl] = useState('https://kotaielectronics.com/');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TitleView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#000',
            paddingHorizontal: 10,
          }}>
          About Us
        </Text>
      </View>
      <View style={styles.Parent}>
        <Image
          source={require('../assets/images/craft-icon.png')}
          style={{width: 80, height: 80}}
        />
        <Text style={{fontSize: 44, color: '#000', fontWeight: '600'}}>
          Crafto
        </Text>
        <Text style={{fontSize: 15, color: 'gray', fontWeight: '500'}}>
          Product by Kotai
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: '#000',
            fontWeight: '500',
            textAlign: 'center',
            margin: 20,
          }}>
          Kotai Electronics Pvt. Ltd. - Leading AI and IOT Development Company
          in India
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#000',
            fontWeight: '500',
            textAlign: 'center',
            margin: 20,
          }}>
          5th Floor, Systron Building, Near RDB Cinema, Sector V, Kolkata, West
          Bengal 700091
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: '500',
              textAlign: 'center',
              marginRight: 10,
            }}>
            Visits Us
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(url);
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#3366CC',
                fontWeight: '500',
                textAlign: 'center',
                marginRight: 10,
              }}>
              {url}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF'
  },
  TitleView: {
    padding: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    elevation: 5,
    marginBottom: 10,
  },
  Parent: {
    padding: 10,
    backgroundColor: '#FFFF',
    alignItems: 'center',
  },
});
