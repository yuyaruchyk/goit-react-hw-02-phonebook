import React from 'react';
import { Component } from 'react';
import {ContactForm} from './ContactForm/ContactForm'

import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';

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

  updateFilter = newTopic => {
    this.setState(() => {
      return {
        filter: newTopic,
      };
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number;

      return (
        contactName.includes(filter.toLowerCase()) ||
        contactNumber.includes(filter)
      );
    });
  };
 
  addPhone = newItem => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === newItem.name)) {
      alert(`${newItem.name} already in phonebook`);
      return;
    }

    const item = {
      ...newItem,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, item],
      };
    });

    alert('Super', `${newItem.name} added to your contacts`, 'OK', {
     
    });
  };

  deletePhone = phoneId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== phoneId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm filter={filter} />
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && <ContactList items={filteredContacts} onDelete={this.deletePhone} />}
      </Container>
    );
  }

}



export default App;