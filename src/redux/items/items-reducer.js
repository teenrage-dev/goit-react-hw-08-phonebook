import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './items-actions';

const dataReducer = createReducer([], {
  [actions.fetchContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (store, { payload }) => [...store, payload],
  [actions.removeContactSuccess]: (store, { payload }) =>
    store.filter(({ id }) => id !== payload),
});

const loadingReducer = createReducer(false, {
  [actions.fetchContactsLoading]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactLoading]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.removeContactLoading]: () => true,
  [actions.removeContactSuccess]: () => false,
  [actions.removeContactError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchContactsLoading]: () => null,
  [actions.fetchContactsError]: (_, { payload }) => payload,
  [actions.addContactLoading]: () => null,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.removeContactLoading]: () => null,
  [actions.removeContactError]: (_, { payload }) => payload,
});

const itemsReducer = combineReducers({
  data: dataReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default itemsReducer;
