import React, { useEffect, useState } from 'react';
import './PokemonDescription.scss';
import './PokemonTypes';
import axios from 'axios';
import PokemonTypes from './PokemonTypes';

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
      <p>height : {pokemon.height} inch</p>
      <p>weight : {pokemon.weight} once</p>
      <div>
        Stats
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name} : {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <PokemonTypes pokemonTypes={pokemon.types} />
    </div>
  );
};

export default PokemonDescription;
