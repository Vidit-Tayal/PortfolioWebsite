import React from "react";
import NavBar from "../NavBar";
import HeroUnit from "../projects/HeroUnit";
import AllExperience from "./AllExperience";
import ProjectFooter from "../projects/ProjectFooter";
import OldMemories from "../education/OldMemories";
import aana from "./AanaProduct";
import { Button } from "@mui/material";

const Experience = () => {
  const heading = "Experience";
  const desc =
    "I truly value industrial internships as they provide invaluable experiences. I'm drawn to challenging environments, where I perform at my best.";
  const data = aana;

  return (
    <div>
      <NavBar></NavBar>
      <HeroUnit heading={heading} desc={desc}></HeroUnit>
      <AllExperience></AllExperience>
      <OldMemories heading="" desc='"Chat With Aana"' data={data}></OldMemories>
      <HeroUnit heading="" desc="Website Redevelopment"></HeroUnit>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          href="https://drive.google.com/file/d/19jEiePHB7SXFAQLEkZKBOrVW95VEp1mt/view?usp=drive_link"
        >
          Old Website
        </Button>
        <span style={{ whiteSpace: "pre" }}> ➡️ </span>
        <Button variant="outlined" href="https://lg.delhi.gov.in/">
          New Website
        </Button>
      </div>

      <ProjectFooter></ProjectFooter>
    </div>
  );
};

export default Experience;
