import { Component } from 'react';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSearch = evt => {
    const searchValue = evt.target.value.toLowerCase();
    this.setState({ filter: searchValue });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Contacts
          contacts={contacts}
          filter={filter}
          onSearch={this.handleSearch}
        />
      </div>
    );
  }
}
