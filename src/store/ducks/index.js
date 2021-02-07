import {persistCombineReducers} from 'redux-persist';
import {persistConfig} from '../../repositories/persist-config';
import {navReducer} from '../../routes/index';
import search from '../../domain/Search/ducks';

export default persistCombineReducers(persistConfig, {
  nav: navReducer,
  search,
});
