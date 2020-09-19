import React from 'react'
import { Parallax } from "react-parallax"
import image from "../../../img/img_2.JPG"

function SectionTwo() {
    return (
        <Parallax bgImage={image} strength={1200} style={{ height: 300 }} />
    )
}

export default SectionTwo
