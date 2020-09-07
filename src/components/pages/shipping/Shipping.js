import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Footer from "../home/Footer";
import Img2 from "../../../img/img_11.jpg"
import Img3 from "../../../img/img_12.jpg"



class Shipping extends Component {
    render() {
        return (
            <div>
                <Parallax bgImage={Img3} strength={450} style={upImgStyle} />
                <MainSection />
                <Parallax bgImage={Img3} strength={1200} style={bottomImgStyle} />
                <Footer />
            </div>
        );
    }

}

export default Shipping;

const MainSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l6">
                    <img src={Img2} alt="לוכדי חלומות - מארז" className="responsive-img" style={centerImgStyle} />
                </div>
                <div className="col s12 m12 l6" dir="rtl">
                    <Delivery />
                    <ReturnPolicy />
                </div>

            </div>

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
    borderBottomRightRadius: "50%",
    borderBottomLeftRadius: "50%",
    height: "400px",
}
const bottomImgStyle = {
    borderTopRightRadius: "50%",
    borderTopLeftRadius: "50%",
    height: "400px",
}
const centerImgStyle = {
    borderRadius: "50%",
    height: "700px",
    width: "1000px"
}