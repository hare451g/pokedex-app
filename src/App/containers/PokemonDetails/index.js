import React, { useEffect } from 'react';
import { Box, Image, Heading } from 'grommet';
import { useStoreState, useStoreActions } from 'easy-peasy';

import PokemonSprites from '../../components/PokemonSprites';
import PokemonStats from '../../components/PokemonStats';

function PokemonDetails({ id }) {
  const { isLoading, error, selected, details } = useStoreState(
    (state) => state.pokemon
  );

  const { fetchPokemonThunk } = useStoreActions((actions) => actions.pokemon);

  useEffect(() => {
    fetchPokemonThunk({ id });
  }, [fetchPokemonThunk]);

  if (details) {
    const {
      abilities,
      base_experience: baseExperience,
      forms,
      game_indices: gameIndices,
      height,
      held_items: heldItems,
      is_default: isDefault,
      location_area_encounters: locationAreaEncounters,
      moves,
      name,
      order,
      species,
      sprites,
      stats,
      types,
      weight,
    } = details;
    return (
      <Box direction="column" justify="center" align="flex-start" pad="small">
        <PokemonSprites {...sprites} />
        <Heading size="medium">{name}</Heading>
        {stats.map((stat) => (
          <PokemonStats {...stat} />
        ))}
      </Box>
    );
  } else {
    return <Box>No pokemon selected</Box>;
  }
}

export default PokemonDetails;
