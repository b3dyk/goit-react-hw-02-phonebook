import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
  border-radius: 4px;
  border: 1px solid #296d98;
  height: 30px;
  margin-bottom: 16px;
  padding-left: 8px;
`;

export const Filter = ({ filter, onSearch }) => {
  return (
    <label>
      <Input
        type="text"
        name="search"
        placeholder="Search"
        value={filter}
        onChange={onSearch}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
