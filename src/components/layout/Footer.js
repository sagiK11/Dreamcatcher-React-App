import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "./footerStyle.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="dream-edges" style={{ padding: "2.5em 2em 2em 2em" }}>
      <div className="container">
        <Grid container justify="center" direction="row" alignContent="center">
          <Grid item xs={12} sm={12} md={3} lg={3} className="border">
            <Logo style={{ height: "4.5em" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Description />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Media />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Links />
          </Grid>
        </Grid>
      </div>

      <div className="footer-copyright" dir="ltr">
        <div className="container center-align  black-text copy-right">
          &copy; 2020 Dreamcatcher by Hila
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const Links = () => {
  return (
    <Box className="center border" dir="ltr">
      <Box>
        <p>
          <a
            href="https://www.facebook.com/לוכדי-החלומות-של-הילה-355862111817525"
            className="media"
          >
            facebook
          </a>
        </p>
      </Box>
      <Box>
        <p>
          <a
            href="https://www.instagram.com/dreamcatcher_by_hila/"
            className="media"
          >
            instagram
          </a>
        </p>
      </Box>
    </Box>
  );
};

const Description = (props) => {
  return (
    <div className="center border">
      <Link to="/">
        <div>
          <p className="description">לוכדי החלומות של הילה</p>
          <p className="description">
            יצירת לוכדי חלומות בעבודת יד לעיצוב הבית
          </p>
        </div>
      </Link>
    </div>
  );
};
const Media = (props) => {
  return (
    <div dir="ltr" className="center border">
      <p>
        <a href="mailto:hilash95@gmail.com" className="media">
          hilash95@gmail.com
        </a>
      </p>
      <p className="black-text">050-8829551</p>
    </div>
  );
};
