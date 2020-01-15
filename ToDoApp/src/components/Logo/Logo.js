import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Keyboard,
  ImageBackground,
  Animated,
  Platform,
} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

const Logo = ({ tintColor }) => {
  const [containerImageWidth] = useState(
    new Animated.Value(styles.$largeContainerSize),
  );
  const [imageWidth] = useState(new Animated.Value(styles.$largeImageSize));

  const onShowKeyboard = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  const onHideKeyboard = () => {
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  useEffect(() => {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    const keyboardShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      onShowKeyboard,
    );
    const keyboradHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      onHideKeyboard,
    );

    return () => {
      keyboardShowListener.remove();
      keyboradHideListener.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backgroundImageStyles = [
    styles.containerImage,
    { width: containerImageWidth, height: containerImageWidth },
  ];
  const imageStyles = [
    styles.image,
    { width: imageWidth },
    tintColor ? { tintColor } : null,
  ];
  return (
    <View style={styles.container}>
      <Animated.View style={backgroundImageStyles}>
        <ImageBackground
          resizeMode="contain"
          source={require('./images/background.png')}
          style={styles.backgroundImage}>
          <Animated.Image
            style={imageStyles}
            resizeMode="contain"
            source={require('./images/logo.png')}
          />
        </ImageBackground>
      </Animated.View>
      <Text style={styles.text}>Currency Converter</Text>
    </View>
  );
};

Logo.propTypes = {
  tintColor: PropTypes.any,
};

export default Logo;
