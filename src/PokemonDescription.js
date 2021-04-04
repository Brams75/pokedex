import React, { useEffect, useState } from 'react';
import './PokemonDescription.scss';
import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const PokemonDescription = ({ name }) => {
  const [pokemon, setPokemon] = useState({});
  const getPokemon = async () => {
    try {
      const response = await axios.get(`${baseUrl}${name}`);
      setPokemon(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, []);
  if (Object.entries(pokemon).length === 0) {
    return <p>Hello</p>;
  }

  return (
    <div className="PokemonDescription">
      <div className="PokemonDescription__title">
        <span className="PokemonDescription__name">{pokemon.name}</span>
        <span className="PokemonDescription__number">No.{pokemon.id}</span>
      </div>
      <div className="PokemonDescription__image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
    </div>
  );
};

export default PokemonDescription;
