import { React } from "react";
import Page from "../common/Page";
import PuzzleGame from "./PuzzleGame";

/** Entry point for the puzzle game */
const PuzzlePage = () => (
  <Page>
    <PuzzleGame size={9} />
  </Page>
);

export default PuzzlePage;
