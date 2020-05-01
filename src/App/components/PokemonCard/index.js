import React from 'react';
import { Box, Image } from 'grommet';

import { Link } from './styled';

function PokemonCard({ id, name, sprite }) {
  return (
    <Link to={`/${id}/`}>
      <Box
        height="small"
        width="small"
        direction="column"
        border={{
          size: 'small',
          color: '#f3f3f3',
        }}
        round="medium"
        pad="small"
        margin="small"
        elevation="small"
      >
        <Image fit="contain" src={sprite} a11yTitle={name} />
        <span>
          {id} - {name}
        </span>
      </Box>
    </Link>
  );
}

export default PokemonCard;
