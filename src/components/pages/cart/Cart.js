import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Divider } from "@material-ui/core";
import Dropdown from "react-dropdown";
import Footer from "../../layout/Footer";
import { removeFromCart } from "../../../store/actions/dreamActions";
import CartItem from "./CartItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import "./style.css";

class Cart extends Component {
  state = {
    deliveryPrice: 40,
    isUserHasCoupon: false,
    isUserHasComment: false,
    couponName: null,
    userComment: null,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleDelivery = (event) => {
    this.setState({
      deliveryPrice: event.value === "משלוח עד לבית" ? 40 : 0,
    });
  };

  calItemsPrice(item) {
    const price = parseInt(item.price.slice(0, 3));
    const amount = item.amount;
    const totalPrice = price * amount;
    return totalPrice;
  }
  removeItem = (itemToRemove) => {
    console.log(this.props);
    this.props.removeFromCart(itemToRemove);
  };

  render() {
    const { items } = this.props.items;
    const isBagEmpty = items.length === 0;
    const mainSection = !isBagEmpty ? (
      <CartItems
        items={items}
        func={this.calItemsPrice}
        remove={this.removeItem}
        addCoupon={this.addCoupon}
        addCmmt={this.addComment}
        state={this.state}
        handleCoupon={this.handleCoupon}
      />
    ) : (
      <EmptyBag />
    );
    return (
      <div>
        <div className="container cart-zone">
          <Grid container spacing={1} wrap="wrap" align-content="flex-start">
            <Grid item xs={12} sm={8} md={8} lg={8}>
              <Title />
              {mainSection}
            </Grid>
            <Grid item xs={12} sm={8} md={4} lg={4}>
              <OrderSummary
                state={this.state}
                props={this.props}
                func={this.handleDelivery}
                handleDiscnt={this.handleDiscount}
              />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
  addCoupon = () => {
    this.setState({
      isUserHasCoupon: true,
    });
  };
  addComment = () => {
    this.setState({
      isUserHasComment: true,
    });
  };
  handleCoupon = (event) => {
    const couponName = event.target.value;
    this.setState({
      couponName,
    });
  };
  handleDiscount = (event) => {
    const { coupons } = this.props;
    const [coupon] =
      coupons && coupons.filter((item) => item.name === this.state.couponName);
    console.log(coupon);
    const cartPrice = this.props.items.cartPrice;

    if (coupon) {
      const discount = parseInt(coupon.discount);
      return cartPrice * (1 - discount / 100);
    }
    return cartPrice;
  };
}

const CartItems = (props) => {
  const { items } = props;

  return (
    <Grid container className="cards-zone">
      <Grid item xs={12} sm={12} md={12} lg={12} className="items-box">
        {items &&
          items.map((item, i) => {
            const totalPrice = props.func(item);
            return (
              <CartItem
                item={item}
                price={totalPrice}
                remove={props.remove}
                key={i}
              />
            );
          })}
      </Grid>
      <Coupon
        state={props.state}
        addCoupon={props.addCoupon}
        addCmmt={props.addCmmt}
        handleCoupon={props.handleCoupon}
      />
    </Grid>
  );
};

const Title = () => {
  return (
    <Grid container className="my-basket-title">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <h3>סל הקניות שלי</h3>
      </Grid>
    </Grid>
  );
};

const Coupon = (props) => {
  const couponTextField = props.state.isUserHasCoupon ? (
    <TextField
      variant="outlined"
      color="secondary"
      multiline
      label="קוד קופון"
      onChange={props.handleCoupon}
    />
  ) : null;

  const cmtTextField = props.state.isUserHasComment ? (
    <TextField
      variant="outlined"
      color="secondary"
      multiline
      label="כתוב הערה"
    />
  ) : null;

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Button
          className="note-coupon"
          color="secondary"
          onClick={props.addCoupon}
        >
          הזן קוד קופון
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {couponTextField && couponTextField}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Button
          className="note-coupon"
          color="secondary"
          onClick={props.addCmmt}
        >
          הוסף הערה
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        {cmtTextField && cmtTextField}
      </Grid>
    </Grid>
  );
};

const OrderSummary = (ownProps) => {
  const deliveryOptions = ["משלוח עד לבית", 'איסוף מבית העסק בהוד"ש'];
  const regPrice = ownProps.props.items.cartPrice;
  const price = ownProps.state.isUserHasCoupon
    ? ownProps.handleDiscnt(regPrice)
    : regPrice;
  const deliveryPrice = ownProps.state.deliveryPrice;
  console.log(ownProps);
  console.log(regPrice);
  console.log(price);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className="center">
          <h6>סיכום הזמנה</h6>
        </div>
      </Grid>
      <Divider />
      <Grid
        container
        spacing={1}
        direction="row"
        justify="space-around"
        alignItems="stretch"
        style={{ padding: "0 1em 0 1em" }}
      >
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <p>סיכום ביניים</p>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <p>{price} &#8362;</p>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        style={{ padding: "0 1em 0 1em" }}
        direction="row"
        justify="space-around"
        alignItems="stretch"
      >
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <p>משלוח</p>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <p>40 &#8362;</p>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Dropdown
            options={deliveryOptions}
            onChange={ownProps.func}
            placeholder="משלוח עד לבית"
          />
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        spacing={1}
        style={{ padding: "0 1em 0 1em" }}
        direction="row"
        justify="space-around"
        alignItems="stretch"
      >
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <p>סה"כ לתשלום</p>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <p>{price + deliveryPrice} &#8362;</p>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <span>
            <b>המחיר כולל מס.</b>
          </span>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <span>ימי העסקים כוללים את זמן הכנת המוצר.</span>
        </Grid>
      </Grid>
      <Divider />
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className="center">
          <button className="pay-button z-depth-5">המשך לתשלום</button>
        </div>
      </Grid>
    </Grid>
  );
};

const EmptyBag = () => {
  return (
    <div>
      <h5>אין פריטים בסל</h5>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cart,
    coupons: state.firestore.ordered.coupons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (item) => dispatch(removeFromCart(item)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "coupons" }])
)(Cart);
