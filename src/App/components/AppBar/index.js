import React from 'react';
import { Box, Heading, Image } from 'grommet';
import { Menu } from 'grommet-icons';

import PokeBallImage from '../../assets/images/poke-ball.png';

function AppBar() {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      pad={{ left: 'medium', right: 'medium', vertical: 'medium' }}
      flex={false}
    >
      <Box direction="row">
        <Image
          src={PokeBallImage}
          a11yTitle="pokeball"
          height={32}
          margin={{ right: 'small' }}
        />
        <Heading
          margin="none"
          a11yTitle="PokéDex"
          responsive={true}
          size="small"
        >
          PokéDex
        </Heading>
      </Box>
      <Box direction="row">
        <Menu />
      </Box>
    </Box>
  );
}

export default AppBar;
