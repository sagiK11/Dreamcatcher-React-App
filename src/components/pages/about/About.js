import React, { Component } from "react";
import MainSection from "./MainSection";
import { Parallax } from "react-parallax";
import Img1 from "../../../img/img_5.JPG";
import Img2 from "../../../img/img_15.JPG";
import Footer from "../../layout/Footer";

class About extends Component {
  render() {
    return (
      <div className="">
        <Parallax strength={600} className="top-img" bgImage={Img1} />
        <MainSection />
        <Parallax strength={400} className="bottom-img" bgImage={Img2} />
        <Footer />
      </div>
    );
  }
}
export default About;
