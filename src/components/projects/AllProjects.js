import React from "react";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/StarBorder";
import tiers from "../../raw_data/projects/tiers";


const AllProjects = () => {
  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid item key={tier.title} xs={12} sm={6} md={4}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                action={tier.title === "Pro" ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                {tier.url[0] === "/" ? (
                  <NavLink className="NavLinkClass" to={tier.url}>
                    {" "}
                    <Button fullWidth variant={tier.buttonVariant}>
                      {tier.buttonText}
                    </Button>
                  </NavLink>
                ) : (
                  <a href={tier.url}>
                    <Button fullWidth variant={tier.buttonVariant}>
                      {tier.buttonText}
                    </Button>
                  </a>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProjects;
