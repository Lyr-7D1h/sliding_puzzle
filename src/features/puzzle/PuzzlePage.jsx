import { React, useState } from "react";
import Page from "../common/Page";
import PuzzleDescription from "./PuzzleDescription";
import PuzzleGame from "./PuzzleGame";
import PuzzleResult from "./PuzzleResult";
import PuzzleSelectSize from "./PuzzleSelectSize";

const defaultSize = 3;

/** Entry point for the puzzle game */
const PuzzlePage = () => {
  // size defined as the length of one side of the board
  const [size, setSize] = useState(defaultSize);
  const [movesCount, setMovesCount] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasReadDescription, setHasReadDescription] = useState(false);

  const handleOnReset = () => {
    setSize(defaultSize);
    setMovesCount(null);
    setHasStarted(false);
  };

  let Content;
  if (movesCount !== null) {
    // If game finished
    Content = (
      <PuzzleResult
        onReset={handleOnReset}
        size={size}
        movesCount={movesCount}
      />
    );
  } else if (hasStarted) {
    // if game has started
    Content = <PuzzleGame size={size} onFinish={setMovesCount} />;
  } else if (!hasReadDescription) {
    // if description not read
    Content = <PuzzleDescription onClick={() => setHasReadDescription(true)} />;
  } else {
    // if nothing else select size
    Content = (
      <div style={{ paddingTop: "24px" }}>
        <PuzzleSelectSize
          defaultValue={defaultSize}
          onClick={() => setHasStarted(true)}
          onChange={(value) => setSize(value)}
        />
      </div>
    );
  }

  return <Page>{Content}</Page>;
};

export default PuzzlePage;
