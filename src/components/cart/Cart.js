import React, { Component } from "react"
import { connect } from "react-redux"
import "./style.css"
import Grid from '@material-ui/core/Grid';
import { Divider } from "@material-ui/core";
import Dropdown from 'react-dropdown';
import Footer from "../layout/Footer"
import { removeFromCart } from "../../store/actions/dreamActions"



class Cart extends Component {

    state = {
        deliveryPrice: 40,
    }

    handleDelivery = (event) => {
        this.setState({
            deliveryPrice: event.value === "משלוח עד לבית" ? 40 : 0
        })
    }

    componentDidMount() {
        const { items } = this.props.items;
        var cartPrice = 0;

        items.map((item) => {

            cartPrice += this.calItemsPrice(item);
        })
        this.setState({
            items,
            cartPrice,
        })

    }
    calItemsPrice(item) {
        const price = parseInt(item.price.slice(0, 3));
        const amount = item.amount;
        const totalPrice = price * amount;
        return totalPrice;

    }
    removeItem = (itemToRemove) => {
        this.props.removeFromCart(itemToRemove);
    }

    render() {
        const { items } = this.props.items;
        return (
            <div>
                <div className="container cart-zone" style={border}>
                    <Grid container wrap="wrap" >
                        <Grid container spacing={1} wrap="wrap" align-content="flex-start">
                            <Grid item xs={12} sm={8} md={8} lg={8} style={border} >
                                <Title />
                                <CartItems items={items} func={this.calItemsPrice} remove={this.removeItem} />
                                <Coupon />
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
                    return <CartItem item={item} price={totalPrice} func={props.remove} key={i} />
                })}
            </Grid>
        </Grid>

    );

}

const Title = () => {
    return (
        <Grid container style={border} className="my-basket-title">
            <Grid item xs={2} sm={2} md={2} lg={1} style={border} >
                <i className="material-icons cart-icon">shopping_basket</i>
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={11} style={border}>
                <h3 >סל הקניות שלי</h3>
            </Grid>
        </Grid>
    );
}

const Coupon = () => {
    return (
        <Grid >
            <Grid item lg={12} style={border}>
                <a className="anchor">הזן קוד קופון</a>
            </Grid>
            <Grid item lg={12} style={border}>
                <a className="anchor">הוסף הערה</a>
            </Grid>
        </Grid>
    );

}

const OrderSummary = (props) => {
    const deliveryOptions = [
        'משלוח עד לבית', 'איסוף מבית העסק'
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

            <Grid container spacing={1} container style={{ padding: "0 1em 0 1em" }}
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
            <Grid container spacing={1} container style={{ padding: "0 1em 0 1em" }}
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


const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.cart,
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item))
    }

}
const CartItem = (props) => {
    const { item } = props;
    return (
        <Grid container className="card-item" direction="row">
            <Grid item xs={7} sm={5} md={5} lg={4} style={border}>
                <img src={item.img} className="card-img" alt="לוכד חלומות" />
            </Grid>
            <Grid item xs={4} sm={6} md={6} lg={7} className="card-col" style={border}>
                <h6>{item.model}</h6>
                <h6>{item.amount}</h6>
                <h6> {props.price} &#8362;</h6>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} style={border} >
                <a onClick={() => props.func(item)}><i className="material-icons remove-item">clear</i></a>
            </Grid>

        </Grid>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const border = {
    // border: "2px solid red"
}

