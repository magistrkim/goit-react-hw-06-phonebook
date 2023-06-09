import { createAction } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

export const addContacts = createAction('contacts/add', data => {
  return {
    payload: {
      ...data,
      id: nanoid(),
    },
  };
});

export const removeContacts = createAction('contacts/remove');
