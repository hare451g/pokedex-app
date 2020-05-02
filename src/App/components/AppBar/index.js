import React, { useContext, useState } from 'react';
import { Box, Heading, Image, ResponsiveContext, Collapsible } from 'grommet';
import { Down, Up } from 'grommet-icons';

import PokeBallImage from '../../assets/images/poke-ball.png';
import TypeSelect from '../../containers/TypeSelect';

function AppBar() {
  const size = useContext(ResponsiveContext);
  const [isMenuOpen, setmenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setmenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ left: 'medium', right: 'medium', vertical: 'medium' }}
        flex={false}
      >
        <Box direction="row">
          <Image
            src={PokeBallImage}
            a11yTitle="pokeball"
            height={32}
            margin={{ right: 'small' }}
          />
          <Heading
            margin="none"
            a11yTitle="PokéDex"
            responsive={true}
            size="small"
          >
            PokéDex
          </Heading>
        </Box>
        <Box direction="row" pad="small">
          {size === 'small' ? (
            <>
              <span>Filters</span>
              {isMenuOpen ? (
                <Up onClick={toggleMenuOpen} />
              ) : (
                <Down onClick={toggleMenuOpen} />
              )}
            </>
          ) : (
            <TypeSelect />
          )}
        </Box>
      </Box>
      {size === 'small' && (
        <Collapsible direction="vertical" open={isMenuOpen}>
          <Box pad="medium">
            <TypeSelect />
          </Box>
        </Collapsible>
      )}
    </>
  );
}

export default AppBar;
