import authReducer from "./authReducer"
import dreamReducer from "./dreamReducer"
import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"

const rootReducer = combineReducers({
    auth: authReducer,
    dream: dreamReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer;

