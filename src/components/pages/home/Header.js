import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";
import { Parallax } from "react-parallax";
import image from "../../../img/bg_1.JPG";
const Header = () => {
  const strengthFactor = 3;
  const strength = window.innerWidth / strengthFactor;
  console.log(strengthFactor);
  return (
    <Parallax
      bgImage={image}
      alt="לוכד חלומות"
      strength={strength}
      style={{ backgroundPosition: "center" }}
    >
      <Grid
        container
        style={{
          height: "40em",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h1 align="center" className="welcome-title up">
            ברוכים הבאים
          </h1>
          <h1 align="center" className="welcome-title down">
            לעולם שכולו קסם
          </h1>
        </Grid>
      </Grid>
    </Parallax>
  );
};

export default Header;
