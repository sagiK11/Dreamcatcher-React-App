import React from 'react'
import Img2 from "../../../img/h_2.jpg"
import Img3 from "../../../img/h_3.jpg"
import Img4 from "../../../img/h_4.jpg"
import Img5 from "../../../img/h_5.jpg"
import Img6 from "../../../img/h_6.jpg"
import Img7 from "../../../img/h_7.jpg"
import Img8 from "../../../img/h_8.jpg"
import Img9 from "../../../img/h_9.jpg"



function SectionFive() {
    return (
        <div className="center">
            <h2>אצלכן בבית</h2>

            <div className="row">
                <div className="col s12 m3 l3 ">
                    <img src={Img7} alt="תמונה" className="responsive-img" />
                </div>
                <div className="col s12 m3 l3">
                    <img src={Img2} alt="תמונה" className="responsive-img" />
                </div>
                <div className="col s12 m3 l3">
                    <img src={Img3} alt="תמונה" className="responsive-img" />

                </div>
                <div className="col s12 m3 l3">
                    <img src={Img4} alt="תמונה" className="responsive-img" />

                </div>
                <div className="col s12 m3 l3">
                    <img src={Img5} alt="תמונה" className="responsive-img" />

                </div>
                <div className="col s12 m3 l3">
                    <img src={Img6} alt="תמונה" className="responsive-img" />

                </div>
                <div className="col s12 m3 l3">
                    <img src={Img9} alt="תמונה" className="responsive-img" />

                </div>
                <div className="col s12 m3 l3">
                    <img src={Img8} alt="תמונה" className="responsive-img" />

                </div>
            </div>
        </div>
    )
}

export default SectionFive;
