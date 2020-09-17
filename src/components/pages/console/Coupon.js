import React from "react"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Dropdown from 'react-dropdown';



const Coupon = (props) => {
    const handleChange = (event) => {
        console.log("handlechange")
    }


    return (
        <Grid container direction="col" className="coupon-page">
            <Typography>יצירת קופון חדש</Typography>
            <AddNewCoupon handle={handleChange} />
            <Typography>ניהול קופונים קיימים</Typography>
            <ManageCoupons handle={handleChange} />
        </Grid>
    );
}

const AddNewCoupon = (props) => {
    return (
        <Grid container direction="row" className="coupon-page">
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <label htmlFor="model" className="c-label" >שם הקופון</label>
                <div className="input-field input-fd" >
                    <input id="coupon-name" onChange={props.handle}></input>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <label htmlFor="model" className="c-label" >אחוזי הנחה</label>
                <div className="input-field input-fd" >
                    <input id="coupon-discount" onChange={props.handle}></input>
                </div>

            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <div className="input-field" id="submit-button">
                    <button className="c-button">הוסף קופון</button>
                </div>

            </Grid>
        </Grid>
    );
}

const ManageCoupons = (props) => {
    const categoryOptions = ['coupon1', 'coupon2', 'coupon3']
    return (
        <Grid container direction="row" className="coupon-page">
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <div className="input-field input-fd" >
                    <Dropdown options={categoryOptions} onChange={props.handle}
                        placeholder="בחר קופון מהרשימה" />
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <label htmlFor="model" className="c-label" >אחוזי הנחה</label>
                <div className="input-field input-fd" >
                    <input id="coupon-discount" onChange={props.handle}></input>
                </div>

            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <div className="input-field" id="submit-button">
                    <button className="c-button">עדכן קופון</button>
                </div>
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <div className="input-field" id="submit-button">
                    <button className="c-button">מחק קופון</button>
                </div>
            </Grid>
        </Grid >
    );
}
const mapStateToProps = (state) => {
    return {
        coupon: state.cart,
    }
}

export default connect(mapStateToProps)(Coupon);