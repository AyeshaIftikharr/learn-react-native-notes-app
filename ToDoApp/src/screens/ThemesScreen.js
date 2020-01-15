import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// components
import { ListItem, Separator } from '../components/List';
// actions
import { changePrimaryColor } from '../actions/theme';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
});

const ThemesScreen = ({ navigation, changeTheme }) => {
  const handlePressTheme = color => {
    changeTheme(color);
    navigation.goBack(null);
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Blue"
        onPress={() => handlePressTheme(styles.$blue)}
        selected
        checkmark={false}
        iconBackground={styles.$blue}
      />
      <Separator />
      <ListItem
        text="Orange"
        onPress={() => handlePressTheme(styles.$orange)}
        selected
        checkmark={false}
        iconBackground={styles.$orange}
      />
      <Separator />
      <ListItem
        text="Green"
        onPress={() => handlePressTheme(styles.$green)}
        selected
        checkmark={false}
        iconBackground={styles.$green}
      />
      <Separator />
      <ListItem
        text="Purple"
        onPress={() => handlePressTheme(styles.$purple)}
        selected
        checkmark={false}
        iconBackground={styles.$purple}
      />
      <Separator />
    </ScrollView>
  );
};

ThemesScreen.propTypes = {
  navigation: PropTypes.object,
  changeTheme: PropTypes.func,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  changeTheme: color => dispatch(changePrimaryColor(color)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemesScreen);
