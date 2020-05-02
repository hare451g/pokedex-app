import React, { useContext } from 'react';
import { Box, Heading, Image, ResponsiveContext } from 'grommet';
import { Menu } from 'grommet-icons';

import PokeBallImage from '../../assets/images/poke-ball.png';
import TypeSelect from '../../containers/TypeSelect';

function AppBar() {
  const size = useContext(ResponsiveContext);

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
      <Box direction="row">{size === 'small' ? <Menu /> : <TypeSelect />}</Box>
    </Box>
  );
}

export default AppBar;
