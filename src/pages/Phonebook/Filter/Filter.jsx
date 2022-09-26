import React from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ filter, handleChangeFilterByName }) => {
  return (
    <>
      <label
        htmlFor="filter"
        className={`${css.phonebook_name} ${css.phonebook_name__filter}`}
      >
        Find contacts by name
      </label>
      <input
        className={css.phonebook__input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChangeFilterByName}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilterByName: PropTypes.func.isRequired,
};
