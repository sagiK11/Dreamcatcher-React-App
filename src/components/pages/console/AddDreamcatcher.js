import React, { Component } from "react";
import { connect } from "react-redux";
import { addDreamcatcher } from "../../../store/actions/dreamActions";
import { Redirect } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Button, Grid, TextField, Typography } from "@material-ui/core";

class AddDreamcatcher extends Component {
  state = {
    img: "",
    model: "",
    price: null,
    diameter: "",
    category: "",
    amount: "",
    description: "",
  };
  handleChange = (event) => {
    if (event.target == null) {
      if (event.value.includes("0")) {
        this.setState({
          diameter: event.value,
        });
      } else {
        this.setState({
          category: event.value,
        });
      }
    } else {
      console.log(event.target.value);
      this.setState({
        [event.target.id]: event.target.value,
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.addDreamcatcher(this.state);
  };

  render() {
    const adminEmail = "sagi@gmail.com";
    const { auth } = this.props;

    if (!auth.uid || auth.email !== adminEmail) return <Redirect to="/" />;

    const categoryOptions = [
      "מחזיק מפתחות",
      "מפית",
      "מארז",
      "לוכד חלומות",
      "סט",
    ];
    const catDefOption = "בחר סוג פריט";
    const dreamcatcher = categoryOptions[3];

    return (
      <div className="container">
        <Grid container alignItems="stretch">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography component="h1">הוסף פריט לחנות</Typography>
          </Grid>
          <InputField
            label="העתק כתובת קישור לתמונה"
            id="img"
            handleChange={this.handleChange}
          />
          <InputField
            label="שם הדגם"
            id="model"
            handleChange={this.handleChange}
          />
          <InputField
            label="מחיר"
            id="price"
            handleChange={this.handleChange}
          />
          <InputField
            label="כמות במלאי"
            id="amount"
            handleChange={this.handleChange}
          />
          <InputField
            label="תיאור"
            id="description"
            handleChange={this.handleChange}
          />
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <label htmlFor="diameter" className="c-label">
              קטגוריה
            </label>
            <div className="input-field input-fd">
              <Dropdown
                options={categoryOptions}
                onChange={this.handleChange}
                value={catDefOption}
                placeholder="Select an option"
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {this.state.category === dreamcatcher ? (
              <DiameterDropDown def={diamDefOption} func={this.handleChange} />
            ) : null}
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              id="submit-button"
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              הוסף
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const InputField = (props) => {
  const { label, handleChange, id } = props;
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} className="a-field">
      <TextField
        label={label}
        variant="outlined"
        color="secondary"
        onChange={handleChange}
        id={id}
        multiline
      />
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDreamcatcher: (dreamcatcher) => dispatch(addDreamcatcher(dreamcatcher)),
  };
};

const DiameterDropDown = (props) => {
  return (
    <div>
      <label htmlFor="diameter" className="c-label">
        קוטר
      </label>
      <div className="input-field input-fd">
        <Dropdown
          options={diameterOptions}
          onChange={props.func}
          value={props.diamDefOption}
          placeholder="בחר קוטר"
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDreamcatcher);

const diameterOptions = ["30", "40", "50", "60", "70"];
const diamDefOption = diameterOptions[0];
