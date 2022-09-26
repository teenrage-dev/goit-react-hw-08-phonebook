import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { FallingLines } from 'react-loader-spinner';

export const ContactList = ({ renderList, onDeleteContact, itemsLoading }) => {
  return (
    <>
      {itemsLoading ? (
        <div className={css.Loader}>
          <FallingLines
            color="#51a0b6"
            width="70"
            visible={true}
            ariaLabel="falling-lines-loading"
          />
        </div>
      ) : (
        <ul className={css.phonebook__list}>
          {renderList.map(({ name, number, id }) => (
            <li key={id} className={css.phonebook__item}>
              <p className={css.phonebook__item_text}>
                {name}: {number}
              </p>
              <button
                className={css.phonebook_btn}
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

ContactList.propTypes = {
  renderList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
