import React from 'react';
import { Box, Heading, Image } from 'grommet';

import PokeBallImage from '../../assets/images/poke-ball.png';

function AppBar() {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="start"
      pad={{ left: 'medium', right: 'medium', vertical: 'medium' }}
    >
      <Image
        src={PokeBallImage}
        a11yTitle="pokeball"
        height={32}
        margin={{ right: 'small' }}
      />
      <Heading margin="none" a11yTitle="PokéDex" responsive={true} size="small">
        PokéDex
      </Heading>
    </Box>
  );
}

export default AppBar;
