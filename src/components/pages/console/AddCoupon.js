import React, { Component } from "react"
import { connect } from "react-redux"
import { Grid, Typography, Button, TextField, makeStyles } from "@material-ui/core/"
import Dropdown from 'react-dropdown';
import { Divider } from "@material-ui/core";
import { addCoupon } from "../../../store/actions/couponActions"
import { updateCoupon } from "../../../store/actions/couponActions"
import { deleteCoupon } from "../../../store/actions/couponActions"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"


const useStyles = makeStyles({
    button: {
        color: "black",
        backgroundColor: "#ccada4",
        margin: "1em",
    },
});



class AddCoupon extends Component {
    state = {
        name: "",
        discount: 0,
    }
    handleChange = (event) => {
        const val = event.target.value;
        console.log(event);
        console.log(val);
        if (isNaN(val)) {
            this.setState({
                name: val,
            })
        } else {
            this.setState({
                discount: val,
            })
        }
    }
    handleSelect = (value) => {
        console.log(value)

        this.setState({
            name: value.value,
        })
    }
    handleSubmit = (event) => {
        this.props.addCoupon(this.state);
    }
    handleUpdate = (event) => {
        this.props.updateCoupon(this.state);
    }
    handleDelete = (event) => {
        this.props.deleteCoupon(this.state);
    }

    render() {
        return (
            <Grid container className="coupon-page border">
                <Typography className="c-title">יצירת קופון חדש</Typography>
                <AddNewCoupon submit={this.handleSubmit} handle={this.handleChange} />
                <LabelDivier />
                <Typography className="c-title">ניהול קופונים קיימים</Typography>
                <ManageCoupons submit={this.handleUpdate}
                    coupons={this.props.coupons} handle={this.handleSelect}
                    change={this.handleChange} delete={this.handleDelete} />
                <LabelDivier />

            </Grid>
        );
    }
}
const LabelDivier = (props) => {
    return (
        <Grid container className="border">
            <Divider className="c-divider" />
        </Grid>
    );
}
const AddNewCoupon = (props) => {
    const classes = useStyles();

    return (
        <Grid container direction="row" className="coupon-page border" >
            <Grid item xs={12} sm={12} md={3} lg={3} className="border">
                <TextField
                    label="קוד קופון"
                    id="coupon-name"
                    onChange={props.handle}
                    variant="outlined"
                    color="secondary"
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className="border">
                <TextField
                    label="אחוזי הנחה"
                    id="coupon-discount1"
                    onChange={props.handle}
                    variant="outlined"
                    color="secondary"
                    multiline
                />

            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className="border">
                <Button className={classes.button} variant="outlined" onClick={props.submit} disableElevation>הוסף קופון</Button>
            </Grid>
        </Grid>
    );
}

const ManageCoupons = (props) => {
    const { coupons } = props;
    const couponsList = coupons && coupons.map((item) => item.name)
    const classes = useStyles();


    return (
        <Grid container direction="row" className="coupon-page border" justify="flex-start">
            <Grid item xs={12} sm={12} md={3} lg={3} className="border">
                <div className="input-field input-fd border" >
                    <Dropdown options={couponsList} onChange={props.handle}
                        placeholder="בחר קופון" />
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className="border" >
                <TextField
                    label="אחוזי הנחה"
                    id="coupon-discount2"
                    onChange={props.change}
                    variant="outlined"
                    color="secondary"
                    multiline
                />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className="border">
                <Button className={classes.button} variant="outlined" onClick={props.submit} disableElevation>עדכן קופון</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className="border">
                <Button className={classes.button} variant="outlined" onClick={props.delete} disableElevation>מחק קופון</Button>
            </Grid>
        </Grid >
    );
}
const mapStateToProps = (state) => {
    return {
        coupons: state.firestore.ordered.coupons,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCoupon: (coupon) => dispatch(addCoupon(coupon)),
        updateCoupon: (coupon) => dispatch(updateCoupon(coupon)),
        deleteCoupon: (coupon) => dispatch(deleteCoupon(coupon)),
    };
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{ collection: 'coupons' }]))(AddCoupon)