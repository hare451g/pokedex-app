import React from 'react';
import { Grommet, Box } from 'grommet';

import theme from './configs/theme';
import AppBar from './components/AppBar';
import PokemonDeck from './containers/PokemonDeck';

function App() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar />
        <PokemonDeck />
      </Box>
    </Grommet>
  );
}

export default App;
