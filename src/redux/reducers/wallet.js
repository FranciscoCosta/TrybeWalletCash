import { GET_CURRENCIES, IS_LOADING } from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
};

function currency(state = INITIAL_STATE, action) {
  switch (action.type) {
  case IS_LOADING:
    return { ...state, loading: true };
  case GET_CURRENCIES:
    console.log(action);
    return { ...state, currencies: action.currencies, loading: false };
  default:
    return state;
  }
}

export default currency;
