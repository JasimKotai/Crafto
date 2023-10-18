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

const PrivacyPolicy = ({navigation}) => {
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
          PrivacyPolicy
        </Text>
      </View>
      <ScrollView>
        <View style={styles.parent}>
          <Text
            style={{
              fontSize: 28,
              color: '#000000',
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Crafto's Privacy Policy
          </Text>
          <Text
            style={{
              fontSize: 16,
              // fontWeight: '500',
              color: '#000000',
              textAlign: 'justify',
              marginVertical: 20,
            }}>
            Crafto recognizes the importance of maintaining your privacy. We
            value your privacy and appreciate your trust in us. This Policy
            describes how we treat user information that we collect on Crafto
            and other offline sources. This Privacy Policy applies to current
            and former visitors ("users" to our app and to our online
            customers). By visitting and/or using our website and app, you agree
            to this Privacy Policy.
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#000000',
              textAlign: 'justify',
              marginBottom: 10,
            }}>
            Data Protection :
          </Text>
          <Text
            style={{
              fontSize: 16,
              // fontWeight: '500',
              color: '#000000',
              textAlign: 'justify',
            }}>
            We don't share any of your personal information with any third party
            or any individual. All the data is strictly protected under the
            judical laws of data protection. Only in very extreme cases, we may
            only share information to respond to a court order or court
            subpoena. Before sharing any information, we will take your consent,
            before we go ahead with it. Information you provide and why it is
            necessary : We may collect your name, email, phone number and
            photograph. This information is used to create your profile on the
            app. We may ask you for your permission to upload photos, videos,
            and other file formats on the app. lorem20 Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#000000',
              textAlign: 'justify',
              marginBottom: 10,
            }}>
            Jurisdiction :
          </Text>
          <Text
            style={{
              fontSize: 16,
              // fontWeight: '500',
              color: '#000000',
              textAlign: 'justify',
            }}>
            LOREM Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: '#000000',
              textAlign: 'justify',
              marginBottom: 10,
            }}>
            Contact :
          </Text>
          <Text
            style={{
              fontSize: 16,
              // fontWeight: '500',
              color: '#000000',
              textAlign: 'justify',
            }}>
            LOREM Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFF',
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
    paddingHorizontal: 25,
  },
});
