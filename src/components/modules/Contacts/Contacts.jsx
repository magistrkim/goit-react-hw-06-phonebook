import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';
import css from './contacts.module.css';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const isDublicate = name => {
    const normilizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normilizedName;
    });
    return Boolean(result);
  };

  const addContact = ({ name, number }) => {
    if (isDublicate(name)) {
      return Notify.warning(`${name} is already in contact list!`);
    }
    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return [newContact, ...prevContacts];
    });
    return Notify.success(`${name} is added to contact list!`);
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
    return Notify.info(`The contact has been removed from the contact list!`);
  };

  const handleFilter = ({ target }) => setFilter(target.value);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normilizedFilter = filter.toLocaleLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normilizedFilter) ||
        number.includes(normilizedFilter)
      );
    });
    return result;
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <div className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.title}>Phonebook</h2>
          <ContactForm onSubmit={addContact} />
        </div>
        <div className={css.wrapper}>
          <h2 className={css.title}>Contacts</h2>
          <div className={css.block}>
            <ContactFilter handleChange={handleFilter} />
            <ContactList
              removeContact={removeContact}
              contacts={filteredContacts}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
