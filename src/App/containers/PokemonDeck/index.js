import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Box } from 'grommet';

import PokemonCard from '../../components/PokemonCard';

function PokemonDeck() {
  const { isLoading, error, count, next, results } = useStoreState(
    (state) => state.pokemon
  );
  const selectedType = useStoreState((state) => state.types.selected);

  const { fetchPokemonListThunk, fetchPokemonListByType } = useStoreActions(
    (actions) => actions.pokemon
  );

  const onMore = () => {
    if (next) {
      fetchPokemonListThunk({ nextUrl: next });
    }
  };

  useEffect(() => {
    fetchPokemonListThunk({ limit: 10, offset: 0 });
  }, []);

  return (
    <Box
      direction="row"
      overflow="auto"
      margin="small"
      justify="center"
      align="center"
      wrap
    >
      {error ? (
        <div>
          <h5>An error occurred</h5>
          <span>{error}</span>
        </div>
      ) : (
        results.length > 0 && (
          <Box direction="row" justify="center" wrap fill>
            {results.map((pokemon) => (
              <PokemonCard {...pokemon} key={pokemon.id} />
            ))}
          </Box>
        )
      )}
      {isLoading && <span>Loading contents . . .</span>}
    </Box>
  );
}

export default PokemonDeck;
