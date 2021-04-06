import React, { useEffect, useState } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import Header from './Header';
import Pokedex from './Pokedex';
import Ask from './Ask';
import PokemonDescription from './PokemonDescription';
import './App.scss';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit';

const App = () => {
  const [pokedex, setPokedex] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [numberOfPokemons, setnumberOfPokemons] = useState(28);

  const getAllPokemons = async () => {
    try {
      const response = await axios.get(`${baseUrl}=591`);
      setPokedex(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const getPokemonsByName = async () => {
    const results = pokedex.filter(
      (pokemon) => pokemon.name.includes(inputValue) && inputValue.length > 0
    );
    setFilteredPokemons(results);
  };

  useEffect(() => {
    getAllPokemons();
    // eslint-disable-next-line
  }, [numberOfPokemons]);

  useEffect(() => {
    getPokemonsByName();
    // eslint-disable-next-line
  }, [inputValue]);

  if (pokedex.length < 1) {
    return <p>Veuillez patientez</p>;
  }

  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue} />

      <Router>
        {filteredPokemons.length === 0 ? (
          <Ask path="/" />
        ) : (
          <Pokedex
            pokedex={filteredPokemons}
            setnumberOfPokemons={setnumberOfPokemons}
            path="/"
          />
        )}
        <PokemonDescription path="/:name" />
      </Router>
    </div>
  );
};

export default App;
