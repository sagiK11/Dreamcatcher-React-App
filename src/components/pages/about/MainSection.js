import React from "react";
import "./style.css"
import Grid from "@material-ui/core/Grid"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles({
    text: {
        fontSize: "1.5rem",
        lineHeight: "2.2em",
        padding: ".5em 1.5em 1em 1.5em",
    },
    title: {
        padding: ".5em",
        letterSpacing: "0.2em",
        fontSize: "3rem",
    }
})
const MainSection = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} justify="center">
                <Typography align="center" className={classes.title} >קצת עליי</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography paragraph variant="body1" className={classes.text}>
                    קוראים לי הילה, אני בת 25 וכל חיי נשמתי עיצוב ופריטים מעבודת יד.
                    את לוכדי החלומות שלי התחלתי להכין לפני שלוש שנים כשהתחלתי ללמוד כלכלה וחשבונאות באונ' בן גוריון שבנגב.
                    תחילת הלימודים הייתה כרוכה במעבר לדירה שכורה בבאר שבע,
                    היה לי חשוב להפוך את הדירה לאווירה ביתית ומלאה בוהו שייק, התקציב היה דל אז התחלתי להכין פריטים מעבודת יד.
                    התאהבתי בהכנת לוכדי חלומות ובעקבות כך פתחתי את "לוכדי החלומות של הילה". אני מקווה שתאהבו את העיצובים ואשמח לעזור לכם לעצב את הדגם המושלם לחדר או לכל פינה בבית.
                </Typography>
            </Grid>
        </Grid>
    );
}

export default MainSection;