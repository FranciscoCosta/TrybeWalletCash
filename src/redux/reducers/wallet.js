import { GET_CURRENCIES, IS_LOADING, GET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
  expenses: [],
};

function currency(state = INITIAL_STATE, action) {
  switch (action.type) {
  case IS_LOADING:
    return { ...state, loading: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies, loading: false };
  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  default:
    return state;
  }
}

export default currency;
