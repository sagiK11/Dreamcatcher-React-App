import React, { Component } from "react";
import Img1 from "../../../img/img_1.JPG"


class MainSection extends Component {

    render() {
        return (
            <div className="">
                <div className="section container" >
                    <div className="col s12 m12 l12" >
                        <h1 className="center black-text" style={titleStyle}>קצת עליי</h1>

                        <div className="row">
                            <div className="col s12 m6 l6">
                                <img src={Img1} alt="" className="responsive-img circle" style={imgStyle} />
                            </div>
                            <div className="col s12 m6 l6 " dir="rtl">
                                <p className="flow-text black-text about-me-text " style={textStyle}>
                                    קוראים לי הילה, אני בת 25 וכל חיי נשמתי עיצוב ופריטים מעבודת יד.
                                    את לוכדי החלומות שלי התחלתי להכין לפני שלוש שנים כשהתחלתי ללמוד כלכלה וחשבונאות באונ' בן גוריון שבנגב.
                                    .תחילת הלימודים הייתה כרוכה במעבר לדירה שכורה בבאר שבע,
                                    היה לי חשוב להפוך את הדירה לאווירה ביתית ומלאה בוהו שייק, התקציב היה דל אז התחלתי להכין פריטים מעבודת יד.
                                    התאהבתי בהכנת לוכדי חלומות ובעקבות כך פתחתי את "לוכדי החלומות של הילה". אני מקווה שתאהבו את העיצובים ואשמח לעזור לכם לעצב את הדגם המושלם לחדר או לכל פינה בבית.
                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


const imgStyle = {
    marginTop: '60px',
    borderRadius: "10%",

}
const textStyle = {
    marginTop: "60px",
}

const titleStyle = {
    letterSpacing: "5px",
}

export default MainSection;