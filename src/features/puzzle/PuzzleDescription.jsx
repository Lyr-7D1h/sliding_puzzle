import { Button, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { React } from "react";

const PuzzleDescription = ({ onClick }) => (
  <div style={{ textAlign: "center" }}>
    <Typography variant="h4">Sliding Puzzle</Typography>
    <Typography style={{ marginTop: "20px" }} variant="h6">
      A sliding game. <br />
      You can modify the puzzle size at the next step.
      <br />
      The goal is to have the cards in order from smallest to largest and have
      the empty card at the end. <br />
      When you have finished you get a score base on what the optimal amount of
      moves would have been. <br />
      You get the option to retry. <br /> Enjoy!
    </Typography>
    {onClick && (
      <Button
        style={{ marginTop: "20px" }}
        size="large"
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Select Size
      </Button>
    )}
  </div>
);

PuzzleDescription.propTypes = {
  onClick: PropTypes.func,
};
PuzzleDescription.defaultProps = {
  onClick: null,
};

export default PuzzleDescription;
