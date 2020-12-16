/**
 * Create an array of `size` with non repeating random numbers and one empty slot
 * @param {number} size The size of the board
 */
export const generateBoard = (size) => {
  const result = new Array(size);
  let count = 1;
  while (count <= size) {
    const randomIndex = Math.floor(Math.random() * size);
    // if there is no value at randomIndex set value to the next count
    if (!result[randomIndex]) {
      if (count === size) {
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
  const root = Math.sqrt(board.length);

  const result = [];
  if (emptyIndex - root >= 0) result.push(emptyIndex - root);
  if (emptyIndex - 1 >= 0) result.push(emptyIndex - 1);
  if (emptyIndex + 1 < board.length) result.push(emptyIndex + 1);
  if (emptyIndex + root < board.length) result.push(emptyIndex + root);
  return result;
};
