import React from 'react';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
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




  deletePhone = phoneId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== phoneId),
      };
    });
  };

  addPhone = newItem => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...newItem, id: nanoid(), }]
      }
    })
     
   }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Container>
         <h1>Phonebook</h1>
        <ContactForm onAdd={this.addPhone} />
        <h2>Contacts</h2>
        <Filter filter={filter} onSearchPhone={this.updateFilter} />
        <ContactList items={filteredContacts} onDelete={this.deletePhone} onAdd={this.addPhone} />
        
      </Container>
    );
  }
}

export default App;
