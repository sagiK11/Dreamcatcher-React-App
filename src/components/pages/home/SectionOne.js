import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const SectionOne = () => {
  return (
    <Grid container className="intro-text">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Text />
      </Grid>
    </Grid>
  );
};

export default SectionOne;

const useStyles = makeStyles({
  style: {
    color: "black",
    padding: "1.5em",
    fontSize: "1.4rem",
    lineHeight: "2em",
  },
});
const Text = () => {
  const classes = useStyles();
  return (
    <Typography paragraph component="p" className={classes.style}>
      ברוכים הבאים לעולם הקסום שלי. כאן תוכלו למצוא לוכדי חלומות הנעשים בעבודת
      יד עם המון אהבה.
      <Link to="/shop"> בחנות </Link>
      ישנו מגוון רחב של דגמי לוכדי חלומות. החל מסטים של לוכדי חלומות על ענף, ועד
      ללוכדי חלומות קטנים לרכב או למחזיק מפתחות. הדגמים שלי יהפכו כל פינה בבית
      לקסומה במיוחד שאף אחד לא יוכל לפספס. בנוסף, ישנה אפשרות לעצב ביחד איתי את
      הדגם המושלם כך שיתאים בדיוק לפינה שלך בבית. אני אשמח לעזור לך לבחור את בד
      הלוכד, דגם המפית, נוצות, ועוד מגוון עשיר של אפשרויות לבחירתך.
    </Typography>
  );
};
