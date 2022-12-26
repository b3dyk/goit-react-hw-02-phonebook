import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      <ContactItem contacts={contacts} onDelete={onDelete} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
