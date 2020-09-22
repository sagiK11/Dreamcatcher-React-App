import React from "react";
import Img3 from "../../../img/img_3.JPG";
import { Parallax } from "react-parallax";

function SectionFour() {
  const strengthFactor = 4;
  let strength = window.innerWidth / strengthFactor;
  return <Parallax className="section-4" bgImage={Img3} strength={strength} />;
}

export default SectionFour;
