import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, StatusBar, View } from 'react-native';

import { ListItem, Separator } from '../components/List';
import CURRENCIES from '../data/currencies';

import * as actions from '../actions/currencies';

const CurrencyList = ({
  navigation,
  baseCurrency,
  quoteCurrency,
  primaryColor,
  changeBaseCurrency,
  changeQuoteCurrency,
}) => {
  const handlePress = currency => {
    const { type } = navigation.state.params;
    if (type === 'base') {
      changeBaseCurrency(currency);
    } else if (type === 'quote') {
      changeQuoteCurrency(currency);
    }

    navigation.goBack(null);
  };

  const comparisonCurrency =
    navigation.state.params.type === 'quote' ? quoteCurrency : baseCurrency;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} barStyle="light-content" />
      <FlatList
        data={CURRENCIES}
        renderItem={({ item }) => (
          <ListItem
            text={item}
            selected={item === comparisonCurrency}
            onPress={() => handlePress(item)}
            iconBackground={primaryColor}
          />
        )}
        keyExtractor={item => item}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

CurrencyList.propTypes = {
  navigation: PropTypes.object,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  primaryColor: PropTypes.string,
  changeQuoteCurrency: PropTypes.func,
  changeBaseCurrency: PropTypes.func,
};

const mapStateToProps = ({ currencies, theme }) => ({
  baseCurrency: currencies.baseCurrency,
  quoteCurrency: currencies.quoteCurrency,
  primaryColor: theme.primaryColor,
});

const mapDispatchToProps = dispatch => ({
  changeBaseCurrency: currency =>
    dispatch(actions.changeBaseCurrency(currency)),
  changeQuoteCurrency: currency =>
    dispatch(actions.changeQuoteCurrency(currency)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyList);
