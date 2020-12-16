import React from "react";
import PropTypes from "prop-types";
// import { Grid } from "@material-ui/core";
import PuzzleCard from "./PuzzleCard";

/**
 * Display an empty board
 * @param {number} value - How big should the board be {value} x {value}
 */
const PuzzleEmptyBoard = ({ size }) => {
  const cardSize = 100 / size;

  const Cards = [];
  for (let i = 0; i < size * size; i += 1) {
    Cards.push(
      <PuzzleCard
        key={i}
        style={{
          width: `${cardSize}%`,
          height: `${cardSize - (12 - 1.3 * size)}vh`, // TODO: check for a better way to calculate
          float: "left",
        }}
        clickable={false}
        value={null}
      />
    );
  }

  return <>{Cards}</>;
};

PuzzleEmptyBoard.propTypes = {
  size: PropTypes.number.isRequired,
};

export default PuzzleEmptyBoard;
