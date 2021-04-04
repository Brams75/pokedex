import React from 'react';
import './Button.scss';
import { Link } from '@reach/router';

const Button = () => {
  return (
    <div className="Button">
      <Link to="/" className="Button__link">
        Pokédex
      </Link>
    </div>
  );
};

export default Button;
