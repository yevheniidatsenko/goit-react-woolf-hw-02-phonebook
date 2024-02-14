import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import styles from './App.module.css';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Beyoncé', number: '342-12-44' },
    { id: 'id-2', name: 'Drake', number: '440-22-78' },
    { id: 'id-3', name: 'Taylor Swift', number: '897-11-20' },
    { id: 'id-4', name: 'Shawn Mendes', number: '284-91-51' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      { id: nanoid(), ...contact },
      ...prevContacts,
    ]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const removeContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      {contacts.length > 0 ? (
        <>
          <h2 className={styles.title}>Contacts</h2>
          <Filter value={filter} onChangeFilter={changeFilter} />
        </>
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
      {contacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={removeContact}
        />
      )}
    </div>
  );
};

export default App;
