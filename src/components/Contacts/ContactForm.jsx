import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: inline-block;
  margin-left: 8px;
  width: 200px;
  height: 30px;
  border: 1px solid #296d98;
  border-radius: 4px;
  padding-left: 8px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #45b6fe;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  color: white;
  cursor: pointer;
`;

export const ContactForm = ({ name, number, onSubmit, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          placeholder="John Dough"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChange}
        />
      </Label>

      <Label>
        <span>Number</span>
        <Input
          type="tel"
          name="number"
          placeholder="123-45-67"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
