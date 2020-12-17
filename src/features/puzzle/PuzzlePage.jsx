import { React, useState } from "react";
import Page from "../common/Page";
import PuzzleGame from "./PuzzleGame";
import PuzzleResult from "./PuzzleResult";
import PuzzleSelectAmount from "./PuzzleSelectAmount";

const defaultValue = 3;

/** Entry point for the puzzle game */
const PuzzlePage = () => {
  // size defined as the length of one side of the board
  const [size, setSize] = useState(defaultValue);
  const [movesCount, setMovesCount] = useState(80);
  const [hasStarted, setHasStarted] = useState(false);

  const handleOnReset = () => {
    setSize(defaultValue);
    setMovesCount(null);
    setHasStarted(false);
  };

  let Content;
  if (movesCount) {
    Content = (
      <PuzzleResult
        onReset={handleOnReset}
        size={size}
        movesCount={movesCount}
      />
    );
  } else if (hasStarted) {
    Content = <PuzzleGame size={size} onFinish={setMovesCount} />;
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
