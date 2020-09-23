import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

function SectionThree() {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography align="center" className={classes.style}>
          רוצה לשמוע על מבצעים סודיים?
        </Typography>
        <Typography align="center" className={classes.h5}>
          הצטרפי עכשיו למועדון החברות!
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography align="center" className={classes.h6} component="h5">
          איך נרשמים?
        </Typography>

        <Typography align="center" className={classes.style}>
          מאד פשוט! היכנסי לדף ההרשמה
          <span>
            <a href="/signup"> כאן </a>
          </span>
          ותהיי מבין הראשונות ששומעות על מבצעים והגרלות!
        </Typography>
      </Grid>
    </Grid>
  );
}
const useStyles = makeStyles({
  style: {
    color: "black",
    fontSize: "1.4rem",
    lineHeight: "1.8em",
  },
  h5: {
    fontSize: "2.4rem",
  },
  h6: {
    fontSize: "1.8rem",
  },
  grid: {
    padding: "3em",
  },
});

export default SectionThree;
