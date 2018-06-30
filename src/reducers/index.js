import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import banks from './banks';
import transactions from './transactions';
import user from './user';

const rootReducer = combineReducers({
  router: routerReducer,
  banks,
  transactions,
  user,
});

export default rootReducer;
