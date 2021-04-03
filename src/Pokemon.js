import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import axios from 'axios';

import PokemonTypes from './PokemonTypes';
import './Pokemon.scss';

const Pokemon = ({ pokemon }) => {
  const [pokemonImage, setPokemonImage] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState(0);

  const getPokemon = async () => {
    try {
      const response = await axios.get(`${pokemon.url}`);
      setPokemonImage(response.data.sprites.front_default);
      setPokemonTypes(response.data.types);
      setPokemonNumber(response.data.id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemon();
    // eslint-disable-next-line
  }, []);

  return (
    <Link to={pokemon.name} className="Pokemon__link">
      <div className="Pokemon">
        <img src={pokemonImage} alt={pokemon.name} className="Pokemon__image" />
        <span className="Pokemon__number">No.{pokemonNumber}</span>
        <h5 className="Pokemon__name">{pokemon.name}</h5>
        <PokemonTypes pokemonTypes={pokemonTypes} />
      </div>
    </Link>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokemon;
