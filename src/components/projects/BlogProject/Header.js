import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormDialog from "../../FormDialog";
import feedback_text from "../../../raw_data/projects/BlogProject/blog_feedback_data";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const { title, backButtonLocation } = props;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/" + backButtonLocation);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button variant="outlined" size="small" onClick={() => handleClick()}>
          Back
        </Button>
        {/* <Button size="small">Back</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {/* <IconButton><SearchIcon /></IconButton> */}
        <FormDialog content={feedback_text} />

        {/* <Button variant="outlined" size="small">Sign up</Button> */}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
