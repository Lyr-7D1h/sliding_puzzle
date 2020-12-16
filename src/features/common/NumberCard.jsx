import { React } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const NumberCard = ({ value }) => {
  const hasValue = value !== null;
  return (
    <Card>
      <CardContent style={{ backgroundColor: hasValue ? "white" : "#333" }}>
        {hasValue && (
          <Typography variant="h3" align="center">
            {value}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

NumberCard.propTypes = {
  value: PropTypes.number,
};
NumberCard.defaultProps = {
  value: null,
};

export default NumberCard;
