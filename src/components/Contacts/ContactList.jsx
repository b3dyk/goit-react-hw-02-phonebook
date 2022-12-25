import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  min-width: 500px;
`;
const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Text = styled.p`
  margin: 0;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: #ff6242;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  color: white;
  margin-left: auto;
`;

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
