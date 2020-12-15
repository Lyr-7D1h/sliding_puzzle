import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";

const Page = ({ children }) => <Container>{children}</Container>;

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
