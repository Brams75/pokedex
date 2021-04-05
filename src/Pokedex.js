import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './Pokedex.scss';

const Pokedex = ({ pokedex }) => (
  <div className="Pokedex">
    {pokedex.map((pokemon) => (
      <Pokemon key={pokemon.name} pokemon={pokemon} />
    ))}
  </div>
);

Pokedex.propTypes = {
  pokedex: PropTypes.array.isRequired,
};

export default Pokedex;
