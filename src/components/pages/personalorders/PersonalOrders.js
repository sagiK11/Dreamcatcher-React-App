import React, { Component } from "react";
import image from "../../../img/img_9.JPG"
import Footer from "../../layout/Footer"
import { Animate } from "react-simple-animate";
import Box from "@material-ui/core/Box"

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
        <div className="center">

            <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" justifyContent="center">
                <Box >
                    <div>
                        <h1>הזמנות אישיות</h1>
                        <p className="flow-text">יש אפשרות לבצע הזמנות אישיות</p>
                        <p>ולעצב ביחד איתי את לוכד החלומות והסטים הקסומים שתמיד חלמת עליהם</p>
                        <p className="flow-text"><b className="bold">ללא תוספת תשלום!</b></p>
                        <p className="flow-text">איך זה מתבצע?</p>
                        <p className="flow-text">יצרי איתי קשר באחד האמצעים הבאים - </p>
                        <div className="right-align">
                            <ul>
                                <li><a href="https://www.facebook.com/לוכדי-החלומות-של-הילה-355862111817525" style={{ color: "#776464" }}><p>עמוד הפייסבוק</p></a></li>
                                <li><a href="https://www.instagram.com/dreamcatcher_by_hila/" style={{ color: "#776464" }} ><p>עמוד האינסטגרם</p></a></li>
                                <li><p>בטלפון 050-8829551</p></li>
                                <li><a href="mailto:hilash95@gmail.com" style={{ color: "#776464" }}><p>אימייל - hilash95@gmail.com</p></a></li>
                            </ul>
                        </div>
                        <p className="flow-text">וביחד ניצור את הלוכד המושלם בשבילך!</p>
                    </div>

                </Box>
                <Animate easeType="ease" play start={{ transform: 'translate(40em, 0)' }} end={{ transform: 'translate(0, 0)' }} duration={2}>
                    <Box justifyContent="flex-start" className="hide-on-med-and-down">
                        <img src={image} alt="תמונה - לוכד חלומות" className="responsive-img circle" style={imgStyle} />
                    </Box>
                </Animate>
            </Box>
        </div>

    );
}

const imgStyle = {
    marginRight: "3em",
    marginTop: "3em",
    opacity: "0.9",
    height: "40em",
    width: "40em"
}

