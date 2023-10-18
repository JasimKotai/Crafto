import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const RefundAndCancellation = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.title}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../assets/images/back.png')}
            style={{width: 25, height: 25, tintColor: '#000'}}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            color: '#000',
            paddingHorizontal: 10,
          }}>
          Refund & Cancellation
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#FFFF',
            paddingTop: 21,
          }}>
          <Text style={{fontSize: 28, color: '#000', fontWeight: '600'}}>
            Crafto Pricing, Cancellation{' '}
          </Text>
          <Text style={{fontSize: 28, color: '#000', fontWeight: '600'}}>
            And Refunds
          </Text>
        </View>
        <View style={styles.parent}>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              marginVertical: 20,
              fontWeight: '500',
            }}>
            General notes on Cancellation & Refund :
          </Text>
          <View style={{backgroundColor: '#FFFF', marginHorizontal: 10,}}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              1. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              2. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              3. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s,
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              4. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              5. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500sLorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              6. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry,
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              7. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              8. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              9. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: '#000',
                textAlign: 'justify',
                marginBottom: 10,
              }}>
              10. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RefundAndCancellation;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    backgroundColor: '#FFFF',
    padding: 10,
    paddingTop: 20,
    elevation: 5,
    marginBottom: 2,
  },
  parent: {
    padding: 10,
    backgroundColor: '#FFFF',
    paddingHorizontal: 20,
  },
});
