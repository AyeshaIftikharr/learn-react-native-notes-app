import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
// styles
import color from 'color';
import styles from './styles';

const InputWithButton = ({
  buttonText,
  onPress,
  editable = true,
  textColor,
  ...props
}) => {
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    styles.$buttonBackgroundColorModifier,
  );
  const buttonTextStyles = [styles.buttonText];
  if (textColor) {
    buttonTextStyles.push({ color: textColor });
  }
  return (
    <View
      style={
        !editable
          ? { ...styles.container, ...styles.containerDisabled }
          : styles.container
      }>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}>
        <Text style={buttonTextStyles}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        underlineColorAndroid="transparent"
        style={styles.input}
        {...props}
      />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  editable: PropTypes.bool,
};

export default InputWithButton;
