import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from 'react-router-dom';
import textReducer from "../../text_reducer";
import capitalizeWords from "../../text_capitalizer";

function Sidebar(props) {
  const { archives, description, social, title , about_me} = props;
  
  const navigate = useNavigate();
  const handleClick = (num) => {
    navigate('/blog/'+num);
  };
  

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      {archives && archives.length !== 0 && (
        <div>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Archive
          </Typography>
          {archives.map((archive) => (
            <Link
            underline="hover"
            display="block"
              variant="body1"
              href=""
              onClick={() => handleClick(archive.blognum)}
              key={archive.title}
            >
              {textReducer(archive.title) }
            </Link>
          ))}
        </div>
      )}
      {about_me && about_me.length !== 0 && (
        <div>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            About Me
          </Typography>
          {about_me.map((me) => (
            <Link
            underline="hover"
              display="block"
              variant="body1"
              href=""
              onClick={() => handleClick(me.blognum)}
              key={me.title}
            >
              {capitalizeWords( textReducer(me.title) )}
            </Link>
          ))}
        </div>
      )}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Let's Connect!
      </Typography>
      {social.map((network) => (
        <Link
            underline="hover"
            display="block"
          variant="body1"
          href={network.url}
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      blognum: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;