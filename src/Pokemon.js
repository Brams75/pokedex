import React, { useEffect, useState } from 'react';
import './Pokemon.scss';
import axios from 'axios';

const Pokemon = ({ pokemon }) => {
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState(0);

  const getPokemon = async () => {
    try {
      const response = await axios.get(`${pokemon.url}`);
      setPokemonImage(response.data.sprites.front_default);
      setPokemonTypes(response.data.types);
      setPokemonNumber(response.data.order);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
  });

  return (
    <div className="Pokemon">
      <img src={pokemonImage} alt={pokemon.name} className="Pokemon__image" />
      <span>No.{pokemonNumber}</span>
      <h5 className="Pokemon__name">{pokemon.name}</h5>
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
};

export default Pokemon;
