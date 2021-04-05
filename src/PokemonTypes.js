import React from "react";
import "./PokemonTypes.scss";
import PropTypes from "prop-types";

const PokemonTypes = ({ pokemonTypes }) => (
  <div>
    <div className="Pokemon__types">
      {pokemonTypes.map((type) => (
        <span
          className={`Pokemon__type Pokemon__type--${type.type.name}`}
          key={type.type.name}
        >
          {type.type.name}
        </span>
      ))}
    </div>
  </div>
);

PokemonTypes.propTypes = {
  pokemonTypes: PropTypes.array.isRequired,
};

export default PokemonTypes;
