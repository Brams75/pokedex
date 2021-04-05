import React, { useEffect, useState } from 'react';
import './PokemonDescription.scss';
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
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <div className="PokemonDescription__right">
          <div className="PokemonDescription__description">
            <ul className="PokemonDescription__case">
              <li className="PokemonDescription__list">
                height :
                <span className="PokemonDescription__list">
                  {pokemon.height / 10} m
                </span>
              </li>
              <li className="PokemonDescription__list">
                weight :
                <span className="PokemonDescription__list">
                  {pokemon.weight / 10} kg
                </span>
              </li>
              {pokemon.stats.map((stat) => (
                <li key={stat.stat.name} className="PokemonDescription__list">
                  {stat.stat.name} :
                  <span className="PokemonDescription__list">
                    {stat.base_stat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <span className="type">Type :</span>
          <PokemonTypes pokemonTypes={pokemon.types} />
        </div>
      </div>
    </div>
  );
};

export default PokemonDescription;
