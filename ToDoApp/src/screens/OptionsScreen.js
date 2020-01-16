import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 20;

const OptionsScreen = ({ navigation, alertWithType }) => {
  const handlePressThemes = () => navigation.navigate('Themes');

  const handlePressSite = () => {
    Linking.openURL('http://handlebarlabs.com').catch(() =>
      alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now."),
    );
  };

  return (
    <ScrollView>
      <StatusBar translucent={false} barStyle="default" />
      <ListItem
        text="Themes"
        onPress={handlePressThemes}
        customIcon={
          <Icon
            // name={`${ICON_PREFIX}-right`}
            name="chevron-right"
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        }
      />
      <Separator />
      <ListItem
        text="Fixer.io"
        onPress={handlePressSite}
        customIcon={
          <Icon
            // name={`${ICON_PREFIX}-link`}
            name="link"
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        }
      />
      <Separator />
    </ScrollView>
  );
};

OptionsScreen.propTypes = {
  navigation: PropTypes.object,
  alertWithType: PropTypes.func,
};

export default connectAlert(OptionsScreen);
