import React, { useEffect, useState } from 'react';
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
  return <div className="PokemonDescription">{pokemon.name}</div>;
};

export default PokemonDescription;
