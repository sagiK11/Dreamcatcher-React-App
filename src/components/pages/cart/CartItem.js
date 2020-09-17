import Grid from '@material-ui/core/Grid';
import React from "react"
import "./style.css"


const CartItem = (props) => {
    const { item } = props;
    return (
        <Grid container className="card-item" wrap="wrap" direction="row">
            <Grid item xs={12} sm={12} md={5} lg={4} >
                <img src={item.img} className="card-img" alt="לוכד חלומות" />
            </Grid>
            <Grid item xs={10} sm={12} md={6} lg={7} className="card-col">
                <h6>{item.model}</h6>
                <h6> {props.price} &#8362;</h6>
                <span>כמות: {item.amount}</span>
            </Grid>
            <Grid item xs={2} sm={1} md={1} lg={1}  >
                <span onClick={() => props.remove(item)}>
                    <i className="material-icons remove-item">clear</i></span>

            </Grid>

        </Grid>
    );
}
export default CartItem