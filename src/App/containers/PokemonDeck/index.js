import React, { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Box, InfiniteScroll } from 'grommet';

import PokemonCard from '../../components/PokemonCard';

function PokemonDeck() {
  const { isLoading, error, count, next, results } = useStoreState(
    (state) => state.pokemonList
  );

  const { fetchPokemonThunk } = useStoreActions(
    (actions) => actions.pokemonList
  );

  const onMore = () => {
    if (next) {
      fetchPokemonThunk({ nextUrl: next });
    }
  };

  useEffect(() => {
    fetchPokemonThunk({ limit: 10, offset: 0 });
  }, [fetchPokemonThunk]);

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
          <InfiniteScroll items={results} step={10} onMore={onMore}>
            {(pokemon) => <PokemonCard {...pokemon} key={pokemon.id} />}
          </InfiniteScroll>
        )
      )}
      {isLoading && <span>Loading contents . . .</span>}
    </Box>
  );
}

export default PokemonDeck;
