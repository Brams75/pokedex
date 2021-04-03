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
      const response = await axios.get(`${baseUrl}=104`);
      setPokedex(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, [inputValue]);

  if (pokedex.length < 1) {
    return <p>Veuillez patientez</p>;
  }

  return (
    <div className="App">
      <Header inputValue={inputValue} setInputValue={setInputValue} />
      <Pokedex pokedex={pokedex} />
    </div>
  );
};

export default App;
