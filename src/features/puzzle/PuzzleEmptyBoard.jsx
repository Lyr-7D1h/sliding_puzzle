import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import PuzzleCard from "./PuzzleCard";

/**
 * Display an empty board
 * @param {number} value - How big should the board be {value} x {value}
 */
const PuzzleEmptyBoard = ({ value }) => {
  const cardSize = Math.round(12 / value);
  console.log(cardSize);

  const Cards = [];
  for (let i = 0; i < value * value; i += 1) {
    Cards.push(
      <Grid item key={i} xs={cardSize}>
        <PuzzleCard clickable={false} value={null} />
      </Grid>
    );
  }
  // TODO: fix array key
  // eslint-disable-next-line react/no-array-index-key

  return (
    <>
      <Grid container alignItems="center" justify="center">
        {Cards}
      </Grid>
    </>
  );
};

PuzzleEmptyBoard.propTypes = {
  value: PropTypes.number.isRequired,
};

export default PuzzleEmptyBoard;
