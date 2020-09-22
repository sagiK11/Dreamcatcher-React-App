export const addCoupon = (coupon) => {
  return (dispatch, getState, { getFiresbase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("coupons")
      .doc(coupon.name)
      .set({
        ...coupon,
        name: coupon.name,
        discount: coupon.discount,
      })
      .then(() => {
        dispatch({ type: "ADD_COUPON", coupon });
      })
      .catch((err) => {
        //dispatch failed.
        console.log(err);
      });
  };
};

export const updateCoupon = (coupon) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("coupons")
      .doc(coupon.name)
      .update({
        ...coupon,
        discount: coupon.discount,
      })
      .then(() => {
        dispatch({ type: "UPDATE_COUPON", coupon });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteCoupon = (coupon) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("coupons")
      .doc(coupon.name)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_COUPON", coupon });
      });
  };
};
