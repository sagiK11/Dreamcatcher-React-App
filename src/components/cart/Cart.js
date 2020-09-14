import React, { Component } from "react"
import { connect } from "react-redux"
import "./style.css"
import Box from "@material-ui/core/Box"
import Grid from '@material-ui/core/Grid';
import { Divider } from "@material-ui/core";
import Dropdown from 'react-dropdown';
import Footer from "../layout/Footer"



class Cart extends Component {

    state = {
        cartPrice: 0,
    }

    componentDidMount() {
        const { items } = this.props.items;
        var cartPrice = 0;

        items.map((item) => {

            cartPrice += this.calItemsPrice(item);
        })
        this.setState({
            cartPrice,
        })

    }
    calItemsPrice(item) {
        const price = parseInt(item.price.slice(0, 3));
        const amount = item.amount;
        const totalPrice = price * amount;
        return totalPrice;

    }

    render() {
        const { items } = this.props.items;
        return (
            <div>
                <div className="container cart-zone" style={border}>
                    <Grid wrap="wrap" >
                        <Grid container spacing={1} wrap="wrap" align-content="flex-start">
                            <Grid item xs={12} md={8} lg={8} style={border} >
                                <h3>סל הקניות שלי</h3>
                                <Box style={{ display: "flex" }}>
                                    <Box flexDirection="row" flexWrap="wrap" className="items-box" justifyContent="flex-start">
                                        {items && items.map((item, i) => {
                                            const totalPrice = this.calItemsPrice(item);
                                            return <CartItem item={item} price={totalPrice} key={i} />
                                        })}
                                    </Box>

                                </Box>
                                <Grid>
                                    <Coupon />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={4} md={8} style={border}>
                                <OrderSummary />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>


        );
    }
}

const Coupon = () => {
    return (
        <Grid direction="col">
            <Grid item lg={12} style={border}>
                <a className="anchor">הזן קוד קופון</a>
            </Grid>
            <Grid item lg={12} style={border}>
                <a className="anchor">הוסיפי הערה</a>
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
            <Grid item lg={12}>
                <div className="center">
                    <h6>סיכום הזמנה</h6>
                </div>
            </Grid>
            <Divider />
            <Grid container spacing={1} direction="row" justify="space-around" alignItems="stretch" style={{ padding: "0 1em 0 1em" }}>
                <Grid item lg={6} style={border}>
                    <p >סיכום ביניים</p>
                </Grid>
                <Grid item lg={6} style={border}>
                    <p >300ש"ח</p>
                </Grid>
            </Grid>

            <Grid container spacing={1} container style={{ padding: "0 1em 0 1em" }}
                direction="row"
                justify="space-around"
                alignItems="stretch"  >
                <Grid item lg={6} style={border}>
                    <p>משלוח</p>
                </Grid>
                <Grid item lg={6} style={border}>
                    <p >40ש"ח</p>
                </Grid>
                <Grid item lg={12}>
                    <Dropdown options={deliveryOptions} onChange={props.func}
                        value={props.diamDefOption} placeholder="שיטת איסוף" />
                </Grid>

            </Grid>
            <Divider />
            <Grid container spacing={1} container style={{ padding: "0 1em 0 1em" }}
                direction="row"
                justify="space-around"
                alignItems="stretch">
                <Grid item lg={6} style={border}>
                    <p>סה"כ לתשלום</p>
                </Grid>
                <Grid item lg={6} style={border}>
                    <p >400ש"ח</p>
                </Grid>
                <Grid item lg={12} style={border}>
                    <span><b>המחיר כולל מס.</b></span>
                </Grid>
                <Grid item lg={12} style={border}>
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
    return {
        items: state.cart,
    }

}
const CartItem = (props) => {
    const { item } = props;
    return (
        <Box flexDirection="row" className="card-item" >
            <Box>
                <img src={item.img} className="card-img" alt="לוכד חלומות" />
            </Box>
            <Box className="card-col">
                <h6>{item.model}</h6>
                <h6>{item.amount}</h6>
                <h6> {props.price} ש"ח</h6>
            </Box>



        </Box>
    );
}
export default connect(mapStateToProps)(Cart);

const border = {
    border: "2px solid red"
}

