import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import "./AddressForm.css";
import { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import MakeTable from "./MakeTable";

const steps = ["SELECT A PROBLEM", "WRITE SOME CODE", "REPEAT"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(10);
  const [cfHandle, setCfHandle] = useState("");
  const [displayTags, setDisplayTags] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function toggleTags() {
    setDisplayTags(!displayTags);
  }

  async function makeSubmit() {
    if (cfHandle.trim() === "") return;
    setIsSubmitted(true);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://codeforces.com/api/user.status?handle=${cfHandle}&lang=${"en"}`
      );

      if (!response.ok) {
        throw new Error("API request failed");
      }

      const data = await response.json();
      const solvedProblems = new Set(); // Set to store problems you've solved

      // Filter the data to include only unsolved problems
      const filteredData2 = data.result.filter((item) => {
        const problemKey = item.problem.name;

        if (item.verdict === "OK") {
          // If this submission is accepted, add the problem to the set of solved problems
          solvedProblems.add(problemKey);
        }

        // Return true if the problem hasn't been solved yet (not in the set of solved problems)
        return !solvedProblems.has(problemKey);
      });
      const filteredData = filteredData2.filter((item) => {
        const problemKey = item.problem.name;

        if (item.verdict === "OK") {
          solvedProblems.add(problemKey);
        }

        return !solvedProblems.has(problemKey);
      });

      setApiResponse(filteredData);
    } catch (error) {
      setIsSubmitted(false);
      setIsLoading(false);
      if (error.toString().trim() === "") alert(cfHandle + " does not exist");
      else alert(error);
      setApiResponse(null);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event) {
    let val = event.target.value;
    val = val.trim();
    setCfHandle(val);
  }

  return (
    <>
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Codeforces Unsolved Problems
          </Typography>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <TextField
            required
            id="cfHandle"
            name="cfHandle"
            label="Enter your cf handle"
            fullWidth
            variant="standard"
            value={cfHandle}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                makeSubmit();
              }
            }}
          ></TextField>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Show problem tags"
              onClick={() => toggleTags()}
            />
          </FormGroup>
          <br></br>
          <div className="container">
            <Button
              variant="contained"
              disableElevation
              onClick={() => makeSubmit()}
            >
              Submit
            </Button>
          </div>
        </Paper>
      </Container>
      {isSubmitted && (
        <Container maxWidth="xl">
          {isLoading ? (
            <div className="loading-container">
              <CircularProgress />
            </div>
          ) : (
            <Paper>
              {/* Display the API response data here */}
              <MakeTable data={apiResponse} showTag={displayTags}></MakeTable>
            </Paper>
          )}
          <br></br>
          <br></br>
          <br></br>
        </Container>
      )}
    </>
  );
}
