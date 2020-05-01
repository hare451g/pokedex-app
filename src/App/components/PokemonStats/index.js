import React from 'react';
import { Box, Meter } from 'grommet';

function PokemonStats({ base_stat: baseStat, effort, stat }) {
  return (
    <Box direction="column" justify="between" align="center">
      <Box direction="row" justify="between" align="center" fill>
        <div>{stat.name}</div>
        <div>{baseStat}</div>
      </Box>
      <Box background="#fefefe" fill>
        <Meter
          values={[
            {
              value: baseStat,
              onClick: () => {},
            },
          ]}
          aria-label="meter"
        />
      </Box>
    </Box>
  );
}

export default PokemonStats;
