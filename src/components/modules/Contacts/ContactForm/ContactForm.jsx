import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './contact-form.module.css';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, number } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.block}>
        <label className={css.label} htmlFor="">
          Name
        </label>
        <input
          onChange={handleChange}
          value={name}
          className={css.input}
          placeholder="Name and surname"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.block}>
        <label className={css.label} htmlFor="">
          Number
        </label>
        <input
          onChange={handleChange}
          value={number}
          className={css.input}
          placeholder="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes,
          parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
