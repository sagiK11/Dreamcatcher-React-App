import React from 'react'
import Img1 from "../../../img/img_1.JPG"
import Img4 from "../../../img/img_4.jpg"


function SectionOne() {
    return (
        <div>
            <section className="section-2  section">
                <div className="row ">
                    <div className="col s12 l3">
                        <img src={Img1} alt="תמונה" className="responsive-img" />
                    </div>
                    <div className="col s12 l6" >
                        <p className=" black-text text-darken-4 flow-text" dir="rtl">היי,
                        קוראים לי הילה, אני בת 24 וכל חיי נשמתי עיצוב ופריטים שהם מעבודת יד.
                        את לוכדי החלומות שלי התחלתי להכין לפני כשלוש שנים כשהתחלתי ללמוד כלכלה וחשבונאות באוניברסטית בן גוריון.
                        עברתי לגור בדירה בבאר שבע והיה לי חשוב להפוך את הדירה לאווירה ביתית ומלאה בוהו שייק, התקציב היה דל אז התחלתי להכין מלא פרטים בעבודת יד.
                        התאהבתי בהכנת לוכדי חלומות ובעקבות כך פתחתי את "לוכדי החלומות הילה" מקווה שתאהבו את העיצובים.
                        אשמח לעזור לכם לעצב את הדגם המושלם לחדר או לכל פינה בבית
                        פנויה לשאלות בעמוד האינסטגרם או הפייסבוק
                        ובפלאפון - 050-8829551.
                        לוכדי החלומות של הילה - dreamcatcherbyhila
                        </p>
                    </div>
                    <div className="col s12 l3">
                        <img src={Img4} alt="תמונה" className="responsive-img" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionOne
