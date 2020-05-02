import React, { useEffect } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Box, Select } from 'grommet';

function TypeSelect() {
  const { isLoading, error, results, selected } = useStoreState(
    (state) => state.types
  );

  const { fetchTypeList, setSelected } = useStoreActions(
    (actions) => actions.types
  );

  useEffect(() => {
    fetchTypeList();
  }, [fetchTypeList]);

  if (isLoading) {
    return <Box> Loading pokemon types . . . </Box>;
  }

  if (error) {
    return (
      <Box>
        <h2>An error Occurred </h2>
        <p>{error}</p>
      </Box>
    );
  }

  const options = results.map((item) => item.name);

  return (
    <Select
      options={options}
      value={selected}
      onChange={({ option }) => setSelected({ selected: option })}
      multiple={false}
    />
  );
}

export default TypeSelect;
