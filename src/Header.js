import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Button from './Button';
import './Header.scss';

const Header = ({ inputValue, setInputValue }) => (
  <div className="Header">
    <Button />
    <Search inputValue={inputValue} setInputValue={setInputValue} />
  </div>
);

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default Header;
