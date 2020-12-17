import React from "react";
import PropTypes from "prop-types";
import PuzzleCard from "./PuzzleCard";
import { getAdjacenedIndexes } from "./board";

/**
 * Display the board
 * @param {number[]} board - Array of numbers with one empty
 * @param {function} onClick - Called when a card has been clicked
 */
const PuzzleBoard = ({ board, onClick }) => {
  const adjacendIndexes = getAdjacenedIndexes(board);
  const boardSize = Math.sqrt(board.length);
  // get root of the board for defining how big a card should be
  const cardSize = 100 / boardSize;

  const Cards = board.map((cardValue, i) => (
    <PuzzleCard
      // eslint-disable-next-line react/no-array-index-key
      key={i}
      style={{
        width: `${cardSize}%`,
        height: `${cardSize - (12 - 1.3 * boardSize)}vh`, // Some magic to get a decently sized board
        float: "left",
      }}
      onClick={onClick}
      clickable={adjacendIndexes.includes(i)}
      value={cardValue}
    />
  ));

  return <>{Cards}</>;
};

PuzzleBoard.propTypes = {
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func,
};

PuzzleBoard.defaultProps = {
  onClick: null,
};

export default PuzzleBoard;
