import React from 'react'
import { Parallax } from "react-parallax"
import image from "../../../img/img_2.JPG"

function SectionTwo() {
    return (
        <Parallax className="section-2" strength={250} bgImage={image}
            renderLayer={percentage => (
                <div>
                    <h2 className="hide-on-med-and-down" style={{
                        position: 'absolute',
                        opacity: `${percentage * 100}`,
                        right: '2em',
                        bottom: '-5em',
                        color: "white",
                        textShadow: "2px 2px 2px black",
                        width: percentage * 900,
                        height: percentage * 600,
                    }} >כבר ביקרת בחנות?</h2>
                </ div>
            )}
        />
    )
}

export default SectionTwo
