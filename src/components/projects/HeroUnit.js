import React from "react";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

const HeroUnit = (props) => {

  const heading = props.heading;
  const desc = props.desc;

  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {heading}
      </Typography>

      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        {desc}
      </Typography>
    </Container>
  );
};

export default HeroUnit;
