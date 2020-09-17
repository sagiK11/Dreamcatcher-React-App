import React from "react"
import Dialog from "@material-ui/core/Dialog"
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import Typography from '@material-ui/core/Typography';


const options = ['עבור לסל שלי', 'חזור לקטלוג']

export default function AddDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    }

    const handleListItemClick = (value) => {
        onClose(value);
    }
    return (
        <Dialog onClose={handleClose} open={open} fullWidth>
            <Typography variant="h4" className="title">הפריט נוסף לסל!</Typography>
            <DialogItem dreamcatcher={props.dreamcatcher} amount={props.amount} />
            <Grid container className="buttons-layout" >
                <BottomButton page="/cart" option={options[0]}
                    func={handleListItemClick} css1="cart-link-text" css2="cart-link-button" />
                <BottomButton page="/shop" option={options[1]}
                    func={handleListItemClick} css1="shop-link-text" css2="shop-link-button" />
            </Grid>
        </Dialog>
    );
}

const DialogItem = ({ dreamcatcher, amount }) => {
    const price = parseInt(dreamcatcher.price);
    const totalPrice = price * amount;

    return (
        <div className="dialog-img">
            <Grid container className="card-item" direction="row" >
                <Grid item xs={12} sm={6} md={6} lg={6}  >
                    <img src={dreamcatcher.img} className="card-img" alt="לוכד חלומות" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} className="card-col" >
                    <h6>{dreamcatcher.model}</h6>
                    <h6> {totalPrice} &#8362;</h6>
                    <span>כמות: {amount} </span>
                </Grid>
            </Grid >
        </div >
    );
}

const BottomButton = (props) => {
    const { page, option, css1, css2, func } = props;
    return (
        <Grid item xs={12} sm={6} md={6} lg={6} className={css2}>
            <Link to={page}>
                <ListItem button key={option} onClick={() => func(option)} >
                    <ListItemText className={css1} primary={option} />
                </ListItem>
            </Link>
        </Grid>
    );

}
