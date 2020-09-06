import React from 'react'
import { Parallax, Background } from "react-parallax"
import Img2 from "../../../img/img_2.JPG"

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

function SectionTwo() {
    return (
        <Parallax bgImage={Img2} strength={500}>
            <div style={{ height: 500 }}>

            </div>
        </Parallax>
    )
}

export default SectionTwo


// function SectionTwo() {
//     return (
//         <div className="parallax-container">
//             <div className="parallax">
//                 <img src={Img2} className="responsive-img" alt="תמונה" />
//             </div>
//         </div>
//     )
// }

// export default SectionTwo