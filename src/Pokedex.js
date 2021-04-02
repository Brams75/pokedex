import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.scss';
import PropTypes from 'prop-types';

const Pokedex = ({ pokedex }) => {
  return (
    <div className="Pokedex">
      {pokedex.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

Pokedex.propTypes = {
  pokedex: PropTypes.array.isRequired,
};

export default Pokedex;
