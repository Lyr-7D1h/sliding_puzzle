import { React, useState } from "react";
import PropTypes from "prop-types";
import generateBoard from "./generateBoard";

/** The main logical component for controlling the puzzle game
 * @param {number} size - The size of the playing field
 */
const PuzzleGame = ({ size }) => {
  const [board] = useState(generateBoard(size));
  console.log(board);

  // eslint-disable-next-line react/no-array-index-key
  const Cards = board.map((num, i) => <p key={i}>{num}</p>);

  return <>{Cards}</>;
};

PuzzleGame.propTypes = {
  size: PropTypes.number.isRequired,
};

export default PuzzleGame;
