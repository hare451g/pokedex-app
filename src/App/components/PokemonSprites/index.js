import React, { useState } from 'react';
import { Box, Image } from 'grommet';

function PokemonSprites({
  name,
  back_default: backDefault,
  front_default: frontDefault,
  back_female: backFemale,
  front_female: frontFemale,
  back_shiny: backShiny,
  front_shiny: frontShiny,
  back_shiny_female: backShinyFemale,
  front_shiny_female: frontShinyFemale,
}) {
  const [currentFrame, setCurrentFrame] = useState(frontDefault);

  const gallery = [
    backDefault,
    frontDefault,
    backFemale,
    frontFemale,
    backShiny,
    frontShiny,
    backShinyFemale,
    frontShinyFemale,
  ].filter((item) => item !== null);

  return (
    <Box direction="column" justify="center" align="center">
      <Box>
        <Image
          src={currentFrame}
          a11yTitle={`current selected pokemon is ${name}`}
        />
      </Box>
      <Box direction="row" justify="center" align="center" margin="small">
        {gallery.map((sprite) => (
          <Image
            src={sprite}
            fit="contain"
            onClick={() => setCurrentFrame(sprite)}
            a11yTitle={`sprites item of ${name}`}
          />
        ))}
      </Box>
    </Box>
  );
}
export default PokemonSprites;
