import React, { useState } from 'react';
import { Box, Image } from 'grommet';

function PokemonSprites({
  name,
  backDefault,
  frontDefault,
  backFemale,
  frontFemale,
  backShiny,
  frontShiny,
  backShinyFemale,
  frontShinyFemale,
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
            height={64}
          />
        ))}
      </Box>
    </Box>
  );
}
export default PokemonSprites;
