import React, { Component } from 'react'
import Footer from '../../layout/Footer'
import { connect } from "react-redux";
import Dreamcatcher from "../../dreamcatcher/Dreamcatcher"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Link } from "react-router-dom"
import { Animate } from "react-simple-animate";
import Box from '@material-ui/core/Box';
import "./style.css"
import Filter from "./Filter"
import { Divider } from '@material-ui/core';


class Shop extends Component {
    state = {
        category: "all",
        diameter: "",
    }

    filterBy = (category, diameter) => {
        this.setState({
            category,
            diameter,
        });
    }


    render() {
        const { dreamcatchers } = this.props;
        let filteredList = this.state.category !== "all" ?
            dreamcatchers && dreamcatchers.filter((item) => {
                return item.diameter === this.state.diameter || item.category === this.state.category;
            }) : dreamcatchers;

        return (
            <div>
                <MainSection dreamcatchers={filteredList} filter={this.filterBy} />
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

const MainSection = ({ dreamcatchers, filter }) => {
    return (
        <div >
            <div className="center" style={{ marginTop: "7em" }}>
                <Animate play delay={2} duration={2} start={{ opacity: 0 }} end={{ opacity: 1 }}>
                    <h2 style={titleStyle}>לוכדי החלומות של הילה קטלוג</h2>
                </Animate>
            </div>
            <Filter filter={filter} />
            <Divider />
            <Collection dreamcatchers={dreamcatchers} />
        </div >
    );
}
const Collection = ({ dreamcatchers }) => {
    return (
        <div className="container">
            <Box display="flex" flexWrap="wrap" justifyContent="center">
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

const titleStyle = {
    fontWeight: "w700",
    letterSpacing: "3px",
    marginTop: "30px"
}
