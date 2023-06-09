import { createReducer } from '@reduxjs/toolkit';
import { addContacts, removeContacts } from './contacts-actions';

const contactsReducer = createReducer([], {
  [addContacts]: (state, { payload }) => [...state, payload]
  // {
  // state.push(payload) because of immer 
  // }
  ,
  [removeContacts]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
});

export default contactsReducer;
