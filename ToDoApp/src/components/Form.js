import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as theme from '../styles/theme';

const Form = ({ type, navigate }) => {
  const gotoHomeDirectory = () => {
    setTimeout(() => {
      navigate('NotesPreview');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Email"
        placeholderTextColor={theme.TEXT}
        selectionColor={theme.TEXT}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={theme.TEXT}
      />
      <TouchableOpacity style={styles.button} onPress={gotoHomeDirectory}>
        <Text style={styles.buttonText}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
};

Form.propTypes = {
  type: PropTypes.string,
  navigate: PropTypes.func,
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: theme.PRIMARY_LIGHT,
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: theme.TEXT,
    marginVertical: 10,
  },
  button: {
    width: 300,
    backgroundColor: theme.PRIMARY_DARK,
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});
