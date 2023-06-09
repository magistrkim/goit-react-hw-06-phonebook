import { combineReducers } from 'redux';

import contactsReducer from './contacts/contacts-reducers';
import filterReducer from './filter/filter-reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
