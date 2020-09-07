import React, { Component } from 'react'
import Footer from '../home/Footer'
import { connect } from "react-redux";
import Dreamcatcher from "../../dreamcatcher/Dreamcatcher"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Link } from "react-router-dom"

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
    return (
        <div className="container">
            <div className="row">
                <Collection dreamcatchers={dreamcatchers} />
                <Filter />
            </div>
        </div>
    );
}
const Collection = ({ dreamcatchers }) => {
    return (
        <div className="col s12 m6 l8" style={borderStyle}>
            {dreamcatchers && dreamcatchers.map((item) => {
                return (
                    <Link to={"/dreamcatcher/" + item.id} key={item.id}>
                        <Dreamcatcher dreamcatcher={item} />
                    </Link>
                );
            })}
        </div>
    );
}

const Filter = () => {
    return (
        <div className="col s12 m6 l4" style={borderStyle}>

        </div>
    );
}

const borderStyle = {
    border: "2px solid black"
}

