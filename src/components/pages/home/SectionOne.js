import React from 'react'
import Img1 from "../../../img/img_1.JPG"
import Img4 from "../../../img/img_4.jpg"


function SectionOne() {
    return (
        <div>
            <section className="section-2  section">
                <div className="row ">
                    <div className="col s12 l3">
                        <img src={Img1} alt="תמונה" className="responsive-img" style={imgStyle} />
                    </div>
                    <div className="col s12 l6" >
                        <Text />
                    </div>
                    <div className="col s12 l3">
                        <img src={Img4} alt="תמונה" className="responsive-img" style={imgStyle} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionOne

const imgStyle = {
    borderRadius: "5%",
}

const Text = () => {
    return (

        <p className=" black-text text-darken-4 flow-text" dir="rtl">
            ברוכים הבאים לעולם קסום של לוכדי חלומות בעבודת יד. כאן תוכלו למצוא ולהתרשם ממבחר דגמים של לוכדי חלומות מכל הסוגים.  בחנות אשר נמצאת  <a href="/shop">כאן</a> באתר ישנו מגוון
            רחב של דגמי לוכדי חלומות. אם תמיד חלמת על סט קסום של לוכדי חלומות מעל המיטה תוכלי לבחור ממגוון רחב של דגמים ואם עדין לא תמצאי תמיד ניתן לפנות אלי ונעצב ביחד איתך את הסגנון שמתאים לך.
            מעבר לסטים הקסומים, קיימים עשרות דגמים של לוכדי חלומות ואם לא תמצאי עדין את הלוכד שמוצא חן בעיניך תמיד אפשר לעצב ביחד איתי.
        </p>
    );
}
