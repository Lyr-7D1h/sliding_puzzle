/**
 * Check if the board is ordered/won returns true if won else false.
 * Null has to be at the end of the board
 * @param {number[]} board - An array of numbers with one null value
 */
export const hasWon = (board) => {
  // get board without null value
  const slicedBoard = board.slice(0, board.length - 1);

  let prevValue = -1;
  for (let i = 0; i < slicedBoard.length; i += 1) {
    const value = slicedBoard[i];

    if (value === null) return false;
    if (value > prevValue) {
      prevValue = value;
    } else {
      return false;
    }
  }
  return true;
};

/** Naive way for getting inversion count */
const getInversionCount = (array) => {
  let count = 0;
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] > array[j]) count += 1;
    }
  }
  return count;
};

/** Find the row from bottom to top where the empty postion is */
const findEmptyPosition = (board, size) => {
  const emptyIndex = board.indexOf(null);
  const row = Math.floor(emptyIndex / size);
  return size - row;
};

/** Check if the board is solvable returns boolean
 * https://en.wikipedia.org/wiki/15_puzzle#Solvability
 * @param {number[]} board - An array of numbers with one null value
 * @param {number} size - The size of the board
 */
export const isSolvable = (board, size) => {
  const filteredBoard = board.filter((v) => v !== null);
  if (size % 2 === 0) {
    // if size is even
    const inversionCount = getInversionCount(filteredBoard);
    const emptyPostion = findEmptyPosition(board, size);

    if (emptyPostion % 2 === 0) {
      // if emptyPostion is EVEN and inversionCount is ODD
      return inversionCount % 2 !== 0;
    }

    // if emptyPostion is ODD and inversionCount is EVEN
    return inversionCount % 2 === 0;
  }
  // if size is odd
  const inversionCount = getInversionCount(filteredBoard);
  // if inversion count is even it is solvable
  return inversionCount % 2 === 0;
};

/**
 * Create an array of `size` with non repeating random numbers and one empty slot
 * @param {number} itemsCount - The size of the board
 */
export const generateBoard = (size) => {
  if (size < 2) throw Error("Can't have board smaller than size 2");

  const itemsCount = size * size;
  const board = new Array(itemsCount);
  let count = 1;
  while (count <= itemsCount) {
    const randomIndex = Math.floor(Math.random() * itemsCount);
    // if there is no value at randomIndex set value to the next count
    if (!board[randomIndex]) {
      if (count === itemsCount) {
        board[randomIndex] = null;
      } else {
        board[randomIndex] = count;
      }
      count += 1;
    }
  }

  // Can't generate a winning board
  if (hasWon(board)) {
    return generateBoard(size);
  }

  // Can't generate a board that isn't solvable
  if (!isSolvable(board, size)) {
    return generateBoard(size);
  }

  return board;
};

/**
 * Move the empty slot to given value returns a new board
 * @param {number[]} board - An array of numbers with one null value
 * @param {*} value - The value you want to switch for the null value
 */
export const moveEmptySlot = (board, value) => {
  const emptyIndex = board.indexOf(null);
  const activeIndex = board.indexOf(value);

  if (emptyIndex === -1) throw Error("Could not find empty slot");
  if (activeIndex === -1) throw Error("Could not find slot for given value");

  const result = [].concat(board);
  result[emptyIndex] = result[activeIndex];
  result[activeIndex] = null;
  return result;
};

/**
 * Returns and array of adjacend indexes base on index of the null value
 * @param {number[]} board - An array of numbers with one null value
 */
export const getAdjacenedIndexes = (board) => {
  const emptyIndex = board.indexOf(null);
  const boardRoot = Math.sqrt(board.length);

  const result = [];

  // Top: can't be less than 0
  if (emptyIndex - boardRoot >= 0) result.push(emptyIndex - boardRoot);
  // Left: can't be on the next row
  // if emptyIndex starting from 1 - 1 is against left side (% boardRoot) ignore
  if (emptyIndex - 1 >= 0 && (emptyIndex + 1 - 1) % boardRoot !== 0)
    result.push(emptyIndex - 1);
  // Right: can't be on the next row
  // if emptyIndex starting from 1 against right side (% boardRoot) ignore
  if (emptyIndex + 1 < board.length && (emptyIndex + 1) % boardRoot !== 0)
    result.push(emptyIndex + 1);
  // Bottom: can't be bigger than board length
  if (emptyIndex + boardRoot < board.length)
    result.push(emptyIndex + boardRoot);
  return result;
};

// Calculated by taking the avarage upper bound of optimal solutions per size
// 3 => 31, 4 => 80, 5 => 205
// https://en.wikipedia.org/wiki/15_puzzle#Solvability
const magicGrowthNumber = (205 / 80 + 80 / 31) / 2;
// The optimal solution for a size of 1
const startCount = 31 / magicGrowthNumber / magicGrowthNumber;

/**
 * Calculate a score out of 1000 using the average optimal solution
 * @param {number} size - Size of the board
 * @param {number} movesCount - How many moves were made
 */
export const calculateScore = (size, movesCount) => {
  const upperBound = startCount * magicGrowthNumber ** (size - 1);

  let score = Math.round((upperBound / movesCount) * 1000);

  // Make sure maximum is 1000
  if (score > 1000) score = 1000;

  return score;
};
