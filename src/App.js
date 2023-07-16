import "./App.css";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage";
import Blog from "./components/blog/Blog";
import PageNotFound from "./PageNotFound";
import ToDo from "./components/projects/ToDoProject/ToDo";
import { Dashboard, Title } from "@mui/icons-material";
import Orders from "./components/projects/BlogProject/Orders";
import Deposits from "./components/projects/BlogProject/Deposits";
import BasicTimeline from "./components/BasicTimeline";
import CustomizedSteppers from "./components/CustomizedSteppers";
import TicTacToe from "./components/projects/TicTacToeProject/TicTacToe";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={FrontPage}></Route>
        <Route exact path="/blog" Component={Dashboard}></Route>
        <Route exact path="/education" Component={CustomizedSteppers}></Route>
        <Route exact path="/projects-todo" Component={ToDo}></Route>
        <Route exact path="/projects-tictactoe" Component={TicTacToe}></Route>
        <Route path  = "*" Component={PageNotFound}></Route>
      </Routes>
    </div>
  );
}

export default App;
