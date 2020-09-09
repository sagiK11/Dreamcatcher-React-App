import React, { Component } from 'react'
import { connect } from "react-redux"
import { signIn } from "../../../store/actions/authActions"
import image1 from "../../../img/img_7.JPG"

import Footer from '../home/Footer'
import { Redirect } from 'react-router-dom'
import "./style.css"


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);

    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to="/" />
        return (
            <div>
                <div className="container containerStyle">
                    <div className="row">
                        <SideImage img={image1} />

                        <div className="col s12 m6 l6 z-depth-4 signInStyle" >
                            <div className="" style={{ padding: "5rem 0 6rem 0" }}>
                                <WelcomeTitle />
                                <form className="white center" onSubmit={this.handleSubmit}>
                                    <h5 className="grey-text text-darken-3">התחברות</h5>
                                    <div className="input-field">
                                        <label htmlFor="email" placeholder="helo">אימייל</label>
                                        <input type="email" id='email' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field">
                                        <label htmlFor="password">סיסמה</label>
                                        <input type="password" id='password' onChange={this.handleChange} />
                                    </div>
                                    <div className="input-field" style={{ paddingTop: "2rem" }}>
                                        <button className="btn auth-button" >התחברות</button>
                                        <div className="red-text center">
                                            {authError ? <p>{authError}</p> : null}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                <Footer />
            </div >
        );

    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
const WelcomeTitle = () => {
    return (
        <div className="center" dir='rtl'>
            <h2>
                ברוך שובך!
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
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)



