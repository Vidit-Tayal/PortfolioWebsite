import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import imagesData from "./ToDoImages.json";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import "./ToDo.css";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const ToDo = () => {

  var audio = new Audio('./sfx/Deadbolt Lock.mp3');

  const [idx, setIdx] = useState(Math.floor(Math.random() * imagesData.length));

  var today = new Date();
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = months[today.getMonth()]; //January is 0!
  var yyyy = today.getFullYear();
  today = mm + " " + dd + ", " + yyyy;

  const [tasks, setTasks] = useState([]);
  const [inputTxt, setInputTxt] = useState("");
  const [txtFieldLabel, setTxtFieldLabel] = useState("Add Task");

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      AddTask(event.target.value);
    }
  }

  function handleChange(event) {
    const newTxt = event.target.value;
    if (newTxt.length <= 40) {
      console.log("newTxt: " + newTxt);
      setInputTxt(newTxt);
      if (newTxt.length > 0)
        setTxtFieldLabel(String(40 - newTxt.length) + " characters left");
      else setTxtFieldLabel("Add Task");
    }
  }

  function AddTask(taskname) {
    if (taskname.length > 0) {
      const updatedTasks = [...tasks, taskname];
      console.log("updatedTasks: " + updatedTasks);
      setTasks(updatedTasks);
      setInputTxt("");
      setTxtFieldLabel("Add Task");
      audio.play();
    }
  }

  function DeleteTask(id) {
    const updatedTasks = tasks.filter((elem, ind) => {
      return ind !== id;
    });

    setTasks(updatedTasks);
    audio.play();
  }

  function clearAll() {
    if(tasks.length>0) audio.play();
    setTasks([]);
    setInputTxt("");
    setTxtFieldLabel("Add Task");
  }

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
            backgroundImage: `url("${imagesData[idx].url}")`,
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
              <BookmarksIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {"To Do List"}
            </Typography>

            <div
              style={{
                opacity: 0.45,
                // textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {today + ""}
            </div>
            <Box
              // component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="addTaskInput"
                label={txtFieldLabel}
                name="addTaskInput"
                autoComplete="task"
                autoFocus
                value={inputTxt}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />

              {tasks.length > 0 ? (
                tasks.map((item, id) => (
                  <div>
                    <Button
                      className="taskbutton"
                      variant="contained"
                      key={id}
                      onClick={() => DeleteTask(id)}
                      // color="success"
                    >
                      {item}
                      <DeleteIcon className="deleteicon"></DeleteIcon>
                    </Button>
                    <br></br>
                    <br></br>
                  </div>
                ))
              ) : (
                <div>Start adding tasks for today!!</div>
              )}

              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="clearAllButton"
                onClick={clearAll}
              >
                CLEAR ALL
              </Button>
              <Grid container>
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
