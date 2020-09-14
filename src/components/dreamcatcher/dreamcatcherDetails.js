import React, { Component } from "react"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Image from "react-image-enlarger";
import { addToCart } from "../../store/actions/dreamActions"
{/* <div className="col s12 m6 l6" >
<div className="center">
    <Image zoomed={isZoomed} src={dreamcatcher.img} alt="לוכד חלומות"
        onClick={() => setZommed(true)} onRequestClose={() => setZommed(false)} />
</div>
</div> */}

class DreamcatcherDetails extends Component {
    state = {
        amount: 1,
    }
    handleChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }
    handleAddToCart = (event) => {
        this.props.addToCart(this.props, this.state.amount);
    }
    render() {
        const { dreamcatcher } = this.props;
        if (dreamcatcher) {
            return (
                <div className="container" dir="ltr">
                    <div className="row">
                        <div className="col s12 m6 l6" >
                            <img src={dreamcatcher.img} alt="לוכד חלומות" className="responsive-img" />
                        </div>

                        <div className="col s12 m6 l5  " dir="rtl" >

                            <h2 style={modelStyle}>{dreamcatcher.model} </h2>

                            <span><b>תיאור</b></span>
                            <h6 style={paraStyle}>{dreamcatcher.description}</h6>

                            <span><b>קוטר</b></span>
                            <h6>{dreamcatcher.diameter}ס"מ</h6>

                            <div className="center">
                                <div style={flexStyle}>
                                    <h6>כמות במלאי  - <span>{dreamcatcher.amount}</span></h6>
                                </div>
                            </div>

                            <div className="center">
                                <div style={flexStyle}>
                                    <i className="material-icons" style={{ color: "black", fontSize: "2rem", paddingTop: "1rem" }}>check</i>
                                    <p style={{ fontSize: "18px", color: "black", paddingTop: "0", paddingRight: "5px" }}>עבודת יד</p>
                                </div>
                            </div>

                            <h6 className="center">{dreamcatcher.price}</h6>
                            <div className="center">
                                <div className="row">
                                    <div className="col s12 m6 l4 offset-l6">

                                    </div>
                                    <div className="col s12 m6 l2">
                                        <label htmlFor="">כמות</label>
                                        <input type="text" defaultValue={1} className="" id="amount" onChange={this.handleChange} />
                                    </div>
                                </div>

                            </div>
                            <div className="center">
                                <button className="waves-effect waves-light btn"
                                    style={buttonStyle} onClick={this.handleAddToCart}>
                                    <span>הוסיפי לסל</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            );
        } else {
            return (
                <div className="container" dir="rtl">
                    <div className="center">
                        <p>טוען פריט..</p>
                    </div>
                </div>
            );
        }
    }

}

const mapStateToProps = (state, ownProps) => {
    const model = ownProps.match.params.model;
    const dreamcatchers = state.firestore.data.dreamcatchers;
    const dreamcatcher = dreamcatchers ? dreamcatchers[model] : null
    return {
        dreamcatcher: dreamcatcher,
        profile: state.firebase.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (dreamcatcher, amount) => dispatch(addToCart(dreamcatcher, amount))
    }

}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'dreamcatchers'
    }])
)(DreamcatcherDetails)


const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "1.5rem",
    letterSpacing: "2px",
    minHeight: "50px",
    display: "block",
    width: "100%",
}

const paraStyle = {
    lineHeight: "1.8rem",
}

const flexStyle = {
    display: "inline-flex",
}

const modelStyle = {
    marginTop: "0.3em",
    marginBottom: "0.3em",
}
