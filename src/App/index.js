import React from 'react';
import { Grommet, Box } from 'grommet';
import { Router } from '@reach/router';

import theme from './configs/theme';
import AppBar from './components/AppBar';
import PokemonDeck from './containers/PokemonDeck';

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar />
        <Router>
          <PokemonDeck path="/" />
        </Router>
      </Box>
    </Grommet>
  );
}

export default App;
