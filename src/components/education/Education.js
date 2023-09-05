import React from "react";
import NavBar from "../NavBar";
import HeroUnit from "../projects/HeroUnit";
import ProjectFooter from "../projects/ProjectFooter";
import AllEducation from "./AllEducation";
import OldMemories from "./OldMemories";
import itemData from "./SchoolPics";

const Education = () => {
  const heading = "Education";
  const desc =
    "I value my education as a lifelong gift and continue to embrace learning as an essential part of my identity.";
  const data = itemData;
  return (
    <div>
      <NavBar></NavBar>
      <HeroUnit heading={heading} desc={desc}></HeroUnit>
      <AllEducation></AllEducation>
      <OldMemories heading = "" desc = "Golden Memories of the Past ✨" data = {data}></OldMemories>
      <ProjectFooter></ProjectFooter>
    </div>
  );
};

export default Education;
