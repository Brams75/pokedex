import React from 'react';
import './Search.scss';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

const Search = ({ inputValue, setInputValue }) => {
  return (
    <div className="Search">
      <SearchIcon style={{ color: 'white' }} fontSize="large" />
      <Input
        className="Search__input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ backgroundColor: 'white' }}
      />
    </div>
  );
};

Search.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default Search;
