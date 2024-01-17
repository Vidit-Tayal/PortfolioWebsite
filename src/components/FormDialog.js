import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import sendEmail from "./EmailSender";
import { useState } from "react";

export default function FormDialog(props) {
  const [feedbackDetails, setFeedbackDetails] = useState({
    name: "",
    highlights: "",
    improvements: "",
    suggestions: ""
  });

  function changeDetail(event) {
    const name = event.target.id;
    const value = event.target.value;

    setFeedbackDetails({ ...feedbackDetails, [name]: value });
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [Snackbaropen, setSnackbarOpen] = React.useState(false);

  function handleSubmit() {
    var flag = false;
  
    for (const key of Object.keys(feedbackDetails)) {
      console.log("key: " + key);
  
      if (feedbackDetails[key] === "") {
        console.log("pre-exit from loop at key: " + key);
        return; 
      }
    }
  
    flag = true;
  
    if (flag) {
      var subject = "New Feedback for Portfolio Website 🔥";
      var body = "HIGHLIGHTS:\n"+feedbackDetails.highlights+"\n\nIMPROVEMENTS:\n"+feedbackDetails.improvements+"\n\nSUGGESTIONS:\n"+feedbackDetails.suggestions;
      sendEmail(feedbackDetails.name, subject, body);
      handleClose();
      setSnackbarOpen(true);
    }
  }
  
  

  const handleSnackbarClose = (event, reason) => {
    if (reason === "autoHideDuration") {
      return;
    }
    setSnackbarOpen(false);
    console.log("closedsnackbar");
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        feedback
      </Button>
      <Snackbar
        open={Snackbaropen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Your feedback means a lot to me, and I'm grateful for your contribution! 🌟"
        // action={action}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.content}
            
            <br></br>
            <br></br>
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={feedbackDetails.name}
            onChange={changeDetail}
          />
          <TextField
            required
            margin="dense"
            id="highlights"
            label="Highlights"
            type="text"
            fullWidth
            variant="standard"
            value={feedbackDetails.highlights}
            onChange={changeDetail}
          />
          <TextField
            required
            margin="dense"
            id="improvements"
            label="Areas of Improvement"
            type="text"
            fullWidth
            variant="standard"
            value={feedbackDetails.improvements}
            onChange={changeDetail}
          />
          <TextField
            required
            margin="dense"
            id="suggestions"
            label="Additional Suggestions"
            type="text"
            fullWidth
            variant="standard"
            value={feedbackDetails.suggestions}
            onChange={changeDetail}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
