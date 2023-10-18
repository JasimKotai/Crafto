import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const TermAndCondition = ({navigation}) => {
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
          Term & Condition
        </Text>
      </View>
      <ScrollView>
        <View style={styles.parent}>
          <Text
            style={{
              fontSize: 28,
              color: '#000',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            Crafto Terms of Use
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              textAlign: 'justify',
              marginVertical: 10,
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsu Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsu
          </Text>
          <Text style={{fontSize: 18, color: '#000'}}>
            CHANGES TO TERMS AND SERVICES
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              textAlign: 'justify',
              marginVertical: 10,
            }}>
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not o
          </Text>
          <Text style={{fontSize: 18, color: '#000'}}>
            WHO MAY USE OUR SERVICES
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              textAlign: 'justify',
              marginVertical: 10,
            }}>
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not o
          </Text>
          <Text style={{fontSize: 18, color: '#000'}}>
            HOW TO USE OUR SERVICES
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              textAlign: 'justify',
              marginVertical: 10,
            }}>
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not o
          </Text>
          <Text style={{fontSize: 18, color: '#000'}}>
            GENERAL NOTES ON CANCELLATION AND REFUND
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              textAlign: 'justify',
              marginVertical: 10,
            }}>
            unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsu Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not o
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TermAndCondition;
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
    paddingTop: 20,
    backgroundColor: '#FFFF',
    paddingHorizontal: 30,
  },
});
