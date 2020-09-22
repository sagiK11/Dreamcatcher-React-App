import React, { Component } from "react";
import { connect } from "react-redux";
import Footer from "../../layout/Footer";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, TextField, Tab } from "@material-ui/core";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import image from "../../../img/img_7.JPG";
import { signIn, signUp } from "../../../store/actions/authActions";

class Authentication extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    value: 0,
  };
  setValue(val) {
    this.setState({
      value: val,
    });
  }
  handleTabChange = (event, val) => {
    this.setValue(val);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.currentTarget.id === "signin") {
      this.props.signIn(this.state);
    } else {
      this.props.signUp(this.state);
    }
  };

  render() {
    if (this.props.auth.uid) return <Redirect to="/" />;

    return (
      <AppBar position="static">
        <Tabs
          indicatorColor="secondary"
          centered
          value={this.state.value}
          onChange={this.handleTabChange}
        >
          <Tab className="tab" label="התחברות" />
          <Tab className="tab" label="הרשמה" />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          <SignIn
            auth={this.props.auth}
            authError={this.props.authError}
            handle={this.handleChange}
            submit={this.handleSubmit}
          />
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <SignUp
            auth={this.props.auth}
            authError={this.props.authError}
            handle={this.handleChange}
            submit={this.handleSubmit}
          />
        </TabPanel>
      </AppBar>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel">
      {value === index && (
        <Box p={4} style={{ backgroundColor: "white" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const SignUp = (props) => {
  const classes = useStyles();
  const { handle, submit, authError } = props;

  return (
    <div>
      <WelcomeTitle text="ברוכה הבאה :)" />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="border"
        style={{ padding: "2em" }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} className="border">
          <Grid container justify="center" alignItems="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.input}
            >
              <EmailField handle={handle} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.input}
            >
              <PasswordField handle={handle} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.input}
            >
              <NameField id="firstName" type="שם פרטי" handle={handle} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.input}
            >
              <NameField id="lastName" type="שם משפחה" handle={handle} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button
                id="signup"
                fullWidth
                className={classes.button}
                variant="outlined"
                onClick={submit}
                disableElevation
              >
                הרשמה
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            {authError ? <AuthenticationError error={authError} /> : null}
          </Grid>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={8}
          style={{ maxWidth: "25em" }}
          className="hide-on-med-and-down"
        >
          <img src={image} alt="לוכד חלומות" className={classes.img} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

const SignIn = (props) => {
  const classes = useStyles();
  const { handle, submit, authError } = props;

  return (
    <div>
      <WelcomeTitle text="שלום :)" />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="border"
        style={{ padding: "2em" }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4} className="border">
          <Grid
            container
            justify="center"
            alignItems="center"
            className="border"
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.input}
            >
              <EmailField handle={handle} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              className={classes.input}
            >
              <PasswordField handle={handle} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button
                id="signin"
                fullWidth
                className={classes.button}
                variant="outlined"
                onClick={submit}
                disableElevation
              >
                התחברות
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {authError ? <AuthenticationError error={authError} /> : null}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          md={8}
          lg={8}
          style={{ maxWidth: "25em" }}
          className="hide-on-med-and-down"
        >
          <img src={image} alt="לוכד חלומות" className={classes.img} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

const AuthenticationError = (props) => {
  return (
    <div className="center red-text" dir="ltr">
      <Typography>{props.error}</Typography>
    </div>
  );
};

const EmailField = (props) => {
  return (
    <TextField
      label="אימייל"
      id="email"
      onChange={props.handle}
      variant="outlined"
      color="secondary"
      fullWidth
    />
  );
};

const PasswordField = (props) => {
  return (
    <TextField
      label="סיסמה"
      type="password"
      id="password"
      onChange={props.handle}
      variant="outlined"
      color="secondary"
      fullWidth
    />
  );
};

const NameField = (props) => {
  const { type, id } = props;
  return (
    <TextField
      label={type}
      id={id}
      onChange={props.handle}
      variant="outlined"
      color="secondary"
      fullWidth
    />
  );
};

const WelcomeTitle = (props) => {
  const { text } = props;
  const classes = useStyles();
  return (
    <div className="center">
      <h2 className={classes.title}>{text}</h2>
    </div>
  );
};

const useStyles = makeStyles({
  button: {
    color: "black",
    backgroundColor: "#ccada4",
    fontSize: "1.3rem",
  },
  input: {
    margin: ".1em",
    padding: ".3em 0 .3em 0em",
  },
  img: {
    maxWidth: "25em",
    borderRadius: "3em",
    margin: "3em",
  },
  title: {
    margin: "0",
    paddingTop: ".5em",
  },
});
