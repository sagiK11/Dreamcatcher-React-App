import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Filter extends Component {
  render() {
    const { filter } = this.props;
    return (
      <div className="container f-grid">
        <Grid container justify="center">
          <FilterButton
            md={3}
            lg={3}
            filter={filter}
            category="all"
            text="כל הקטלוג"
          />
          <FilterButton
            md={3}
            lg={3}
            filter={filter}
            category="סט"
            text="סטים קסומים"
          />
          <FilterButton
            md={3}
            lg={3}
            filter={filter}
            category="לוכד חלומות"
            text="לוכד חלומות"
          />
          <FilterButton
            md={3}
            lg={3}
            filter={filter}
            category="מחזיק מפתחות"
            text="מחזיק מפתחות"
          />
          <FilterButton
            md={2}
            lg={2}
            filter={filter}
            category="מפיות"
            text="מפיות"
          />
          <FilterButton
            md={2}
            lg={2}
            filter={filter}
            category="70"
            diam
            text="70 סמ קוטר"
          />
          <FilterButton
            md={2}
            lg={2}
            filter={filter}
            category="60"
            diam
            text="60 סמ קוטר"
          />
          <FilterButton
            md={2}
            lg={2}
            filter={filter}
            category="50"
            diam
            text="50 סמ קוטר"
          />
          <FilterButton
            md={2}
            lg={2}
            filter={filter}
            category="40"
            diam
            text="40 סמ קוטר"
          />
          <FilterButton
            md={2}
            lg={2}
            filter={filter}
            category="30"
            diam
            text="30 סמ קוטר"
          />
        </Grid>
      </div>
    );
  }
}

export default Filter;

const FilterButton = ({ md, lg, filter, category, diam = false, text }) => {
  return (
    <Grid item xs={12} sm={12} md={md} lg={lg}>
      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        onClick={diam ? () => filter("", category) : () => filter(category)}
      >
        {text}
      </Button>
    </Grid>
  );
};
