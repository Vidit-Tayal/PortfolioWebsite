import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import TicTacToeGame from "./TicTacToeGame";
import './TicTacToe.css'

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const ToDo = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url("https://www.gamesver.com/wp-content/uploads/2022/02/tic-tac-toe-board-game-concept.jpg.webp")`,
            // backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
            backgroundPosition: "top",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <SportsEsportsIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {"Tic Tac Toe"}
            </Typography>

            <div
              style={{
                opacity: 0.45,
                fontWeight: 500,
                textTransform:"uppercase"
              }}
            >
              play against AN UNBEATABLE ENGINE
            </div>
            <Box
              // component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              <br></br>
              <div className="tictactoeGame">
              <TicTacToeGame></TicTacToeGame>
              </div>
              <Grid container sx={{mt:2}}>
                <Grid item xs>
                  <NavLink className="NavLinkClass" to="/projects">
                    <Link href="#" className="link" underline="none">
                      BACK TO PROJECTS
                    </Link>
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink className="NavLinkClass" to="/">
                    <Link className="link" underline="none">
                      {"BACK TO HOME"}
                    </Link>
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ToDo;
