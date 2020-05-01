import React from 'react';
import { Box } from 'grommet';

function PokemonStats({ base_stat: baseStat, effort, stat }) {
  return (
    <Box direction="column" justify="between" align="center" pad="small">
      <Box direction="row" justify="between" align="center" fill>
        <div>{stat.name}</div>
        <div>{baseStat}</div>
      </Box>
    </Box>
  );
}

export default PokemonStats;
