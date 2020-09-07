import React, { Component } from "react"
import { connect } from "react-redux"
import { addDreamcatcher } from "../../store/actions/dreamActions"
import { Redirect } from "react-router-dom"

class AddDreamcatcher extends Component {
    state = {
        img: "",
        model: "",
        price: null,
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addDreamcatcher(this.state)
    }

    render() {
        const adminEmail = "sagi@gmail.com"
        const { auth } = this.props;

        if (!auth.uid || auth.email !== adminEmail)
            return <Redirect to="/" />

        return (
            <div className="container" >
                <form className="white" onSubmit={this.handleSubmit} dir="rtl">
                    <h5 className="grey-text text-darken-3">הוסף פריט לחנות</h5>

                    <label htmlFor="img" style={labelStyle}>העתק כתובת קישור לתמונה</label>
                    <div className="input-field">
                        <textarea id="img" onChange={this.handleChange}></textarea>
                    </div>
                    <label htmlFor="model" style={labelStyle}>שם הדגם</label>
                    <div className="input-field" style={inputStyle}>
                        <input id="model" onChange={this.handleChange}></input>
                    </div>


                    <label htmlFor="price" style={labelStyle}>מחיר</label>
                    <div className="input-field" style={inputStyle}>
                        <input id="price" onChange={this.handleChange}></input>
                    </div>

                    <label htmlFor="diameter" style={labelStyle}>קוטר</label>
                    <div className="input-field" style={inputStyle}>
                        <input id="diameter" onChange={this.handleChange}></input>
                    </div>

                    <label htmlFor="category" style={labelStyle}>קטגוריה</label>
                    <div className="input-field" style={inputStyle}>
                        <input id="category" onChange={this.handleChange}></input>
                    </div>



                    <label htmlFor="amount" style={labelStyle}>כמות במלאי</label>
                    <div className="input-field" style={inputStyle}>
                        <input id="amount" onChange={this.handleChange}></input>
                    </div>

                    <label htmlFor="description" style={labelStyle}>תיאור</label>
                    <div className="input-field">
                        <input id="description" onChange={this.handleChange}></input>
                    </div>








                    <div className="input-field">
                        <button className="btn pink lighten-1">הוסף</button>
                    </div>
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addDreamcatcher: dreamcatcher => dispatch(addDreamcatcher(dreamcatcher))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDreamcatcher)

const labelStyle = {
    fontSize: "16px",
}

const inputStyle = {
    width: "200px"
}