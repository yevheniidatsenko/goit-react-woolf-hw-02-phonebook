import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <div>
    <ul className={styles.contactListUl}>
      {contacts.map(contact => (
        <li className={styles.contactListLi} key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <button
              className={styles.button}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  </div>
);

export default ContactList;
