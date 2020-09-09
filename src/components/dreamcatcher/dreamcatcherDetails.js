import React from "react"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Image from "react-image-enlarger";


const DreamcatcherDetails = (props) => {
    const [zoomed, setZommed] = React.useState(false);
    const { dreamcatcher } = props;
    if (dreamcatcher) {
        return (
            <div className="container" style={{ marginTop: "50px", }}>
                <div className="row">
                    <div className="col s12 m6 l6" >
                        <div className="center">
                            <Image zoomed={zoomed} src={dreamcatcher.img} alt="לוכד חלומות"
                                onClick={() => setZommed(true)} onRequestClose={() => setZommed(false)} />
                        </div>
                    </div>
                    <div className="col s12 m6 l5  " dir="rtl" >

                        <h2 style={modelStyle}>
                            {dreamcatcher.model}
                        </h2>

                        <h6 >תיאור</h6>
                        <h6 style={paraStyle}>
                            {dreamcatcher.description}
                        </h6>

                        <h6 >קוטר</h6>
                        <h6>
                            {dreamcatcher.diameter}  ס"מ
                        </h6>

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

                        <h6 className="center">
                            {dreamcatcher.price}
                        </h6>

                        <div className="center">
                            <button className="waves-effect waves-light btn" style={buttonStyle}>
                                <span>
                                    הוסיפי לסל
                                </span>
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

const mapStateToProps = (state, ownProps) => {
    const model = ownProps.match.params.model;
    const dreamcatchers = state.firestore.data.dreamcatchers;
    const dreamcatcher = dreamcatchers ? dreamcatchers[model] : null
    return {
        dreamcatcher: dreamcatcher
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'dreamcatchers'
    }])
)(DreamcatcherDetails)


const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "1.5rem",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    letterSpacing: "2px",
    minHeight: "50px",
    marginTop: "1.5rem",
    marginRight: "0px",
    marginBottom: "1.5rem",
    marginLeft: "0px",
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
