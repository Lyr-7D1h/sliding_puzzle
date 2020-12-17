import { React } from "react";
import PropTypes from "prop-types";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import { calculateScore } from "./board";

/**
 * Calculate and show the result with feedback
 * @param {number} size - The size of the board
 * @param {number} movesCount - How many moves used
 * @param {function} onReset - Reset Game
 */
const PuzzleResult = ({ size, movesCount, onReset }) => {
  const score = calculateScore(size, movesCount);

  let feedback;
  if (score === 1000) {
    feedback = "Wow look at your magnificent brain :0";
  } else if (score > 800) {
    feedback = "Very nice";
  } else if (score > 600) {
    feedback = "Pretty good";
  } else if (score > 400) {
    feedback = "You can do better :\\";
  } else if (score > 200) {
    feedback = "Yikes :|";
  } else {
    feedback = "Is there even anything up in that head of yours?";
  }

  const color = score > 600 ? "green" : "red";
  return (
    <div style={{ textAlign: "center" }}>
      <CircularProgress
        variant="determinate"
        value={Math.round(score / 10)}
        size="10%"
        style={{ color, padding: "20px" }}
      />
      <Typography variant="h4">Your score: {score}/1000</Typography>
      <Typography variant="h5">{feedback}</Typography>
      {onReset && (
        <Button
          style={{ marginTop: "20px" }}
          variant="contained"
          size="large"
          color="primary"
          onClick={() => onReset()}
        >
          Reset
        </Button>
      )}
    </div>
  );
};

PuzzleResult.propTypes = {
  size: PropTypes.number.isRequired,
  movesCount: PropTypes.number.isRequired,
  onReset: PropTypes.func,
};

PuzzleResult.defaultProps = {
  onReset: null,
};

export default PuzzleResult;
