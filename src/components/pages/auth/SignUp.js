import React, { Component } from 'react'
import { signUp } from "../../../store/actions/authActions"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Footer from '../home/Footer'
import "./style.css"

import image from "../../../img/img_7.JPG"



class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);

    }
    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/" />

        return (
            <div>
                <div className="container containerStyle" dir="ltr">
                    <div className="row">
                        <SideImage img={image} />
                        <div className="col s12 m6 l6 z-depth-4  signInStyle">
                            <div style={{ padding: "3rem 0 4rem 0" }}>
                                <form className="white" onSubmit={this.handleSubmit} >
                                    <WelcomeTitle />
                                    <div className="input-field">
                                        <label htmlFor="email">אימייל</label>
                                        <input type="email" id='email' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="password">סיסמה</label>
                                        <input type="password" id='password' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="firstName">שם פרטי</label>
                                        <input type="text" id='firstName' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="lastName">שם משפחה</label>
                                        <input type="text" id='lastName' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field" style={{ paddingTop: "2rem" }}>
                                        <button className="btn auth-button">הרשמה</button>
                                        <div className="center red-text">
                                            {authError ? <p>{authError}</p> : null}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError,
    }
}
const WelcomeTitle = () => {
    return (
        <div className="center" dir='rtl'>
            <h2>
                ברוך הבא!
            </h2>
        </div>
    );
}

const SideImage = (props) => {
    return (
        <div className="col s12 m6 l6">
            <img src={props.img} alt="לוכד חלומות" className="responsive-img imgStyle" />
        </div>
    );
}



export default connect(mapStateToProps, mapDispatchToProps)(SignUp);