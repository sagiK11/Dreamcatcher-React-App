import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Filter extends Component {
    render() {
        return (
            <div className="container f-grid">
                <Grid container justify="center" >
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("all")}>כל הקטלוג</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("סט")}>סטים קסומים</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("לוכד חלומות")}>לוכד חלומות</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("מחזיק מפתחות")}>מחזיק מפתחות</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("מפיות")}>מפיות</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("", "70")}>70 ס"מ קוטר</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("", "60")}>60 ס"מ קוטר</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("", "50")}>50 ס"מ קוטר</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("", "40")}>40 ס"מ קוטר</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                        <Button fullWidth variant="outlined" color="secondary" onClick={() => this.props.filter("", "30")}>30 ס"מ קוטר</Button>
                    </Grid>
                </Grid>
            </div>

        );
    }
}

export default Filter;
