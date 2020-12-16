import React, { useState } from "react";
import { Button, Grid, Slider, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import PuzzleEmptyBoard from "./PuzzleEmptyBoard";

const minimal = 3;
const maximal = 6;

const marks = [
  {
    value: minimal,
    label: minimal,
  },
  {
    value: maximal,
    label: maximal,
  },
];

/**
 * Handle user input for selecting the size of the board
 * @param {number} defaultValue - What should the default value be {defaultValue} x {defaultValue}
 * @param {function} onChange - Called on new value and return the power of the value (size of the board)
 * @param {function} onClick - Start the game
 */
const PuzzleSelectAmount = ({ defaultValue, onChange, onClick }) => {
  const [value, setValue] = useState(defaultValue);

  const handleOnChange = (_event, newValue) => {
    setValue(newValue);
    if (onChange) onChange(newValue * newValue);
  };

  return (
    <>
      <Slider
        valueLabelDisplay="auto"
        value={value}
        onChange={handleOnChange}
        marks={marks}
        min={minimal}
        max={maximal}
      />
      <Grid style={{ paddingBottom: "24px" }} container>
        <Grid xs={8} item>
          <Typography align="center" variant="h4">
            {" "}
            {value} x {value}
          </Typography>
        </Grid>
        <Grid xs={4} item>
          <Button
            style={{ width: "100%" }}
            color="primary"
            variant="contained"
            size="large"
            onClick={onClick}
          >
            Start
          </Button>
        </Grid>
      </Grid>
      <PuzzleEmptyBoard value={value} />
    </>
  );
};

PuzzleSelectAmount.propTypes = {
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};
PuzzleSelectAmount.defaultProps = {
  defaultValue: 3,
  onChange: null,
  onClick: null,
};

export default PuzzleSelectAmount;
