import React, { Component } from "react";
import Img1 from "../../../img/img_9.JPG"
import Footer from "../home/Footer"

class PersonalOrders extends Component {
    render() {
        return (
            <div>
                <MainSection />
                <Footer />
            </div>
        );
    }

}

export default PersonalOrders;


const MainSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6 l6">
                    <img src={Img1} alt="תמונה - לוכד חלומות" className="responsive-img" style={imgStyle} />
                </div>
                <div className="col s12 m6 l6 center" dir="rtl" style={colStyle}>
                    <h1>הזמנות אישיות</h1>
                    <p className="flow-text">יש אפשרות לבצע הזמנות אישיות ולעצב ביחד איתי את לוכד החלומות והסטים הקסומים שתמיד חלמת עליו.</p>
                    <p className="flow-text">ניתן ליצור קשר באמצעות:</p>
                    <ul className="flow-text">
                        <li><p>עמוד הפייסבוק</p></li>
                        <li><p>עמוד האינסטגרם</p></li>
                        <li><p>בטלפון 050-8829551</p></li>
                        <li><p>אימייל - hilash95@gmail.com</p></li>
                        <li style={iconStyle}>
                            <div className="row">
                                <div className="col s6 m6 l4 offset-l2">
                                    <a href="https://www.facebook.com/לוכדי-החלומות-של-הילה-355862111817525"
                                        className="tooltipped btn-floating btn-small pink lighten-3"
                                        data-tooltip="Facebook">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </div>
                                <div className="col s6 m6 l4">
                                    <a href="https://www.instagram.com/dreamcatcher_by_hila/"
                                        className="tooltipped btn-floating btn-small pink lighten-3"
                                        data-tooltip="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

const imgStyle = {
    marginTop: "20px",
    opacity: "0.9",
    borderRadius: "60%",
}
const iconStyle = {
    marginTop: "20px",
}
const colStyle = {
    marginTop: "90px",
}
