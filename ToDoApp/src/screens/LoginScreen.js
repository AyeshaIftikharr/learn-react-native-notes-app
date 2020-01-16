import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Form from '../components/Form';
import * as theme from '../styles/theme';

const LoginScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Welcome to My App</Text>
      </View>
      <Form type="Login" navigate={navigate} />
      <View style={styles.signupTextCont}>
        <Text style={styles.signupText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={() => navigate('Signup')}>
          <Text style={styles.signupButton}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

LoginScreen.propTypes = {
  navigation: PropTypes.object,
};

LoginScreen.navigationOptions = {
  header: null,
};

export default LoginScreen;

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
