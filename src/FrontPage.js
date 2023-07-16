import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./FrontPage.css";
import Footer from "./components/Footer";
import HeroUnit from "./HeroUnit";
import FrontPageCards from "./FrontPageCards";
// import Sketch from "./components/MusicLib/Sketch";
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function FrontPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        <HeroUnit></HeroUnit>
        <FrontPageCards></FrontPageCards>
      </main>
      {/* <Sketch></Sketch> */}
      <Footer></Footer>
    </ThemeProvider>
  );
}
