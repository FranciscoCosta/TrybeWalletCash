import {
  GET_CURRENCIES,
  IS_LOADING,
  GET_EXPENSES,
  REMOVE_EXPENSES,
  EDDITING_EXPENSES,
  SAVE_EDIT,
} from '../actions/index';

const INITIAL_STATE = {
  loading: false,
  currencies: [],
  expenses: [],
  editing: false,
  idEdit: 0,
};

function currency(state = INITIAL_STATE, action) {
  switch (action.type) {
  case IS_LOADING:
    return { ...state, loading: true };
  case GET_CURRENCIES:
    return { ...state, currencies: action.currencies, loading: false };
  case GET_EXPENSES:
    return { ...state, expenses: [...state.expenses, action.expenses] };
  case REMOVE_EXPENSES:
    return { ...state, expenses: [...action.expenses] };
  case EDDITING_EXPENSES:
    return { ...state, editing: true, idEdit: action.id };
  case SAVE_EDIT:
    return {
      ...state,
      editing: false,
      expenses: state.expenses.map((expense) => {
        if (expense.id === state.idEdit) {
          return { ...action.newObject, id: state.idEdit };
        }
        return expense;
      }),
    };
  default:
    return state;
  }
}

export default currency;
