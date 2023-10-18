import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import {CommonActions} from '@react-navigation/native';
import {colorSets} from '../assets/colors/Colors';
import {fontSets} from '../assets/fontsets/FontSets';
import {shadowColorSets} from '../assets/colors/Colors';
import {gradientColors} from '../assets/colors/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Slider from '@react-native-community/slider';
import Draggable from 'react-native-draggable';

const CreateScreenChild = ({navigation, route}) => {
  // console.log(gradientColors[0].opacityColor);

  const [textColor, setTextColor] = useState('#FFFF');
  const [textSize, setTextSize] = useState(16);
  const [italicBtn, setItalicBtn] = useState(false);
  const [textStyle, setTextStyle] = useState('Montserrat-Regular');
  const [shadowColor, setShadowColor] = useState('transparent');
  const [gradientColor, setGradientColor] = useState();
  // console.log(gradientColor);
  const [shadowRadius, setShadowRadius] = useState(1);
  const [textLeft, setTextLeft] = useState(0);
  const [textTop, setTexttop] = useState(0);
  // console.log(backgroundOpacity);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [red2, setRed2] = useState(0);
  const [green2, setGreen2] = useState(0);
  const [blue2, setBlue2] = useState(0);

  const {image} = route.params;
  // console.log('routes logg: ', route.params);
  // text Input text showing in image
  const [textOnImage, setTextOnImage] = useState('');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [slider, setSlider] = useState('1');
  //   const [temp, setTemp] = useState({data});
  const ref = useRef();
  const handleScreenShot = async () => {
    try {
      await ref.current.capture().then(uri => {
        console.log('CreateScreenChild Screenshot taken: ', uri);
        if (uri) {
          navigation.navigate('EditPage', {Img: uri});
        }
      });
    } catch (err) {
      console.log('CreateScreenChild handle screen shot error log:');
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          paddingLeft: 15,
          padding: 5,
          backgroundColor: '#FFFF',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
            // navigation.dispatch(
            //   CommonActions.reset({
            //     index: 0,
            //     routes: [{name: 'DashBoard'}],
            //   }),
            // );
          }}>
          <Image
            source={require('../assets/images/close-btn.png')}
            style={{width: 30, height: 30, tintColor: '#000000'}}
          />
        </TouchableOpacity>
      </View>
      {/* screen shot */}
      <View style={styles.child}>
        <ViewShot
          ref={ref}
          options={{format: 'jpg', quality: 0.9, height: 400}}>
          <View>
            <Image
              source={{uri: image}}
              style={{width: 400, height: '100%'}}
              resizeMode="contain"
            />
            <View
              style={{
                display: 'flex',
                position: 'absolute',
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}>
              {/* draggable for text move on image */}
              <Draggable
                x={100}
                y={200}
                minX={0}
                maxX={windowWidth}
                minY={0}
                maxY={400}
                shouldReverse={false}
                children={
                  <View
                    style={{
                      left: textLeft,
                      top: textTop,
                    }}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      // end={{x: 0.1, y: 1}}
                      end={{x: 1, y: 0}}
                      colors={
                        gradientColor == null
                          ? ['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.0)']
                          : [
                              `rgba(${red}, ${green}, ${blue}, ${alpha})`,
                              `rgba(${red2}, ${green2}, ${blue2}, ${alpha})`,
                            ]
                      }
                      style={{
                        // padding: gradientColor == undefined ? 0 : 35,
                        padding: textOnImage == 0 ? 0 : 35,
                        borderRadius: 10,
                        // opacity: backgroundOpacity,
                      }}>
                      <Text
                        style={{
                          fontSize: textSize,
                          color: textColor,
                          textShadowColor: shadowColor,
                          fontFamily: textStyle,
                          textShadowRadius: shadowRadius,
                          textShadowOffset: {width: 2, height: 1},
                          fontStyle: italicBtn == true ? 'italic' : 'normal',
                        }}>
                        {textOnImage}
                      </Text>
                    </LinearGradient>
                  </View>
                }
              />

              {/* </LinearGradient> */}
            </View>
          </View>
        </ViewShot>
      </View>
      {/* slider View */}
      <View style={styles.sliderView}>
        <TouchableOpacity
          onPress={() => setSlider('1')}
          style={slider == '1' ? styles.sliderBtnFocused : styles.sliderBtn}>
          <Text
            style={
              slider == '1' ? styles.sliderBtnTextFocused : styles.sliderBtnText
            }>
            Text
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSlider('2')}
          style={slider == '2' ? styles.sliderBtnFocused : styles.sliderBtn}>
          <Text
            style={
              slider == '2' ? styles.sliderBtnTextFocused : styles.sliderBtnText
            }>
            Style
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSlider('3')}
          style={slider == '3' ? styles.sliderBtnFocused : styles.sliderBtn}>
          <Text
            style={
              slider == '3' ? styles.sliderBtnTextFocused : styles.sliderBtnText
            }>
            Backgrounds
          </Text>
        </TouchableOpacity>
      </View>
      {/* slider 1 start here */}
      {slider == '1' ? (
        <View
          style={{
            paddingHorizontal: 10,
            backgroundColor: '#FFFF',
          }}>
          <TextInput
            placeholder="Add text here..."
            multiline={true}
            style={styles.TextInput}
            onChangeText={setTextOnImage}
            value={textOnImage}
            textAlignVertical="top"
            placeholderTextColor={'gray'}
          />
          <Text style={{color: '#000000', marginTop: 10}}>
            Text Backgrounds
          </Text>
          {/* backgroung color render */}
          <View style={{flexDirection: 'row', paddingVertical: 10}}>
            <TouchableOpacity
              onPress={() => {
                setGradientColor(['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)']);
              }}
              style={styles.ChooseBackgroundBtn}>
              <Image
                source={require('../assets/images/no-stopping.png')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
            <FlatList
              data={gradientColors}
              renderItem={({item}) => {
                // return (
                // console.log(item.red1)
                //   <TouchableOpacity
                //     onPress={() => {
                //       console.log(item.color);
                //     }}
                //     style={{
                //       backgroundColor: 'red',
                //       padding: 10,
                //     }}></TouchableOpacity>
                // );
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        setGradientColor(item.color);
                        setRed(item.red1);
                        setBlue(item.blue1);
                        setGreen(item.green1);
                        setAlpha(item.alpha1);
                        setRed2(item.red2);
                        setBlue2(item.blue2);
                        setGreen2(item.green2);
                      }}>
                      <LinearGradient
                        colors={item.color}
                        style={{
                          padding: 45,
                          borderRadius: 5,
                          marginRight: 20,
                        }}></LinearGradient>
                    </TouchableOpacity>
                  </View>
                );
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.name}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              // justifyContent: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
              }}>
              <Text style={{color: '#000', fontFamily: 'Montserrat-Regular'}}>
                Opacity
              </Text>
              <Slider
                style={{width: 150, height: 40}}
                minimumValue={0.1}
                maximumValue={0.9}
                minimumTrackTintColor="#bb84ee"
                maximumTrackTintColor="#000000"
                thumbTintColor="#bb84ee"
                onValueChange={setAlpha}
              />
            </View>
            <View>
              <TouchableOpacity
                style={styles.continue}
                onPress={() => {
                  handleScreenShot();
                }}>
                <Text style={{color: '#FFFF', fontWeight: '500'}}>
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}

      {/* slider 1 end */}
      {/* slider 2 start  */}
      {slider == '2' ? (
        <ScrollView style={{flex: 1}}>
          <View style={{padding: 10, backgroundColor: '#FFFF', flex: 1}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
                color: '#000',
              }}>
              Text Size
            </Text>
            <View style={[styles.commonView, {paddingLeft: 7}]}>
              <TouchableOpacity
                onPress={() => {
                  setTextSize(textSize + 1);
                }}
                style={styles.TextSizeBtn}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'MontserratAlternates-SemiBold',
                    color: '#000000',
                  }}>
                  A+
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  height: 3,
                  width: 20,
                  backgroundColor: '#000',
                  marginHorizontal: 7,
                  alignItems: 'center',
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  if (textSize <= 10) {
                    setTextSize(10);
                  } else {
                    setTextSize(textSize - 1);
                  }
                }}
                style={styles.TextSizeBtn}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'MontserratAlternates-SemiBold',
                    color: '#000000',
                  }}>
                  A-
                </Text>
              </TouchableOpacity>
            </View>
            {/* text color */}
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
                color: '#000',
              }}>
              Text Color
            </Text>
            {/* Text color render with flatlist */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <FlatList
                data={colorSets}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      setTextColor(item.color);
                    }}
                    style={[styles.textColorBtn, {backgroundColor: item.color}]}
                  />
                )}
                keyExtractor={item => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            {/* text font */}
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
                color: '#000',
              }}>
              Text Font
            </Text>
            <View
              style={[
                styles.commonView,
                {flexDirection: 'row', paddingLeft: 7},
              ]}>
              <FlatList
                data={fontSets}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setItalicBtn(false);
                        setTextStyle(item.fontFamily);
                      }}
                      style={styles.textFontBtn}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontFamily: item.fontFamily,
                          color: '#000000',
                        }}>
                        अ
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.name}
              />
            </View>
            {/* text style */}
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
                color: '#000',
              }}>
              Text Style
            </Text>
            <View style={styles.commonView}>
              <TouchableOpacity
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  backgroundColor: 'silver',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Montserrat-Regular',
                    color: 'gray',
                  }}>
                  BOLD
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setItalicBtn(!italicBtn);
                }}
                style={
                  italicBtn == true ? styles.focusedItalicBtn : styles.italicBtn
                }>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Montserrat-BoldItalic',
                    color: '#000',
                  }}>
                  ITALIC
                </Text>
              </TouchableOpacity>
            </View>
            {/* SHADOW COLOR */}
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
                color: '#000',
              }}>
              Shadow Color
            </Text>
            <View style={styles.commonView}>
              <FlatList
                data={shadowColorSets}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setShadowColor(item.color);
                      }}
                      style={[styles.ShadowBtn, {backgroundColor: item.color}]}
                    />
                  );
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.name}
              />
            </View>
            {/* shadow size SLIDER */}
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
                color: '#000',
              }}>
              Shadow Size
            </Text>
            <Slider
              style={{width: 150, marginVertical: 10}}
              minimumValue={0}
              maximumValue={30}
              minimumTrackTintColor="#bb84ee"
              maximumTrackTintColor="#bb84ee"
              thumbTintColor="#bb84ee"
              onValueChange={setShadowRadius}
            />
            {/* text position button */}
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Montserrat-Regular',
                color: '#000',
              }}>
              Text Position
            </Text>
            <View style={styles.commonView}>
              {/* left button */}
              <TouchableOpacity
                onPress={() => {
                  setTextLeft(textLeft - 2);
                }}
                style={styles.textPositionBTNS}>
                <Image
                  source={require('../assets/images/less.png')}
                  style={{width: 15, height: 15}}
                />
              </TouchableOpacity>
              {/* right button */}
              <TouchableOpacity
                onPress={() => {
                  setTextLeft(textLeft + 2);
                }}
                style={styles.textPositionBTNS}>
                <Image
                  source={require('../assets/images/greater.png')}
                  style={{width: 15, height: 15}}
                />
              </TouchableOpacity>
              {/* Top button */}
              <TouchableOpacity
                onPress={() => {
                  setTexttop(textTop - 2);
                }}
                style={styles.textPositionBTNS}>
                <Image
                  source={require('../assets/images/up.png')}
                  style={{width: 15, height: 15}}
                />
              </TouchableOpacity>
              {/* Botto button */}

              <TouchableOpacity
                onPress={() => {
                  setTexttop(textTop + 2);
                }}
                style={styles.textPositionBTNS}>
                <Image
                  source={require('../assets/images/down.png')}
                  style={{width: 15, height: 15}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ) : null}
      {/* slider 2 end  */}
      {/* slider 3 start */}
      {slider == '3' ? (
        <View style={{flex: 1, backgroundColor: '#FFFF', paddingVertical: 10}}>
          {/* search button */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#f0f0f0',
              // backgroundColor: 'red',
              height: 35,
              flexl: 1,
              borderRadius: 20,
              marginHorizontal: 10,
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Image
              source={require('../assets/images/search.png')}
              style={{width: 25, height: 25}}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'gray'}
              clearButtonMode="while-editing"
              style={{
                color: 'black',
                width: '90%',
                display: 'flex',
                // alignItems: 'center',
                fontSize: 13,
              }}
            />
          </View>
        </View>
      ) : null}
      {/* slider 3 end */}
    </View>
  );
};

