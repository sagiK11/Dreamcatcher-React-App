const initState = {
  coupons: [],
};

export const couponReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_COUPON": {
      const newCoupon = action.coupon;
      return {
        ...state,
        coupons: [...state.coupons, newCoupon],
      };
    }
    case "ADD_COUPON_ERROR": {
      return state;
    }
    case "UPDATE_COUPON": {
      const newDiscount = action.discount;
      const coupon = state.coupons.filter(
        (item) => item.name === action.coupon.name
      );
      coupon.discount = newDiscount;
      return {
        ...state,
        coupons: [...state.coupons],
      };
    }
    default:
      return state;
  }
};
