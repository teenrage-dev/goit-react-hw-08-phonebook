import css from './Phonebook.module.css';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { setFilter } from '../../redux/filter/filter-slice';
import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/items/items-operations';

export const Phonebook = () => {
  const items = useSelector(({ items }) => items);
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // submit and add to local storage
  const handleSubmit = newContact => {
    const { name, number } = newContact;

    const contact = items.data.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contact) {
      showMessage(`Contact ${name} already exists`);
      return;
    }
    const action = addContact(newContact);
    dispatch(action);
    const newContacts = [...items.data, { name, number, id: nanoid() }];
    return newContacts;
  };

  // change filter by name
  const handleChangeFilterByName = event => {
    const { value } = event.target;
    const action = setFilter(value);
    dispatch(action);
  };

  // get filtered contacts
  const getFIlteredContacts = () => {
    if (!filter) {
      return items.data;
    }
    return items.data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // delete contact
  const onDeleteContact = payload => {
    dispatch(removeContact(payload));
  };

  // show message(error)
  function showMessage(message) {
    Notify.warning(message);
  }

  const renderList = getFIlteredContacts();
  return (
    <div className={css.Wrapper}>
      <div className={css.phonebook_box}>
        <h2 className={css.Title}>Phonebook</h2>
        <ContactForm handleSubmit={handleSubmit} showMessage={showMessage} />
        <div className={css.phonebook__contacts}>
          <h2 className={css.Title}>Contacts</h2>
          <Filter
            filter={filter}
            handleChangeFilterByName={handleChangeFilterByName}
          />
          <ContactList
            renderList={renderList}
            onDeleteContact={onDeleteContact}
            itemsLoading={items.loading}
          />
        </div>
      </div>
    </div>
  );
};
