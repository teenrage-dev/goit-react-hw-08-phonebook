import { createAction } from '@reduxjs/toolkit';

const fetchContactsLoading = createAction('items/fetch/loading');
const fetchContactsSuccess = createAction('items/fetch/success');
const fetchContactsError = createAction('items/fetch/error');

const addContactLoading = createAction('items/add/loading');
const addContactSuccess = createAction('items/add/success');
const addContactError = createAction('items/add/error');

const removeContactLoading = createAction('items/remove/loading');
const removeContactSuccess = createAction('items/remove/success');
const removeContactError = createAction('items/remove/error');

const actions = {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
  removeContactLoading,
  removeContactSuccess,
  removeContactError,
};

export default actions;
