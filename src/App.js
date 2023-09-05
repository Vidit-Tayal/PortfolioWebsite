import "./App.css";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage";
import PageNotFound from "./PageNotFound";
import ToDo from "./components/projects/ToDoProject/ToDo";
import { Dashboard, Title } from "@mui/icons-material";
import TicTacToe from "./components/projects/TicTacToeProject/TicTacToe";
import ProjectsPage from "./components/projects/ProjectsPage";
import CodeforcesUnsolved from "./components/projects/CodeforcesProject/CodeforcesUnsolved";
import Skills from "./components/technical skills/Skills";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={FrontPage}></Route>
        <Route exact path="/projects" Component={ProjectsPage}></Route>
        <Route exact path="/skills" Component={Skills}></Route>
        <Route exact path="/education" Component={Education}></Route>
        <Route exact path="/experience" Component={Experience}></Route>
        <Route exact path="/projects-todo" Component={ToDo}></Route>
        <Route exact path="/projects-tictactoe" Component={TicTacToe}></Route>
        <Route exact path="/projects-codeforces" Component={CodeforcesUnsolved}></Route>
        <Route path  = "*" Component={PageNotFound}></Route>
      </Routes>
    </div>
  );
}

export default App;
