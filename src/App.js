import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Pokedex from './Pokedex';
import './App.scss';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit';

const App = () => {
  const [pokedex, setPokedex] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const getPokemons = async () => {
    try {
      const response = await axios.get(`${baseUrl}=25`);
      console.log(response.data.results);
      setPokedex(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [inputValue]);

  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <Pokedex pokedex={pokedex} />
    </div>
  );
};

export default App;
