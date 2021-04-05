import React from "react";
import PropTypes from "prop-types";
import "./Search.scss";
import pokeball from "./images/pokeball.svg";

const Search = ({ inputValue, setInputValue }) => (
  <div className="Search">
    <img className="Search__pokeball" src={pokeball} alt="pokeball" />
    <input
      className="Search__input"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
  </div>
);

Search.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default Search;
