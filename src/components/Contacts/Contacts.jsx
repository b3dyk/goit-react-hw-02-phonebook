import { customAlphabet } from 'nanoid';
import React, { Component } from 'react';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

const nanoid = customAlphabet('1234567890id', 4);

export class Contacts extends Component {
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
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />

        <h2>Contacts</h2>

        <Filter filter={filter} onSearch={onSearch} />

        <ContactList contacts={visibleContacts} onDelete={this.handleDelete} />
      </div>
    );
  }
}
