import { GET_USER } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_USER:
    console.log(action.email.email, 'CASE');
    return { ...state, email: action.email.email };
  default:
    return state;
  }
}

export default user;
