import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts, removeContacts } from 'redux/contacts/contacts-actions';
import { setFilter } from 'redux/filter/filter-actions';
import {
  getFilteredContacts,
  getAllContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filte-selectors';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import ContactForm from './ContactForm/ContactForm';
import css from './contacts.module.css';

const Contacts = () => {
  const allContacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normilizedName = name.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normilizedName;
    });
    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      return Notify.warning(`${name} is already in contact list!`);
    }
    dispatch(addContacts({ name, number }));
    // const action = addContacts({ name, number });
    // dispatch(action);
  };

  const handleRemoveContact = id => {
    dispatch(removeContacts(id));
    // const action = removeContacts(id);
    // dispatch(action);

    return Notify.info(`The contact has been removed from the contact list!`);
  };

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <>
      <div className={css.section}>
        <div className={css.wrapper}>
          <h2 className={css.title}>Phonebook</h2>
          <ContactForm onSubmit={handleAddContact} />
        </div>
        <div className={css.wrapper}>
          <h2 className={css.title}>Contacts</h2>
          <div className={css.block}>
            <ContactFilter value={filter} handleChange={handleFilter} />
            <ContactList
              removeContact={handleRemoveContact}
              contacts={filteredContacts}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
