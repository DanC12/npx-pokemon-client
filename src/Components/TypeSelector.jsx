import React, { useState, useEffect, useCallback } from "react";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material";
const TypeSelector = (props) => {
  const StyledSelect = styled(Select)`
    width: 10rem;
  `;

  const [availableTypes, setAvailableTypes] = useState([]);

  const getTypesHandler = useCallback(async () => {
    const response = await fetch(`http://localhost:3001/types`);
    setAvailableTypes(await response.json());
  }, []);

  useEffect(() => {
    getTypesHandler();
  }, [getTypesHandler]);

  const typeChangeHandler = (event) => {
    props.onTypeChange(event.target.value);
  };

  return (
    <FormControl>
      <InputLabel id="type-label">Type</InputLabel>
      <StyledSelect
        labelId="type-label"
        id="type-select"
        value={props.type}
        label="Type"
        onChange={typeChangeHandler}
      >
        {availableTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default TypeSelector;
