import React from 'react'
import Img3 from "../../../img/img_3.JPG"
import { Parallax } from "react-parallax"

function SectionFour() {
    return (
        <div className="section-4">
            <Parallax className="section-4" bgImage={Img3} strength={250} />
        </div>
    );
}


export default SectionFour;

