import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import NavBar from "../NavBar";
import HeroUnit from "./HeroUnit";
import AllProjects from "./AllProjects";
import ProjectFooter from "./ProjectFooter";

export default function Pricing() {
  const heading = "Projects";
  const desc = "From competitive programming challenges to immersive web development projects, each endeavor fuels my curiosity and shapes my transformative journey in technology.";
  
    return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <NavBar></NavBar>
      <HeroUnit heading = {heading} desc = {desc}></HeroUnit>
      <AllProjects></AllProjects>
      <ProjectFooter></ProjectFooter>
    </>
  );
}
