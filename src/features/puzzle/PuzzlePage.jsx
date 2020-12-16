import { React, useState } from "react";
import Page from "../common/Page";
import PuzzleGame from "./PuzzleGame";
import PuzzleSelectAmount from "./PuzzleSelectAmount";

const defaultValue = 3;

/** Entry point for the puzzle game */
const PuzzlePage = () => {
  // size defined as the length of one side of the board
  const [size, setSize] = useState(defaultValue);
  const [hasStarted, setHasStarted] = useState(false);

  let Content;
  if (hasStarted) {
    console.log(size);
    Content = <PuzzleGame size={size} />;
  } else {
    Content = (
      <div style={{ paddingTop: "24px" }}>
        <PuzzleSelectAmount
          defaultValue={defaultValue}
          onClick={() => setHasStarted(true)}
          onChange={(value) => setSize(value)}
        />
      </div>
    );
  }

  return <Page>{Content}</Page>;
};

export default PuzzlePage;
