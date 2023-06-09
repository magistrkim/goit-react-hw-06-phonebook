import { nanoid } from 'nanoid';
import { ADD_CONTACTS, REMOVE_CONTACTS } from './contacts-types';

export const addContacts = payload => {
  return {
    type: ADD_CONTACTS,
    payload: {
      id: nanoid(),
      ...payload,
    },
  };
};

export const removeContacts = payload => {
  return {
    type: REMOVE_CONTACTS,
    payload,
  };
};