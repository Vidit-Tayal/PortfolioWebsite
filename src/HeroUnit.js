import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FrontPageData from "./FrontPageData.json";
import FormDialog from "./components/FormDialog";

const HeroUnit = () => {



  function handleScrollToBottom(){
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  var todayDate = new Date();
  var myAge = todayDate.getFullYear() - 2003;
  if (todayDate.getMonth() + 1 <= 10) myAge--;
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Hi !! I'm Vidit
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          {FrontPageData.intro.replace("19", myAge)}
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" onClick={handleScrollToBottom}>profile links</Button>
          {/* <Button variant="outlined">feedback</Button> */}
          <FormDialog content="Thank you for visiting my website!! 😊 I genuinely
            appreciate your time and would love to hear your feedback. Please
            take a moment to share your thoughts, suggestions, or any issues you
            encountered while browsing the website. 📝"></FormDialog>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroUnit;
