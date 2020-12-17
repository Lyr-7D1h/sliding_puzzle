import { React, useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { generateBoard, hasWon, moveEmptySlot } from "./board";
import PuzzleBoard from "./PuzzleBoard";

/** The main logical component for controlling the puzzle game
 * @param {number} size - The size of the playing field
 * @param {function} onFinish - If won this function gets called with board and moveCount as arguments
 */
const PuzzleGame = ({ size, onFinish }) => {
  const [board, setBoard] = useState(generateBoard(size));
  const [moveCount, setMoveCount] = useState(0);

  const handleOnClick = (value) => {
    setBoard((newBoard) => moveEmptySlot(newBoard, value));
    setMoveCount((count) => count + 1);
    if (hasWon(board)) {
      if (onFinish) onFinish(board, moveCount);
    }
  };

  return (
    <>
      <Typography style={{ paddingBottom: "20px" }} variant="h4" align="center">
        Moves: {moveCount}
      </Typography>
      <PuzzleBoard onClick={handleOnClick} board={board} />
    </>
  );
};

PuzzleGame.propTypes = {
  size: PropTypes.number.isRequired,
  onFinish: PropTypes.func,
};
PuzzleGame.defaultProps = {
  onFinish: null,
};

export default PuzzleGame;
