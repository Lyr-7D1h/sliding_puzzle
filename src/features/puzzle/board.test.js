import { generateBoard, moveEmptySlot } from "./board";

// Check if an array only has unique values
const isArrayUnique = (arr) =>
  Array.isArray(arr) && new Set(arr).size === arr.length;

test("has single null in board", () => {
  let i = 1;
  while (i < 100) {
    const undefinedCount = generateBoard(i).filter((x) => x === null).length;
    expect(undefinedCount).toBe(1);
    i += 1;
  }
});

test("has all different numbers", () => {
  let i = 1;
  while (i < 100) {
    const board = generateBoard(i);
    expect(isArrayUnique(board)).toBeTruthy();
    i += 1;
  }
});

test("moves empty slot", () => {
  let i = 2;
  while (i < 100) {
    const randomValue = Math.ceil(Math.random() * (i - 1));
    const board = generateBoard(i);
    const nullIndex = board.indexOf(null);
    const randomIndex = board.indexOf(randomValue);

    const updatedBoard = moveEmptySlot(board, randomValue);
    expect(updatedBoard[randomIndex]).toBe(null);
    expect(updatedBoard[nullIndex]).toBe(randomValue);
    expect(board).not.toEqual(updatedBoard);
    i += 1;
  }
});
