import React from 'react';
import { Grommet } from 'grommet';
import { Router } from '@reach/router';

import theme from './configs/theme';

import AppBar from './components/AppBar';

import PokemonDeck from './containers/PokemonDeck';
import PokemonDetails from './containers/PokemonDetails';

function App() {
  return (
    <Grommet theme={theme} full>
      <AppBar />
      <Router>
        <PokemonDeck path="/" />
        <PokemonDetails path="/:id" />
      </Router>
    </Grommet>
  );
}

export default App;
