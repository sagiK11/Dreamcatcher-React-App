import authReducer from "./authReducer"
import dreamReducer from "./dreamReducer"
import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase"
import { cartReducer } from "./cartReducer"
import { couponReducer } from "./couponReducer"

const rootReducer = combineReducers({
    auth: authReducer,
    dream: dreamReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    cart: cartReducer,
    coupons: couponReducer,
})

export default rootReducer;

