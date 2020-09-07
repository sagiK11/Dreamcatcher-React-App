import React from 'react'
import { Parallax } from "react-parallax"
import Img2 from "../../../img/img_2.JPG"

function SectionTwo() {
    return (
        <Parallax bgImage={Img2} strength={500}>
            <div style={{ height: 500 }}>

            </div>
        </Parallax>
    )
}

export default SectionTwo
