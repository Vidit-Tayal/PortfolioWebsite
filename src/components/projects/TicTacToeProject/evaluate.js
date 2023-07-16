import winningCombinations from "./winningCombinations";

function evaluate(grid) {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (grid[a] !== "" && grid[a] === grid[b] && grid[b] === grid[c]) {
      console.log("Returning: "+(grid[a]==="X") ? 10 : -10);
        return (grid[a]=="X") ? 10 : -10;
    }
  }
  return 0;
}

export default evaluate;
