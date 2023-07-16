import winningCombinations from "./winningCombinations";

function isTerminated(grid){

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (grid[a] !== "" && grid[a] === grid[b] && grid[b] === grid[c]) {
      return true; // Winning combination found
    }
  }

  if (grid.every((cell) => cell !== "")) {
    return true; // Draw condition, all cells are filled
  }

  return false; // No winning combination or draw
}

export default isTerminated;
