// import { getFirestore } from "redux-firestore";

//Creating and sending dreamcatcher to firestore
export const addDreamcatcher = (dreamcatcher) => {
    return (dispatch, getState, { getFiresbase, getFirestore }) => {
        //make async call to firebase
        const firestore = getFirestore();
        firestore.collection('dreamcatchers').doc(dreamcatcher.model).set({
            ...dreamcatcher,
            img: dreamcatcher.img,
            model: dreamcatcher.model,
            price: dreamcatcher.price,

        }).then(() => {
            dispatch({ type: 'ADD_DREAMCATCHER', dreamcatcher });
        }).catch((err) => {
            //dispatch failed.
            console.log(err);
        })

    }

}

export const addToCart = (props, amount) => {
    const dreamcatcher = props.dreamcatcher;
    const dreamcatcherModel = props.dreamcatcher.model;
    const profileId = props.profile.uid;

    if (profileId == null) {
        return (dispatch) => dispatch({ type: 'ADD_TO_CART', dreamcatcher, amount });
    }
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        const newItem = {
            model: props.dreamcatcher.model,
            price: props.dreamcatcher.price,
            amount: amount,
        }
        firestore.collection('users').doc(profileId).update({
            cart: firebase.firestore.FieldValue.arrayUnion(newItem),
        }).then(() => {
            dispatch({ type: 'ADD_TO_CART', dreamcatcherModel })
        }).catch((err) => {
            console.log(err);
        })


    }
}