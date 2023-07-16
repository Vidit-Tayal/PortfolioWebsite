import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Avatar } from "@mui/material";
import FrontPageData from "../FrontPageData.json";


const Footer = () => {
    function handleProfileClick(event) {
        window.location.href = event.target.alt;
      }


  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom></Typography>

        {FrontPageData.footer_bio.map((item) => (
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {item}
          </Typography>
        ))}

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          {FrontPageData.footer_avatars.map((item) => (
            <Avatar
              className="avatar"
              onClick={handleProfileClick}
              src={item.src}
              alt={item.alt}
            ></Avatar>
          ))}
        </Stack>
      </Box>
  )
}

export default Footer
