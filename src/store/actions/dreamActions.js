// import { getFirestore } from "redux-firestore";

//Creating and sending dreamcatcher to firestore
export const addDreamcatcher = (dreamcatcher) => {
  return (dispatch, getState, { getFiresbase, getFirestore }) => {
    //make async call to firebase
    const firestore = getFirestore();
    firestore
      .collection("dreamcatchers")
      .doc(dreamcatcher.model)
      .set({
        ...dreamcatcher,
        img: dreamcatcher.img,
        model: dreamcatcher.model,
        price: dreamcatcher.price,
        isNew: true,
        isOnSale: false,
      })
      .then(() => {
        dispatch({ type: "ADD_DREAMCATCHER", dreamcatcher });
      })
      .catch((err) => {
        //dispatch failed.
        console.log(err);
      });
  };
};

export const addToCart = (props, amount) => {
  const dreamcatcher = props.dreamcatcher;
  console.log(amount);
  return (dispatch) => dispatch({ type: "ADD_TO_CART", dreamcatcher, amount });
};

export const removeFromCart = (item) => {
  return (dispatch) => dispatch({ type: "REMOVE_FROM_CART", item });
};
