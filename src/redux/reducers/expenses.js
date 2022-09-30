import { GET_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  expenses: [[]],
};

function expenses(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_EXPENSES:
    return { ...state,
      expenses: action.expenses };
  default:
    return state;
  }
}

export default expenses;
