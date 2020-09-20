import React from 'react'
import { makeStyles, Typography, Grid } from '@material-ui/core';



const SectionOne = () => {
    return (
        <Grid container className="intro-text" >
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Text />
            </Grid>
        </Grid>
    )
}

export default SectionOne

const useStyles = makeStyles({
    style: {
        color: "black",
        padding: "1.5em",
        fontSize: "1.4rem",
        lineHeight: "2em",
    }
})
const Text = () => {
    const classes = useStyles();
    return (
        <Typography paragraph className={classes.style}>
            ברוכים הבאים לעולם קסום של לוכדי חלומות בעבודת יד. כאן תוכלו למצוא ולהתרשם ממבחר דגמים של לוכדי חלומות מכל הסוגים.  בחנות אשר נמצאת  <a href="/shop">כאן</a> באתר ישנו מגוון
            רחב של דגמי לוכדי חלומות. אם תמיד חלמת על סט קסום של לוכדי חלומות מעל המיטה תוכלי לבחור ממגוון רחב של דגמים ואם עדין לא תמצאי תמיד ניתן לפנות אלי ונעצב ביחד איתך את הסגנון שמתאים לך.
            מעבר לסטים הקסומים, קיימים עשרות דגמים של לוכדי חלומות ואם לא תמצאי עדין את הלוכד שמוצא חן בעיניך תמיד אפשר לעצב ביחד איתי.
        </Typography>
    );
}
