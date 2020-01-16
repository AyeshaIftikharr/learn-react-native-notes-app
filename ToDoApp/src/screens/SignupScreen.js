import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Form from '../components/Form';
import * as theme from '../styles/theme';

const SignupScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Welcome to My App</Text>
      </View>
      <Form type="Signup" navigate={navigate} />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate('Login')}>
          <Text style={styles.signupButton}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

SignupScreen.propTypes = {
  navigation: PropTypes.object,
};

SignupScreen.navigationOptions = {
  header: null,
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.PRIMARY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: theme.TEXT,
    fontSize: 16,
  },
  signupButton: {
    color: theme.TEXT,
    fontSize: 16,
    fontWeight: '500',
  },
  logoContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: theme.TEXT,
  },
});
