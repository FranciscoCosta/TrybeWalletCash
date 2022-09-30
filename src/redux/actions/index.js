export const GET_USER = 'GET_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const IS_LOADING = 'IS_LOADING';

const getUser = (email) => ({
  type: GET_USER,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const isLoading = () => ({
  type: IS_LOADING,
});

export default getUser;
