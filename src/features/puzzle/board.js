/**
 * Create an array of `size` with non repeating random numbers and one empty slot
 * @param {number} itemsCount The size of the board
 */
export const generateBoard = (size) => {
  const itemsCount = size * size;
  const result = new Array(itemsCount);
  let count = 1;
  while (count <= itemsCount) {
    const randomIndex = Math.floor(Math.random() * itemsCount);
    // if there is no value at randomIndex set value to the next count
    if (!result[randomIndex]) {
      if (count === itemsCount) {
        result[randomIndex] = null;
      } else {
        result[randomIndex] = count;
      }
      count += 1;
    }
  }
  return result;
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
