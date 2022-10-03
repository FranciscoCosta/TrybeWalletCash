export const GET_USER = 'GET_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const IS_LOADING = 'IS_LOADING';
export const GET_EXPENSES = 'GET_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

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

export const getExpenses = (expenses) => ({
  type: GET_EXPENSES,
  expenses,
});

export const removeExpenses = (expenses) => ({
  type: REMOVE_EXPENSES,
  expenses,
});

export default getUser;
