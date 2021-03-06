import React, { useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Box, InfiniteScroll } from 'grommet';

import PokemonCard from '../../components/PokemonCard';

function PokemonDeck() {
  const { isLoading, error, count, next, results } = useStoreState(
    (state) => state.pokemon
  );
  const selectedType = useStoreState((state) => state.types.selected);

  const {
    fetchPokemonListThunk,
    fetchPokemonListByType,
    setEmptyList,
  } = useStoreActions((actions) => actions.pokemon);

  const onMore = () => {
    if (selectedType === 'all types' && next) {
      fetchPokemonListThunk({ nextUrl: next });
    }
  };

  useEffect(() => {
    setEmptyList();
    if (selectedType && selectedType !== 'all types') {
      fetchPokemonListByType({ name: selectedType });
    } else {
      fetchPokemonListThunk({ limit: 10, offset: 0 });
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (selectedType && selectedType !== 'all types') {
        fetchPokemonListByType({ name: selectedType });
      } else {
        setEmptyList();
        fetchPokemonListThunk({ limit: 10, offset: 0 });
      }
    }
  }, [selectedType]);

  return (
    <Box
      fill
      overflow="auto"
      direction="row"
      align="center"
      justify="center"
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
