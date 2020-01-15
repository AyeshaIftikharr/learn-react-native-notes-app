import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
// components
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';

import * as actions from '../actions/currencies';

const HomeScreen = ({
  navigation: { navigate },
  isFetching,
  amount,
  conversionRate,
  baseCurrency,
  quoteCurrency,
  lastConvertedDate,
  primaryColor,
  alertWithType,
  currencyError,
  getInitialConversion,
  changeCurrencyAmount,
  swapCurrency,
}) => {
  useEffect(() => {
    getInitialConversion();
  }, [getInitialConversion]);

  useEffect(() => {
    if (currencyError) {
      alertWithType('error', 'Error', currencyError);
    }
  }, [alertWithType, currencyError]);

  // TODO: local state should be handled by component and not redux
  const handleChangeText = text => {
    changeCurrencyAmount(text);
  };
  const handlePressBaseCurrency = () => {
    navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };
  const handlePressQuoteCurrency = () => {
    navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
  };
  const handleSwapCurrencies = () => swapCurrency();
  const handleOptionsPress = () => navigate('Options');

  return (
    <Container backgroundColor={primaryColor}>
      <StatusBar translucent={false} barStyle="light-content" />
      <Header onPress={handleOptionsPress} />
      <KeyboardAvoidingView behavior="padding">
        <Logo tintColor={primaryColor} />
        <InputWithButton
          buttonText={baseCurrency}
          onPress={handlePressBaseCurrency}
          value={amount.toString()}
          keyboardType="numeric"
          onChangeText={handleChangeText}
          textColor={primaryColor}
        />
        <InputWithButton
          buttonText={quoteCurrency}
          onPress={handlePressQuoteCurrency}
          editable={false}
          value={isFetching ? '...' : (amount * conversionRate).toFixed(2)}
          textColor={primaryColor}
        />
        <LastConverted
          date={lastConvertedDate}
          base={baseCurrency}
          quote={quoteCurrency}
          conversionRate={conversionRate}
        />
        <ClearButton text="Reverse Currencies" onPress={handleSwapCurrencies} />
      </KeyboardAvoidingView>
    </Container>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  amount: PropTypes.number,
  conversionRate: PropTypes.number,
  lastConvertedDate: PropTypes.object,
  isFetching: PropTypes.bool,
  primaryColor: PropTypes.string,
  currencyError: PropTypes.string,
  alertWithType: PropTypes.func,
  getInitialConversion: PropTypes.func,
  changeCurrencyAmount: PropTypes.func,
  swapCurrency: PropTypes.func,
};

const mapStateToProps = ({ currencies, theme }) => {
  const { baseCurrency, quoteCurrency } = currencies;
  const conversionSelector = currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: theme.primaryColor,
    currencyError: currencies.error,
  };
};

const mapDispatchToProps = dispatch => ({
  getInitialConversion: () => dispatch(actions.getInitialConversion()),
  swapCurrency: () => dispatch(actions.swapCurrency()),
  changeCurrencyAmount: text => dispatch(actions.changeCurrencyAmount(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(connectAlert(HomeScreen));
