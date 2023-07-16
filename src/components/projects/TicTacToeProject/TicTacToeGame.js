import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import isTerminated from "./isTerminated";
import checkWinner from "./checkWinner";
import nonWinningSquare from "./nonWinningSquare";
import Div from "./Div";
import findBestMove from "./findBestMove";

const TicTacToeGame = () => {
  var audio = new Audio("./sfx/Tap1.wav");
  var audio2 = new Audio("./sfx/Finish.wav");
  const [grid, setGrid] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("X");
  const [winningSquares, setWinningSquares] = useState([]);
  const [heading, setHeading] = useState("Make your move, Player X");
  const [vsBOT, setVsBOT] = useState(false);

  function resetBoard() {
    setGrid(Array(9).fill(""));
    setPlayer("X");
    setWinningSquares([]);
    setHeading("Make your move, Player X");
  }

  function toggleMode() {
    resetBoard();
    setVsBOT(!vsBOT);
  }

  function updateNoResult(h) {
    audio.play();
    if (!vsBOT) {
      var new_player = player === "X" ? "O" : "X";
      setPlayer(new_player);
      setHeading(h.substring(0, h.length - 1) + new_player);
    }
  }

  function updateWin(arr, w) {
    audio2.play();
    setWinningSquares(arr);

    if (vsBOT) {
      if (w === "X") setHeading("YOU WON" + " !! CONGRATULATIONS !!");
      else setHeading("BETTER LUCK NEXT TIME" + " !!");
    } else setHeading("AND THE WINNER IS: PLAYER " + w + " !!");
  }

  function updateDraw() {
    audio.play();
    setHeading("IT'S A DRAW !!");
  }

  function updateResults(updatedGrid, player) {
    const [w, arr] = checkWinner(updatedGrid);
    const h = heading;

    if (w === "no_result") updateNoResult(h);
    else if (w !== "draw") updateWin(arr, w);
    else updateDraw();
  }

  function updateGrid(index, player, grid) {
    const updatedGrid = [...grid];
    updatedGrid[index] = player;
    setGrid(updatedGrid);

    return updatedGrid;
  }

  function handleClick(index) {
    if (grid[index] === "" && !isTerminated(grid)) {
      const updatedGrid = updateGrid(index, player, grid);

      updateResults(updatedGrid, player);

      if (!isTerminated(updatedGrid) && vsBOT) {
        var idx = findBestMove(updatedGrid);
        const gridAfterComp = updateGrid(idx, "O", updatedGrid);
        updateResults(gridAfterComp, "O");
      }
    }
  }

  function renderGrid() {
    return grid.map((cell, index) => (
      <Grid item xs={4} key={index}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{
            height: "100px",
            width: "100%",
            fontSize: "40px",
            fontStyle: "italic",
            backgroundColor:
              nonWinningSquare(grid, index, winningSquares) && "#d7abde",
          }}
          disableElevation={nonWinningSquare(grid, index, winningSquares)}
          disabled={nonWinningSquare(grid, index, winningSquares)}
          onClick={() => handleClick(index, winningSquares)}
        >
          {cell}
        </Button>
      </Grid>
    ));
  }

  return (
    <div style={{ width: "65%" }}>
      <Div style={{ fontStyle: "italic" }} color="primary">
        {heading}
      </Div>
      <Grid container spacing={2} justify="center">
        {renderGrid()}
      </Grid>

      <br></br>
      <Grid container>
        <Grid item xs>
          <FormControlLabel
            control={<Switch color="secondary" onClick={() => toggleMode()} />}
            label="vs BOT"
          />
        </Grid>
        <Grid item>
          <Button
            variant="text"
            color="secondary"
            startIcon={<RestartAltIcon />}
            onClick={() => resetBoard()}
          >
            CLEAR
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TicTacToeGame;
