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
  // (board, movesCount)
  const [result, setResult] = useState((null, null));
  const [hasStarted, setHasStarted] = useState(false);

  const handleOnFinish = (board, movesCount) => {
    setResult((board, movesCount));
  };

  let Content;
  if (result) {
    Content = <PuzzleResult board={result[0]} movesCount={result[1]} />;
  } else if (hasStarted) {
    Content = <PuzzleGame size={size} onFinish={handleOnFinish} />;
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
