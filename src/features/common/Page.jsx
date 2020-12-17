import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

/** Wrapper around children given. Renders nav bar */
const Page = ({ children }) => (
  <>
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Typography variant="h6">Sliding Puzzle</Typography>
      </Toolbar>
    </AppBar>
    <Container style={{ paddingTop: "24px" }}>{children}</Container>
  </>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
