import React from 'react'
import Img3 from "../../../img/img_3.JPG"
import { Parallax } from "react-parallax"

function SectionFour() {
    return (
        <Parallax bgImage={Img3} strength={1000}>
            <div style={{ height: 500 }}>
            </div>
        </Parallax>
    );
}

export default SectionFour;

