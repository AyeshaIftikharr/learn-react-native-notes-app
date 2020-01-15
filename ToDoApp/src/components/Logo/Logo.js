import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Keyboard,
  ImageBackground,
  Image,
  Animated,
  Platform,
} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

const Logo = ({ tintColor }) => {
  // const [containerImageWidth] = useState(
  //   new Animated.Value(styles.$largeContainerSize),
  // );
  // const [imageWidth] = useState(new Animated.Value(styles.$largeImageSize));

  // const keyboardWillShow = () => {
  //   Animated.parallel([
  //     Animated.timing(containerImageWidth, {
  //       toValue: styles.$smallContainerSize,
  //       duration: ANIMATION_DURATION,
  //     }),
  //     Animated.timing(imageWidth, {
  //       toValue: styles.$smallImageSize,
  //       duration: ANIMATION_DURATION,
  //     }),
  //   ]).start();
  // };

  // const keyboardWillHide = () => {
  //   Animated.parallel([
  //     Animated.timing(containerImageWidth, {
  //       toValue: styles.$largeContainerSize,
  //       duration: ANIMATION_DURATION,
  //     }),
  //     Animated.timing(imageWidth, {
  //       toValue: styles.$largeImageSize,
  //       duration: ANIMATION_DURATION,
  //     }),
  //   ]).start();
  // };

  // useEffect(() => {
  //   const name = Platform.OS === 'ios' ? 'Will' : 'Did';
  //   const keyboardShowListener = Keyboard.addListener(
  //     `keyboard${name}Show`,
  //     keyboardWillShow,
  //   );
  //   const keyboradHideListener = Keyboard.addListener(
  //     `keyboard${name}Hide`,
  //     keyboardWillHide,
  //   );

  //   return () => {
  //     keyboardShowListener.remove();
  //     keyboradHideListener.remove();
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const containerImageStyles = [
  //   styles.backgroundImage,
  //   { width: containerImageWidth, height: containerImageWidth },
  // ];
  // const imageStyles = [
  //   styles.image,
  //   { width: imageWidth },
  //   tintColor ? { tintColor } : null,
  // ];
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={require('./images/background.png')}
        style={styles.backgroundImage}>
        <Image
          style={tintColor ? { ...styles.image, tintColor } : styles.image}
          resizeMode="contain"
          source={require('./images/logo.png')}
        />
      </ImageBackground>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};

Logo.propTypes = {
  tintColor: PropTypes.any,
};

export default Logo;
