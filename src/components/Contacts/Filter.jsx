import React from 'react';

export const Filter = ({ filter, onSearch }) => {
  return (
    <label>
      <input type="text" name="search" value={filter} onChange={onSearch} />
    </label>
  );
};
