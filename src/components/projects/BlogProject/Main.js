import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown2 from "./Markdown2";
import capitalizeWords from "../../text_capitalizer";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import blognumFromName from "./blognumFromName";


function Main(props) {
  const { posts, title, show_full_post } = props;

  const navigate = useNavigate();
  const handleClick = (filename) => {
    navigate("/blog/" + blognumFromName(filename));
  };

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      {title && (
        <>
          <Typography variant="h6" gutterBottom>
            {capitalizeWords(title)}
          </Typography>
          <Divider />
        </>
      )}

      {posts.map((post) => (
        <div>
          <Markdown2 className="markdown" key={post[0].substring(0)}>
            {post[0]}
          </Markdown2>

          {show_full_post==="false" && (
            <Link
              href=""
              underline="hover"
              onClick={() => handleClick(post[1])}
            >
              Read More
            </Link>
          )}

          <Divider></Divider>
        </div>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
