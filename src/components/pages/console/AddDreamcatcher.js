import React, { Component } from "react"
import { connect } from "react-redux"
import { addDreamcatcher } from "../../../store/actions/dreamActions"
import { Redirect } from "react-router-dom"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



class AddDreamcatcher extends Component {
    state = {
        img: "",
        model: "",
        price: null,
        diameter: "",
        category: "",
        amount: "",
        description: "",
    }
    handleChange = (event) => {
        if (event.target == null) {
            if (event.value.includes('0')) {
                this.setState({
                    diameter: event.value,
                })
            } else {
                this.setState({
                    category: event.value,
                })
            }

        } else {
            const price = event.target.id === "price" ? " ש\"ח " : "";
            this.setState({
                [event.target.id]: event.target.value + price
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addDreamcatcher(this.state);
    }


    render() {
        const adminEmail = "sagi@gmail.com"
        const { auth } = this.props;

        if (!auth.uid || auth.email !== adminEmail)
            return <Redirect to="/" />

        const categoryOptions = [
            'מחזיק מפתחות', 'מפית', 'מארז', 'לוכד חלומות', 'סט'
        ]
        const catDefOption = categoryOptions[0];
        const dreamcatcher = categoryOptions[3];

        return (
            <div className="container" >
                <form className="white" onSubmit={this.handleSubmit} dir="rtl">
                    <h5 className="grey-text text-darken-3">הוסף פריט לחנות</h5>

                    <label htmlFor="img" sclassName="c-label">העתק כתובת קישור לתמונה</label>
                    <div className="input-field">
                        <textarea id="img" onChange={this.handleChange}></textarea>
                    </div>
                    <label htmlFor="model" className="c-label">שם הדגם</label>
                    <div className="input-field input-fd">
                        <input id="model" onChange={this.handleChange}></input>
                    </div>

                    <label htmlFor="price" className="c-label">מחיר</label>
                    <div className="input-field input-fd">
                        <input id="price" onChange={this.handleChange}></input>
                    </div>
                    <label htmlFor="diameter" className="c-label">קטגוריה</label>
                    <div className="input-field input-fd" >
                        <Dropdown options={categoryOptions} onChange={this.handleChange}
                            value={catDefOption} placeholder="Select an option" />
                    </div>

                    {this.state.category === dreamcatcher ?
                        <DiameterDropDown def={diamDefOption} func={this.handleChange} /> : null}

                    <label htmlFor="amount" className="c-label">כמות במלאי</label>
                    <div className="input-field input-fd">
                        <input id="amount" onChange={this.handleChange}></input>
                    </div>

                    <label htmlFor="description c-label" >תיאור</label>
                    <div className="input-field input-fd">
                        <textarea id="description" style={{ minHeight: "55px", minWidth: "800px" }} onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field" id="submit-button">
                        <button className="c-button">הוסף</button>
                    </div>
                </form>
            </div >
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


const DiameterDropDown = (props) => {
    return (
        <div>
            <label htmlFor="diameter" className="c-label">קוטר</label>
            <div className="input-field input-fd">
                <Dropdown options={diameterOptions} onChange={props.func}
                    value={props.diamDefOption} placeholder="בחר קוטר" />
            </div>
        </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDreamcatcher)


const diameterOptions = [
    '30', '40', '50', '60', '70'
];
const diamDefOption = diameterOptions[0];
