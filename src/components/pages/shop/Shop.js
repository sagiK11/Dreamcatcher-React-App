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
  return (
    <div>
      <div className="center" style={{ marginTop: "7em" }}>
        <Animate
          play
          delay={2}
          duration={2}
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
        >
          <h2 style={titleStyle}>קטלוג לוכדי החלומות של הילה</h2>
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
      {dreamcatchers &&
        dreamcatchers.map((item) => {
          return (
            <Link to={"/dreamcatcher/" + item.id} key={item.id}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Dreamcatcher dreamcatcher={item} />
              </Grid>
            </Link>
          );
        })}
    </Grid>
  );
};

const titleStyle = {
  fontWeight: "w700",
  letterSpacing: "3px",
  marginTop: "30px",
};
