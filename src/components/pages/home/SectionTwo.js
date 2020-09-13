import React from 'react'
import { Parallax } from "react-parallax"
import Img2 from "../../../img/img_2.JPG"

function SectionTwo() {
    return (
        <Parallax bgImage={Img2} strength={1200} style={{ height: 300 }} />
    )
}

export default SectionTwo
