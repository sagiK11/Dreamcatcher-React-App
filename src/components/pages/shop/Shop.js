import React, { Component } from 'react'
import Footer from '../../layout/Footer'
import { connect } from "react-redux";
import Dreamcatcher from "../../dreamcatcher/Dreamcatcher"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Link } from "react-router-dom"
import { Animate } from "react-simple-animate";
import Box from '@material-ui/core/Box';


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
            <div className="center" style={{ marginTop: "7em" }}>
                <Animate play delay={2} duration={2} start={{ opacity: 0 }} end={{ opacity: 1 }}>
                    <h2 style={titleStyle}>לוכדי החלומות של הילה קטלוג</h2>
                </Animate>
                <Filter />
            </div>
            <Collection dreamcatchers={dreamcatchers} />
        </div >
    );
}
const Collection = ({ dreamcatchers }) => {
    return (
        <div className="container">
            <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" justifyContent="center">
                {dreamcatchers && dreamcatchers.map((item) => {
                    return (
                        <Link to={"/dreamcatcher/" + item.id} key={item.id} >
                            <Box >
                                <Dreamcatcher dreamcatcher={item} />
                            </Box>
                        </Link>
                    );
                })}
            </Box>
        </div>
    );
}

const Filter = () => {
    return (
        <div className="container">
            <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" justifyContent="center">
                <Box>
                    <a class="black-text" href='#!'>  <h6 style={{ paddingRight: "10px" }}>מפיות סרוגות</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'> <h6 style={{ paddingRight: "10px" }}>מחזיק מפתחות לרכב</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'>  <h6 style={{ paddingRight: "10px" }}>עשרים ס"מ קוטר</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'> <h6 style={{ paddingRight: "10px" }}>שלושים ס"מ קוטר</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'> <h6 style={{ paddingRight: "10px" }}>ארבעים ס"מ קוטר</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'> <h6 style={{ paddingRight: "10px" }}>חמישים ס"מ קוטר</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'><h6 style={{ paddingRight: "10px" }}>שישים ס"מ קוטר</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'> <h6 style={{ paddingRight: "10px" }}>שבעים ס"מ קוטר</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'><h6 style={{ paddingRight: "10px" }}>סטים קסומים</h6></a>
                </Box>
                <Box>
                    <a class="collection-item active black-text" href='#!'> <h6 style={{ paddingRight: "10px" }}>כל הקטלוג</h6></a>
                </Box>
            </Box>
        </div >
    );
}

const titleStyle = {
    fontWeight: "w700",
    letterSpacing: "3px",
    marginTop: "30px"
}


