import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import Search from './Search';

const Header = ({ inputValue, setInputValue }) => {
  return (
    <div className="Header">
      <Search inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default Header;
