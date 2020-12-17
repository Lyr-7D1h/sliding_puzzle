import { generateBoard, hasWon, isSolvable, moveEmptySlot } from "./board";

// How big the boards we test can be
const boardLimit = 60;

// Check if an array only has unique values
const isArrayUnique = (arr) =>
  Array.isArray(arr) && new Set(arr).size === arr.length;

test("has single null in board", () => {
  let i = 2;
  while (i < boardLimit) {
    const undefinedCount = generateBoard(i).filter((x) => x === null).length;
    expect(undefinedCount).toBe(1);
    i += 1;
  }
});

test("can't generate a winning board and should be solvable", () => {
  let i = 2;
  while (i < boardLimit) {
    const board = generateBoard(i);
    expect(hasWon(board)).toBe(false);
    expect(isSolvable(board, i)).toBe(true);
    i += 1;
  }
});

test("can check for a win", () => {
  expect(hasWon([0, 1, 2, 3, 4, 5, 6, 7, null])).toBe(true);
  expect(hasWon([1, 0, 2, 3, 4, 5, 6, 7, null])).toBe(false);
  expect(hasWon([null, 0, 1, 2, 3, 4, 5, 6, 7])).toBe(false);
  expect(hasWon([0, null, 1, 2, 3, 4, 5, 6, 7])).toBe(false);
  expect(hasWon([7, null, 1, 2, 3, 4, 5, 6])).toBe(false);
  expect(hasWon([null, 1, 2, 3])).toBe(false);
});

test("has all different numbers", () => {
  let i = 2;
  while (i < boardLimit) {
    const board = generateBoard(i);
    expect(isArrayUnique(board)).toBeTruthy();
    i += 1;
  }
});

test("moves empty slot", () => {
  let i = 2;
  while (i < boardLimit) {
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

test("is board solvable", () => {
  expect(isSolvable([1, 8, 2, null, 4, 3, 7, 6, 5], 3)).toBe(true);
  expect(
    isSolvable([13, 2, 10, 3, 1, 12, 8, 4, 5, null, 9, 6, 15, 14, 11, 7], 4)
  ).toBe(true);
  expect(
    isSolvable([6, 13, 7, 10, 8, 9, 11, null, 15, 2, 12, 5, 14, 3, 1, 4], 4)
  ).toBe(true);
  expect(
    isSolvable([3, 9, 1, 15, 14, 11, 4, 6, 13, null, 10, 12, 2, 7, 8, 5], 4)
  ).toBe(false);
});
