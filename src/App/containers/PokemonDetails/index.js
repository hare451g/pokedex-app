import React, { useEffect } from 'react';
import { Box, Heading, Tabs, Tab } from 'grommet';
import { LinkPrevious } from 'grommet-icons';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Link } from '@reach/router';

import PokemonSprites from '../../components/PokemonSprites';
import PokemonStats from '../../components/PokemonStats';
import PokemonAbility from '../../components/PokemonAbility';

function PokemonDetails({ id }) {
  const { isLoading, error, details } = useStoreState((state) => state.pokemon);
  const { fetchPokemonThunk } = useStoreActions((actions) => actions.pokemon);

  useEffect(() => {
    fetchPokemonThunk({ id });
  }, [fetchPokemonThunk]);

  if (isLoading) {
    return <Box>Loading contents</Box>;
  }

  if (error) {
    return (
      <Box>
        <h3>An Error occured</h3>
        <p>{error}</p>
      </Box>
    );
  }

  if (details) {
    const {
      abilities,
      base_experience: baseExperience,
      height,
      location_area_encounters: locationAreaEncounters,
      moves,
      name,
      sprites,
      stats,
      weight,
    } = details;

    return (
      <Box direction="column" justify="center" align="center" pad="small">
        <Box alignSelf="flex-start" fill>
          <Link to="/">
            <LinkPrevious />
          </Link>
        </Box>
        <Heading size="medium" a11yTitle={`pokemon name ${name}`}>
          {name}
        </Heading>
        <PokemonSprites
          name={name}
          backDefault={sprites.back_default}
          frontDefault={sprites.front_default}
          backFemale={sprites.back_female}
          frontFemale={sprites.front_female}
          backShiny={sprites.back_shiny}
          frontShiny={sprites.front_shiny}
          backShinyFemale={sprites.back_shiny_female}
          frontShinyFemale={sprites.front_shiny_female}
        />
        <Box fill>
          <Tabs>
            <Tab title="Forms">
              <Box border="small" pad="small" margin="medium" round>
                <PokemonStats baseStat={`${height / 10} meter`} name="Height" />
                <PokemonStats baseStat={`${weight / 10} kg`} name="Weight" />
                <PokemonStats
                  baseStat={`${baseExperience} XP`}
                  name="Base Experience"
                />
              </Box>
            </Tab>
            <Tab title="Stats">
              <Box border="small" pad="small" margin="medium" round>
                {stats.map((item) => (
                  <PokemonStats
                    baseStat={item.base_stat}
                    name={item.stat.name}
                  />
                ))}
              </Box>
            </Tab>
            <Tab title="Moves">
              <Box border="small" pad="small" margin="medium" round>
                {moves.map((item) => (
                  <PokemonAbility name={item.move.name} />
                ))}
              </Box>
            </Tab>
            <Tab title="Abilities">
              <Box border="small" pad="small" margin="medium" round>
                {abilities.map((item) => (
                  <PokemonAbility name={item.ability.name} />
                ))}
              </Box>
            </Tab>
          </Tabs>
        </Box>
      </Box>
    );
  } else {
    return <Box>No pokemon selected</Box>;
  }
}

export default PokemonDetails;
