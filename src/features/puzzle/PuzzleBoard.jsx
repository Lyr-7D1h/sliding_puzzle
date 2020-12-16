import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import PuzzleCard from "./PuzzleCard";
import { getAdjacenedIndexes } from "./board";

/**
 * Display the board
 * @param {number[]} board - Array of numbers with one empty
 * @param {function} onClick - Called when a card has been clicked
 */
const PuzzleBoard = ({ board, onClick }) => {
  const adjacendIndexes = getAdjacenedIndexes(board);
  // get root of the board for defining how big a card should be
  const cardSize = Math.floor(12 / Math.sqrt(board.length));

  const Cards = board.map((cardValue, i) => (
    // TODO: fix array key
    // eslint-disable-next-line react/no-array-index-key
    <Grid item key={i} xs={cardSize}>
      <PuzzleCard
        onClick={onClick}
        clickable={adjacendIndexes.includes(i)}
        value={cardValue}
      />
    </Grid>
  ));

  return (
    <>
      <Grid container alignItems="center" justify="center">
        {Cards}
      </Grid>
    </>
  );
};

PuzzleBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func,
};

PuzzleBoard.defaultProps = {
  onClick: null,
};

export default PuzzleBoard;
