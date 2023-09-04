import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function NavBar(){
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Vidit Tayal
        </Typography>

        <Button
          href="https://github.com/Vidit-Tayal"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          GitHub
        </Button>
        {/* <Button
          href="https://github.com/Vidit-Tayal"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          LinkedIn
        </Button>
        <Button
          href="https://github.com/Vidit-Tayal"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Codeforces
        </Button>
        <Button
          href="https://github.com/Vidit-Tayal"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          LeetCode
        </Button>
        <Button
          href="https://github.com/Vidit-Tayal"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          CodeChef
        </Button>
        <Button
          href="https://github.com/Vidit-Tayal"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Youtube
        </Button> */}
      </Toolbar>
    </AppBar>
  );
};

