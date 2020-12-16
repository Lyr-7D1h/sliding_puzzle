import { React } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

/**
 * Display the number value and handle onClick based on the values given
 * @param {number|null} value - The value displayed in the card can be null or number
 * @param {boolean} clickable - Is this card clickable or not. Has to be clickable in order for onClick to work
 * @param {function} onClick - onClick event with value given
 */
const PuzzleCard = ({ value, clickable, onClick }) => {
  const hasValue = value !== null;
  return (
    <Card
      style={{ borderRadius: "0px", border: "1px solid #888" }}
      onClick={() => onClick && clickable && onClick(value)}
    >
      <CardContent
        style={{
          height: "20vh",
          cursor: clickable ? "pointer" : "default",
          backgroundColor: hasValue ? "white" : "#888",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {hasValue && (
          <Typography
            style={{
              display: "inline-flex",
              alignItems: "center",
            }}
            variant="h3"
            align="center"
          >
            {value}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

PuzzleCard.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func,
  clickable: PropTypes.bool,
};
PuzzleCard.defaultProps = {
  value: null,
  onClick: null,
  clickable: false,
};

export default PuzzleCard;
