import React from "react";
import PropTypes from "prop-types";
// import { Grid } from "@material-ui/core";
import PuzzleCard from "./PuzzleCard";

/**
 * Display an empty board
 * @param {number} size - How big should the board be {size} x {size}
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
          height: `${cardSize - (12 - 1.3 * size)}vh`, // Some magic to get a decently sized board
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
