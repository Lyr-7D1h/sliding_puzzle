import { React, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography } from "@material-ui/core";
import { generateBoard, getAdjacenedIndexes, moveEmptySlot } from "./board";
import PuzzleCard from "./PuzzleCard";

/** The main logical component for controlling the puzzle game
 * @param {number} size - The size of the playing field
 */
const PuzzleGame = ({ size }) => {
  const [board, setBoard] = useState(generateBoard(size));
  const [moveCount, setMoveCount] = useState(0);
  const adjacendIndexes = getAdjacenedIndexes(board);
  // TODO: might validate size
  const cardSize = Math.floor(12 / Math.sqrt(size));

  const handleOnClick = (value) => {
    setBoard((newBoard) => moveEmptySlot(newBoard, value));
    setMoveCount((count) => count + 1);
  };

  const Cards = board.map((cardValue, i) => (
    // TODO: fix array key
    // eslint-disable-next-line react/no-array-index-key
    <Grid item key={i} xs={cardSize}>
      <PuzzleCard
        onClick={handleOnClick}
        clickable={adjacendIndexes.includes(i)}
        value={cardValue}
      >
        {cardValue}
      </PuzzleCard>
    </Grid>
  ));

  return (
    <>
      <Typography style={{ paddingBottom: "20px" }} variant="h3" align="center">
        Moves: {moveCount}
      </Typography>
      <Grid container alignItems="center" justify="center">
        {Cards}
      </Grid>
    </>
  );
};

PuzzleGame.propTypes = {
  size: PropTypes.number.isRequired,
};

export default PuzzleGame;
