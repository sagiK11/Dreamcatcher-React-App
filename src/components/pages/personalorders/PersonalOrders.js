import React, { Component } from "react";
import image from "../../../img/img_9.JPG"
import Footer from "../../layout/Footer"
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
                    <img src={image} alt="תמונה - לוכד חלומות" className="responsive-img circle" style={imgStyle} />
                </div>
                <div className="col s12 m6 l6 center">
                    <h1>הזמנות אישיות</h1>
                    <p></p>
                    <p className="flow-text">יש אפשרות לבצע הזמנות אישיות ולעצב ביחד איתי את לוכד החלומות והסטים הקסומים שתמיד חלמת עליהם</p>
                    <p className="flow-text"><b className="bold">ללא תוספת תשלום!</b></p>
                    <p className="flow-text">איך זה מתבצע?</p>
                    <p className="flow-text">יצרי איתי קשר באחד האמצעים הבאים - </p>

                    <ul >
                        <li><a href="https://www.facebook.com/לוכדי-החלומות-של-הילה-355862111817525" style={{ color: "#776464" }}><p>עמוד הפייסבוק</p></a></li>
                        <li><a href="https://www.instagram.com/dreamcatcher_by_hila/" style={{ color: "#776464" }} ><p>עמוד האינסטגרם</p></a></li>
                        <li><p>בטלפון 050-8829551</p></li>
                        <li><a href="mailto:hilash95@gmail.com" style={{ color: "#776464" }}><p>אימייל - hilash95@gmail.com</p></a></li>
                    </ul>
                    <p className="flow-text">וביחד ניצור את הלוכד המושלם בשבילך!</p>
                </div>
            </div>
        </div>
    );
}

const imgStyle = {
    marginTop: "20px",
    opacity: "0.9",
}
