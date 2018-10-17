import React from 'react';

const Search = ({ children, value, onChange }) => (
  <form>
    <label>{children}</label>
    <input type="text" value={value} onChange={onChange} />
  </form>
);

export default Search;
