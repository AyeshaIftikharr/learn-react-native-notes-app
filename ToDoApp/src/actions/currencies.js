import * as actions from '../constants/currencies';

export const getInitialConversion = () => ({
  type: actions.GET_INITIAL_CONVERSION,
});

export const changeCurrencyAmount = amount => ({
  type: actions.CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

export const swapCurrency = () => ({
  type: actions.SWAP_CURRENCY,
});

export const changeBaseCurrency = currency => ({
  type: actions.CHANGE_BASE_CURRENCY,
  currency,
});

export const changeQuoteCurrency = currency => ({
  type: actions.CHANGE_QUOTE_CURRENCY,
  currency,
});
