import winningCombinations from "./winningCombinations";

function checkWinner(grid){

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (grid[a] !== "" && grid[a] === grid[b] && grid[b] === grid[c]) {
      return [grid[a],[a,b,c]]; // Winning combination found
    }
  }

  if (grid.every((cell) => cell !== "")) {
    return ["draw",[0]]; // Draw condition, all cells are filled
  }

  return ["no_result",[-1]]; // No winning combination or draw
}

export default checkWinner;
