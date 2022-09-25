import actions from './items-actions';
import * as api from '../../shared/api/contacts';

export const fetchContacts = () => {
  const fetchFn = async dispatch => {
    try {
      dispatch(actions.fetchContactsLoading());
      const data = await api.getContacts();
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error.message));
    }
  };
  return fetchFn;
};
export const addContact = data => {
  const postFn = async (dispatch, getState) => {
    const contacts = getState();
    console.log(contacts);
    try {
      dispatch(actions.addContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.addContactSuccess(result));
    } catch (error) {
      dispatch(actions.addContactError(error.message));
    }
  };
  return postFn;
};

export const removeContact = id => {
  const deleteFn = async dispatch => {
    try {
      dispatch(actions.removeContactLoading());
      await api.removeContact(id);
      dispatch(actions.removeContactSuccess(id));
    } catch (error) {
      dispatch(actions.removeContactError(error.message));
    }
  };
  return deleteFn;
};
