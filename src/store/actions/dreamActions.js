
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