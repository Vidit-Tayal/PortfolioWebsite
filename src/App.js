import "./App.css";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage";
import PageNotFound from "./PageNotFound";
import ToDo from "./components/projects/ToDoProject/ToDo";
import { Dashboard, Title } from "@mui/icons-material";
import CustomizedSteppers from "./components/CustomizedSteppers";
import TicTacToe from "./components/projects/TicTacToeProject/TicTacToe";
import ProjectsPage from "./components/projects/ProjectsPage";
import CodeforcesUnsolved from "./components/projects/CodeforcesProject/CodeforcesUnsolved";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={FrontPage}></Route>
        {/* <Route exact path="/blog" Component={Dashboard}></Route> */}
        <Route exact path="/education" Component={CustomizedSteppers}></Route>
        <Route exact path="/projects" Component={ProjectsPage}></Route>
        <Route exact path="/projects-todo" Component={ToDo}></Route>
        <Route exact path="/projects-tictactoe" Component={TicTacToe}></Route>
        <Route exact path="/projects-codeforces" Component={CodeforcesUnsolved}></Route>
        <Route path  = "*" Component={PageNotFound}></Route>
      </Routes>
    </div>
  );
}

export default App;
