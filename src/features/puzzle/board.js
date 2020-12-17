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

/**
 * Create an array of `size` with non repeating random numbers and one empty slot
 * @param {number} itemsCount The size of the board
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

// export const calculateScore = (board, movesCount) => {
//   return { board, movesCount };
// };
