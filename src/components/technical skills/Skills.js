import React from "react";
import NavBar from "../NavBar";
import HeroUnit from "../projects/HeroUnit";
import ProjectFooter from "../projects/ProjectFooter";
import AllSkills from "./AllSkills";

const Skills = () => {
  const heading = "Technical Skills";
  const desc =
    "I've acquired skills across different domains, valuing the journey of growth and exploration above all else.";

  return (
    <div>
      <NavBar></NavBar>
      <HeroUnit heading={heading} desc={desc}></HeroUnit>
      <AllSkills></AllSkills>
      <ProjectFooter></ProjectFooter>
    </div>
  );
};

export default Skills;
