import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FrontPageData from "./FrontPageData.json";
import "./FrontPage.css";

const cards = [];
for (var i = 1; i < FrontPageData.card_headings.length; i++) {
  cards.push(i);
}

const FrontPageCards = () => {
  // Auto Image Slideshow
  const timerRef = useRef(0);

  const [currIndex, setCurrIndex] = useState(0);

  function goToNext() {
    setCurrIndex(currIndex + 1);
  }

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 8000);
  });

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <NavLink
              className="NavLinkClass"
              to={FrontPageData.card_headings[card].url}
            >
              <Card
                className="avatar"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                    transition: "ease-in-out 5s",
                  }}
                  image={
                    FrontPageData.card_headings[card].imgsrc[
                      currIndex %
                        FrontPageData.card_headings[card].imgsrc.length
                    ]
                  } //Math.floor(Math.random() * (FrontPageData.card_headings[card].imgsrc.length))
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {FrontPageData.card_headings[card].name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {FrontPageData.card_headings[card].desc}
                  </Typography>
                </CardContent>
              </Card>
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FrontPageCards;
