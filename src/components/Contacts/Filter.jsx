import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onSearch }) => {
  return (
    <label>
      <input type="text" name="search" value={filter} onChange={onSearch} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
