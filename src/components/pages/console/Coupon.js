import React, { Component } from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Dropdown from 'react-dropdown';
import { Divider } from "@material-ui/core";
import { addCoupon } from "../../../store/actions/couponActions"
import { updateCoupon } from "../../../store/actions/couponActions"
import { deleteCoupon } from "../../../store/actions/couponActions"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import TextField from '@material-ui/core/TextField';





class Coupon extends Component {
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
                <div className="input-field" id="submit-button">
                    <button onClick={props.submit} className="c-button border">הוסף קופון</button>
                </div>

            </Grid>
        </Grid>
    );
}

const ManageCoupons = (props) => {
    const { coupons } = props;
    const couponsList = coupons && coupons.map((item) => item.name)

    return (
        <Grid container direction="row" className="coupon-page border" justify="flex-start">
            <Grid item xs={12} sm={12} md={3} lg={3} className="border">
                <div className="input-field input-fd border" >
                    <Dropdown options={couponsList} onChange={props.handle}
                        placeholder="בחר קופון מהרשימה" />
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
                <div className="input-field border" id="submit-button">
                    <button onClick={props.submit} className="c-button">עדכן קופון</button>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} className="border">
                <div className="input-field border" id="submit-button">
                    <button onClick={props.delete} className="c-button border">מחק קופון</button>
                </div>
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
    firestoreConnect([{ collection: 'coupons' }]))(Coupon)