export default CreateScreenChild;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  parent: {
    backgroundColor: '#FFFF',
  },
  child: {
    height: 400,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFFF',
  },
  sliderView: {
    borderWidth: 1,
    borderColor: '#FFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  sliderBtnText: {
    color: '#bb84ee',
    fontFamily: 'Poppins-SemiBold',
  },
  sliderBtnTextFocused: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
  },
  sliderBtn: {
    backgroundColor: '#FFFF',
    paddingVertical: 5,
    flex: 0.33,
    alignItems: 'center',
  },
  sliderBtnFocused: {
    backgroundColor: '#bb84ee',
    paddingVertical: 5,
    flex: 0.33,
    alignItems: 'center',
  },
  TextInput: {
    borderWidth: 2,
    paddingVertical: 30,
    borderRadius: 10,
    borderColor: '#bb84ee',
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Roboto-Regular',
  },
  ChooseBackgroundBtn: {
    width: 90,
    height: 90,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  continue: {
    backgroundColor: '#bb84ee',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  TextSizeBtn: {
    backgroundColor: '#f0f8ff',
    // width: 40,
    // height: 35,
    paddingVertical: 6.5,
    paddingHorizontal: 13,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColorBtn: {
    backgroundColor: '#000',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  ShadowBtn: {
    backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  commonView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  textPositionBTNS: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    backgroundColor: '#f0f0f0',
    marginRight: 10,
    borderRadius: 5,
  },
  italicBtn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'whitesmoke',
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'silver',
  },
  focusedItalicBtn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'gold',
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'silver',
  },
  textFontBtn: {
    backgroundColor: '#f0f8ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 0.5,
  },
});
