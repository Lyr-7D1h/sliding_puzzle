import { React } from "react";
import PropTypes from "prop-types";
import { calculateScore } from "./board";

const PuzzleResult = ({ board, movesCount }) => {
  //   const score = calculateScore(board, movesCount);

  return <>Feedback</>;
};

PuzzleResult.propTypes = {
  board: PropTypes.arrayOf(PropTypes.number).isRequired,
  movesCount: PropTypes.number.isRequired,
};

export default PuzzleResult;
