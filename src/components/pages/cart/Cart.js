import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from '@material-ui/core/Grid';
import { Divider } from "@material-ui/core";
import Dropdown from 'react-dropdown';
import Footer from "../../layout/Footer"
import { removeFromCart } from "../../../store/actions/dreamActions"
import CartItem from "./CartItem"
import "./style.css"




class Cart extends Component {

    state = {
        deliveryPrice: 40,
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleDelivery = (event) => {
        this.setState({
            deliveryPrice: event.value === "משלוח עד לבית" ? 40 : 0
        })
    }


    calItemsPrice(item) {
        const price = parseInt(item.price.slice(0, 3));
        const amount = item.amount;
        const totalPrice = price * amount;
        return totalPrice;

    }
    removeItem = (itemToRemove) => {
        console.log(this.props)
        this.props.removeFromCart(itemToRemove);
    }

    render() {
        const { items } = this.props.items;
        const isBagEmpty = items.length === 0;
        const mainSection = !isBagEmpty ?
            <CartItems items={items} func={this.calItemsPrice} remove={this.removeItem} /> : <EmptyBag />;
        return (
            <div>
                <div className="container cart-zone" style={border}>
                    <Grid container wrap="wrap" >
                        <Grid container spacing={1} wrap="wrap" align-content="flex-start">
                            <Grid item xs={12} sm={8} md={8} lg={8} style={border} >
                                <Title />
                                {mainSection}

                            </Grid>
                            <Grid item xs={12} sm={8} md={4} lg={4} style={border}>
                                <OrderSummary cart={this.props.items} func={this.handleDelivery} deliveryPrice={this.state.deliveryPrice} />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div >


        );
    }
}

const CartItems = (props) => {
    const { items } = props;
    return (
        <Grid className="cards-zone">
            <Grid className="items-box">
                {items && items.map((item, i) => {
                    const totalPrice = props.func(item);
                    return <CartItem item={item} price={totalPrice} remove={props.remove} key={i} />
                })}
            </Grid>
            <Coupon />
        </Grid>

    );

}

const Title = () => {
    return (
        <Grid container style={border} className="my-basket-title">
            <Grid item xs={12} sm={12} md={12} lg={12} style={border}>
                <h3 >סל הקניות שלי</h3>
            </Grid>
        </Grid>
    );
}

const Coupon = () => {
    return (
        <Grid >
            <Grid item lg={12} style={border}>
                <a href="!#" className="anchor">הזן קוד קופון</a>
            </Grid>
            <Grid item lg={12} style={border}>
                <a href="!#" className="anchor">הוסף הערה</a>
            </Grid>
        </Grid>
    );

}

const OrderSummary = (props) => {
    const deliveryOptions = [
        'משלוח עד לבית', 'איסוף מבית העסק בהוד"ש'
    ]

    return (
        <Grid >
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="center">
                    <h6>סיכום הזמנה</h6>
                </div>
            </Grid>
            <Divider />
            <Grid container spacing={1} direction="row" justify="space-around" alignItems="stretch" style={{ padding: "0 1em 0 1em" }}>
                <Grid item xs={6} sm={6} md={6} lg={6} style={border}>
                    <p >סיכום ביניים</p>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} style={border}>
                    <p >{props.cart.cartPrice == null ? 0 : props.cart.cartPrice} &#8362;</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} style={{ padding: "0 1em 0 1em" }}
                direction="row"
                justify="space-around"
                alignItems="stretch"  >
                <Grid item xs={6} sm={6} md={6} lg={6} style={border}>
                    <p>משלוח</p>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} style={border}>
                    <p >40 &#8362;</p>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Dropdown options={deliveryOptions} onChange={props.func}
                        placeholder="משלוח עד לבית" />
                </Grid>
            </Grid>
            <Divider />
            <Grid container spacing={1} style={{ padding: "0 1em 0 1em" }}
                direction="row"
                justify="space-around"
                alignItems="stretch">
                <Grid item xs={6} sm={6} md={6} lg={6} style={border}>
                    <p>סה"כ לתשלום</p>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} style={border}>
                    <p >{props.cart.cartPrice == null ? 0 : props.cart.cartPrice + props.deliveryPrice} &#8362;</p>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} style={border}>
                    <span><b>המחיר כולל מס.</b></span>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} style={border}>
                    <span>ימי העסקים כוללים את זמן הכנת המוצר.</span>
                </Grid>

            </Grid>
            <Divider />
            <div className="center">
                <button className="pay-button z-depth-5">המשך לתשלום</button>
            </div>

        </Grid>

    );
}

const EmptyBag = () => {
    return (
        <div>
            <h5>אין פריטים בסל</h5>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        items: state.cart,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const border = {
    // border: "2px solid red"
}

