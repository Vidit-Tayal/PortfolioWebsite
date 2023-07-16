import checkWinner from "./checkWinner";

function nonWinningSquare(grid, index, winningSquares) {
  if(checkWinner(grid,"X")[0]==="draw") return true;
  if (winningSquares.length === 0) return false;
  if (winningSquares.includes(index)) return false;
  return true;
}

export default nonWinningSquare;
