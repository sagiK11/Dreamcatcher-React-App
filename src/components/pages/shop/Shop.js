import React, { Component } from "react";
import Footer from "../../layout/Footer";
import { connect } from "react-redux";
import Dreamcatcher from "../../dreamcatcher/Dreamcatcher";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import Filter from "./Filter";
import { CircularProgress, Container, makeStyles } from "@material-ui/core";

class Shop extends Component {
  state = {
    category: "all",
    diameter: "",
  };

  filterBy = (category, diameter) => {
    this.setState({
      category,
      diameter,
    });
  };

  render() {
    const { dreamcatchers } = this.props;
    let filteredList =
      this.state.category !== "all"
        ? dreamcatchers &&
          dreamcatchers.filter((item) => {
            return (
              item.diameter === this.state.diameter ||
              item.category === this.state.category
            );
          })
        : dreamcatchers;

    return (
      <div>
        <MainSection dreamcatchers={filteredList} filter={this.filterBy} />
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dreamcatchers: state.firestore.ordered.dreamcatchers,
  };
};
//Syncing with firestore
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "dreamcatchers" }])
)(Shop);

const MainSection = ({ dreamcatchers, filter }) => {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <div className="center">
        <Animate
          play
          delay={1}
          duration={2}
          start={{ opacity: 0.05 }}
          end={{ opacity: 1 }}
        >
          <h2 className={classes.title}>קטלוג לוכדי החלומות של הילה</h2>
        </Animate>
      </div>
      <Filter filter={filter} />
      <Collection dreamcatchers={dreamcatchers} />
    </div>
  );
};
const Collection = ({ dreamcatchers }) => {
  return (
    <Grid container justify="center">
      {dreamcatchers ? (
        dreamcatchers.map((item) => {
          return (
            <Link to={"/dreamcatcher/" + item.id} key={item.id}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Dreamcatcher dreamcatcher={item} />
              </Grid>
            </Link>
          );
        })
      ) : (
        <Loader />
      )}
    </Grid>
  );
};

const Loader = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container justify="center" className={classes.loader}>
        <Grid item>
          <CircularProgress color="primary" />
        </Grid>
        <Grid item className={classes.text}>
          <h5>טוען לוכדים מהממים..</h5>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles({
  pageContainer: {
    marginTop: "7em",
  },
  title: {
    fontWeight: "w700",
    letterSpacing: "3px",
    marginTop: "30px",
  },
  loader: {
    padding: "1em",
  },
  text: {
    padding: "0 1em 0 1em",
  },
});
