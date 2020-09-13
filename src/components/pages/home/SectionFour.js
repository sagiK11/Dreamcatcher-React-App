import React from 'react'
import Img3 from "../../../img/img_3.JPG"
import { Parallax } from "react-parallax"

function SectionFour() {
    return (
        <Parallax bgImage={Img3} strength={800} style={{ height: 300 }} />
    );
}

export default SectionFour;

