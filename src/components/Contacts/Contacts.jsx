import { customAlphabet } from 'nanoid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 16px;
`;

const MainHeading = styled.h1`
  margin: 0;
  margin-bottom: 16px;
`;

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const nanoid = customAlphabet('1234567890id', 4);

export class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
    filter: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    contacts: this.props.contacts,
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState(prevState => {
      return prevState.contacts.find(({ name }) => name === prevState.name)
        ? alert(`${prevState.name} is already in contacts`)
        : {
            contacts: [
              ...prevState.contacts,
              { id: nanoid(), name: prevState.name, number: prevState.number },
            ],
          };
    });

    this.setState({ name: '', number: '' });
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { contacts, name, number } = this.state;
    const { filter, onSearch } = this.props;

    const visibleContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    return (
      <Wrapper>
        <MainHeading>Phonebook</MainHeading>
        <ContactForm
          name={name}
          number={number}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />

        <Heading>Contacts</Heading>

        <Filter filter={filter} onSearch={onSearch} />

        <ContactList contacts={visibleContacts} onDelete={this.handleDelete} />
      </Wrapper>
    );
  }
}
