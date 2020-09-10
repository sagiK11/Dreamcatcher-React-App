import React, { Component } from 'react'
import Footer from '../home/Footer'
import { connect } from "react-redux";
import Dreamcatcher from "../../dreamcatcher/Dreamcatcher"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Link } from "react-router-dom"
import { Animate, AnimateGroup } from "react-simple-animate";
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
            <div className="center">
                <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" justifyContent="center">
                    <Collection dreamcatchers={dreamcatchers} />
                </Box>
            </div>
        </div >
    );
}
const Collection = ({ dreamcatchers }) => {
    var index = -1;
    return (
        <div className="container">
            {dreamcatchers && dreamcatchers.map((item) => {
                index++;
                return (
                    <Box flexWrap="wrap" m={1}>
                        <AnimateGroup play key={item.id} >
                            <Animate delay={0.5} start={{ transform: 'translate(0, 170px)' }}
                                end={{ transform: 'translate(0, 0)' }} sequenceIndex={index} duration={1.5}>
                                <Link to={"/dreamcatcher/" + item.id} >
                                    <Dreamcatcher dreamcatcher={item} />
                                </Link>
                            </Animate>
                        </AnimateGroup>
                    </Box>
                );
            })}

        </div>
    );
}

const Filter = () => {
    return (
        <div className="container">
            <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" justifyContent="center">
                <Box>
                    <a class="collection-item active black-text" href='#!'>  <h6 style={{ paddingRight: "10px" }}>מפיות סרוגות</h6></a>
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


