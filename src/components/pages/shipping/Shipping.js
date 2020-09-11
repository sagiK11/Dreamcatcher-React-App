import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Footer from "../../layout/Footer";
import centerImg from "../../../img/img_11.jpg"
import edgesImg from "../../../img/img_12.JPG"
import Box from '@material-ui/core/Box';




class Shipping extends Component {
    render() {
        return (
            <div>
                <Parallax bgImage={edgesImg} strength={600} style={upImgStyle} imgAlt="מארז" />
                <MainSection />
                <Parallax bgImage={edgesImg} strength={600} style={bottomImgStyle} imgAlt="מארז" />
                <Footer />
            </div>
        );
    }

}

export default Shipping;

const MainSection = () => {
    return (
        <div className="center">
            <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" justifyContent="center">
                <Box justifyContent="flex-start">
                    <Delivery />
                    <ReturnPolicy />
                </Box>
                <Box justifyContent="flex-start" className="hide-on-med-and-down">
                    <img src={centerImg} alt="לוכדי חלומות - מארז" className="responsive-img circle" style={centerImgStyle} />
                </Box>

            </Box>



        </div>
    );
}

const Delivery = () => {
    return (
        <div className="" dir="rtl">
            <h4>משלוחים</h4>
            <ShipToHome />
            <CollectFromShop />
        </div>
    );

}

const ShipToHome = () => {
    return (
        <div>
            <h6 style={boldStyle}>משלוח עד לבית - לכל חלקי הארץ פרט לאזור הערבה ואילת.</h6>
            <p>זמן אספקה 1-8 ימי עסקים.</p>
            <p>זמן אספקה כולל בתוכו את זמן ההכנה של המוצר + זמן משלוח.</p>
            <p>תוספת תשלום - 35 ש"ח</p>
        </div>
    );

}

const CollectFromShop = () => {
    return (
        <div>
            <h6 style={boldStyle}>איסוף - מהוד השרון, בתיאום מראש - 050-8829551</h6>
            <p>סכום דמי המשלוח ע"פ בחירתך יופיעו בתום תהליך ההזמנה וייגבה בעת ביצוע התשלום עבורה.</p>
        </div>
    );
}

const ReturnPolicy = () => {
    return (
        <div>
            <h4>מדיניות החזרות</h4>
            <p>ניתן להחזיר ולקבל זיכוי/החזר כספי עפ"י החוק* בהחזרת המוצר\ים תוך שני ימי עסקים לבית העסק בהוד השרון - בתיאום מראש.</p>
            <p>*החזר כספי - ניכוי של 5% משווי הפריט או בניכוי של 100 ש"ח הזול מביניהם.</p>
            <p>*זיכוי - יש להחזיר את המוצר לבית העסק בהוד השרון בתיאום מראש ולאחר מכן, יישלח לך במייל זיכוי בצורת קופון לרכישה באתר.</p>
            <p>*מוצר שנקנה במבצע לא ניתן לקבל עליו החזר כספי.</p>
            <p>*מוצרים אשר הוזמנו בהזמנה אישית - לא ניתן לקבל זיכוי/החזר כספי.</p>
        </div>
    );

}

const boldStyle = {
    fontWeight: "bold",
}
const upImgStyle = {
    height: "33em",
}
const bottomImgStyle = {
    height: "30em",
}
const centerImgStyle = {
    margin: "2em 3em 0em 0em",
    height: "30em",
    width: "40em"
}