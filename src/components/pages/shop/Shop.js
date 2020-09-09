import React, { Component } from 'react'
import Footer from '../home/Footer'
import { connect } from "react-redux";
import Dreamcatcher from "../../dreamcatcher/Dreamcatcher"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Link } from "react-router-dom"
import { Animate, AnimateGroup } from "react-simple-animate";


class Shop extends Component {
    render() {
        const { dreamcatchers } = this.props;
        return (
            <div>
                <MainSection dreamcatchers={dreamcatchers} />
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        dreamcatchers: state.firestore.ordered.dreamcatchers
    }
}
//Syncing with firestore
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'dreamcatchers' }])
)(Shop)

const MainSection = ({ dreamcatchers }) => {
    console.log(dreamcatchers);
    return (
        <div >
            <div className="center">
                <Animate play delay={2} duration={2} start={{ opacity: 0 }} end={{ opacity: 1 }}>
                    <h2 style={titleStyle}>לוכדי החלומות של הילה קטלוג</h2>
                </Animate>
                <Filter />
            </div>
            <div className="row" style={rowStyle}>
                <Collection dreamcatchers={dreamcatchers} />

            </div>
        </div>
    );
}
const Collection = ({ dreamcatchers }) => {
    var index = -1;
    return (
        <div className="col s12 m6 l10 offset-l1" >
            {dreamcatchers && dreamcatchers.map((item) => {
                index++;
                return (
                    <AnimateGroup play key={item.id} >
                        <Animate delay={0.5} start={{ transform: 'translate(0, 170px)' }}
                            end={{ transform: 'translate(0, 0)' }} sequenceIndex={index} duration={1.5}>
                            <Link to={"/dreamcatcher/" + item.id} >
                                <Dreamcatcher dreamcatcher={item} />
                            </Link>
                        </Animate>
                    </AnimateGroup>
                );
            })}
        </div>
    );
}

const Filter = () => {
    return (
        <div className="row" dir="rtl" >
            <div style={flexStyle}>
                <h6 style={{ paddingRight: "60px" }}>כל הקטלוג</h6>
                <h6 style={{ paddingRight: "10px" }}>סטים קסומים</h6>
                <h6 style={{ paddingRight: "10px" }}>שבעים ס"מ קוטר</h6>
                <h6 style={{ paddingRight: "10px" }}>שישים ס"מ קוטר</h6>
                <h6 style={{ paddingRight: "10px" }}>חמישים ס"מ קוטר</h6>
                <h6 style={{ paddingRight: "10px" }}>ארבעים ס"מ קוטר</h6>
                <h6 style={{ paddingRight: "10px" }}>שלושים ס"מ קוטר</h6>
                <h6 style={{ paddingRight: "10px" }}>עשרים ס"מ קוטר</h6>
                <h6 style={{ paddingRight: "10px" }}>מחזיק מפתחות לרכב</h6>
                <h6 style={{ paddingRight: "10px" }}>מפיות סרוגות</h6>
            </div >

        </div >
    );
}

const borderStyle = {
    border: "2px solid black"
}

const titleStyle = {
    fontWeight: "w700",
    letterSpacing: "3px",
    marginTop: "30px"
}

const rowStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
}
const flexStyle = {
    display: "inline-flex",
    width: "80%",
    padding: "20px"
}

