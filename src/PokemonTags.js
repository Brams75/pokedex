import React from 'react';
import PropTypes from 'prop-types';

const PokemonTags = ({ pokemonTypes }) => {
  return (
    <div className="Pokemon__tags">
      {pokemonTypes.map((type) => (
        <div
          className={`Pokemon__tags__tag Pokemon__tags__tag--${type.type.name}`}
          key={type.type.name}
          alt={type.type.name}
        ></div>
      ))}
    </div>
  );
};

PokemonTags.propTypes = {
  pokemonTypes: PropTypes.array.isRequired,
};

export default PokemonTags;
