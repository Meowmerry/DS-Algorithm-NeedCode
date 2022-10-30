/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1

Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  let countIslands = 0;
  for (const rowIndex in grid) {
    for (const colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === "1") {
        countIslands++;
        teraform(parseInt(rowIndex), parseInt(colIndex), grid);
      }
    }
  }
  return countIslands;
};

const teraform = (row, col, grid) => {
  if (
    grid[row] === undefined ||
    grid[row][col] === undefined ||
    grid[row][col] === "0"
  )
    return;
  grid[row][col] = "0";
  teraform(row + 1, col, grid);
  teraform(row - 1, col, grid);
  teraform(row, col + 1, grid);
  teraform(row, col - 1, grid);
};
const grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]; // Output: 1
console.log(numIslands(grid));
