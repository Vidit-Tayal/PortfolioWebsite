import { Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <div>
      <NavLink className="NavLinkClass" to="/projects-todo">
        <Link  className="link" underline="none">
          ToDo
        </Link>
      </NavLink>
      <br></br>
      <NavLink className="NavLinkClass" to="/projects-tictactoe">
        <Link  className="link" underline="none">
          TicTacToe
        </Link>
      </NavLink>
    </div>
  );
};

export default ProjectsPage;
