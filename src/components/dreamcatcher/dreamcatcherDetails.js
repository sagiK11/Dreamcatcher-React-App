import React from "react"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const DreamcatcherDetails = (props) => {
    const { dreamcatcher } = props;
    if (dreamcatcher) {
        return (
            <div className="container section" dir="rtl">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <img src={dreamcatcher.img} alt="לוכד חלומות" className="responsive-img" />
                        <span className="card-title">{dreamcatcher.model}</span>
                        <p>{dreamcatcher.price} </p>
                    </div>

                </div>
            </div>
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
