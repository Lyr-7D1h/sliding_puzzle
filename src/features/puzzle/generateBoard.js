/**
 * Create an array of `size` with non repeating random numbers and one empty slot
 * @param {number} String size
 */
export default (size) => {
  const result = new Array(size);
  let count = 1;
  while (count < size) {
    const randomIndex = Math.floor(Math.random() * size);
    // if there is no value at randomIndex set value to the next count
    if (!result[randomIndex]) {
      result[randomIndex] = count;
      count += 1;
    }
  }
  return result;
};
