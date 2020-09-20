import React from "react"
import { Grid } from '@material-ui/core';
import "./style.css"


const Header = () => {
    return (
        <Grid container className="section-1" >
            <Grid item xs={12} sm={12} md={12} lg={12} >
                <h1 align="center" className="welcome-title up">ברוכים הבאים</h1>
                <h1 align="center" className="welcome-title down">לעולם שכולו קסם</h1>
            </Grid>
        </Grid>
    );
}


export default Header;

