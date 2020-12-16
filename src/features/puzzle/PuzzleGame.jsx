import { React, useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { generateBoard, moveEmptySlot } from "./board";
import PuzzleBoard from "./PuzzleBoard";

/** The main logical component for controlling the puzzle game
 * @param {number} size - The size of the playing field
 */
const PuzzleGame = ({ size }) => {
  const [board, setBoard] = useState(generateBoard(size));
  const [moveCount, setMoveCount] = useState(0);
  // TODO: might validate size

  const handleOnClick = (value) => {
    setBoard((newBoard) => moveEmptySlot(newBoard, value));
    setMoveCount((count) => count + 1);
  };

  return (
    <>
      <Typography style={{ paddingBottom: "20px" }} variant="h3" align="center">
        Moves: {moveCount}
      </Typography>
      <PuzzleBoard onClick={handleOnClick} board={board} />
    </>
  );
};

PuzzleGame.propTypes = {
  size: PropTypes.number.isRequired,
};

export default PuzzleGame;
