import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

const PremiumLockerButton = ({title}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalPopUp = () => {
    return (
      <Modal
        animationType="slide"
        statusBarTranslucent={true}
        // transparent={true}
        visible={modalVisible}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'aliceblue',
            // backgroundColor: 'rgba(240, 248, 255, 0.8)',
          }}>
          <View
            style={{
              backgroundColor: '#FFFF',
              flexDirection: 'row',
              height: 40,
              paddingHorizontal: 15,
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                color: '#000',
              }}>
              Premium
            </Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <Image
                source={require('../assets/images/close1.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
          {/* premium view */}
          <View
            style={{
              height: 220,
              backgroundColor: '#FFFF',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assets/images/BG.png')}
              style={{width: 170, height: 180}}
            />
            <View>
              {/* yearly plan */}
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'blueviolet',
                    width: 130,
                    height: 60,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-SemiBold',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    Yearly Plan
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    ₹ 499
                  </Text>
                </View>
              </TouchableOpacity>
              {/* monthly plan */}
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'blueviolet',
                    width: 130,
                    height: 60,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-SemiBold',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    Monthly Plan
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    ₹ 99
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* premium view end */}
          {/* free plan view */}
          <View
            style={{
              height: 220,
              backgroundColor: '#FFFF',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assets/images/BG.png')}
              style={{width: 170, height: 180}}
            />
            <View>
              {/* yearly plan */}
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'blueviolet',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-SemiBold',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    Share
                  </Text>
                </View>
              </TouchableOpacity>
              {/* monthly plan */}
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'blueviolet',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    borderRadius: 20,
                    paddingVertical: 5,
                    paddingHorizontal: 20,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Regular',
                      fontSize: 16,
                      color: '#000',
                    }}>
                    Download
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* free plan view end */}
        </View>
      </Modal>
    );
  };

  return (
    <>
      {handleModalPopUp()}
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <View style={styles.lockerBtnView}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/premium-icon.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={styles.Text}>{title}</Text>
          </View>
          <Image
            source={require('../assets/images/padlock.png')}
            style={{width: 20, height: 20}}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default PremiumLockerButton;
const styles = StyleSheet.create({
  lockerBtnView: {
    backgroundColor: '#FFFF',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  Text: {
    color: '#000',
    fontFamily: 'Roboto-Regular',
    marginLeft: 10,
  },
});
