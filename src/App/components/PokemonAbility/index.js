import React from 'react';
import { Box } from 'grommet';

function PokemonAbility({ name }) {
  return (
    <Box pad="small">
      <span>{name}</span>
    </Box>
  );
}

export default PokemonAbility;
