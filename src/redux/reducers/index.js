import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';
import expenses from './expenses';

const reducer = combineReducers({ user, wallet, expenses });

export default reducer;
