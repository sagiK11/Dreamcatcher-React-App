import React, { Component } from "react";
import MainSection from "./MainSection"
import { Parallax } from "react-parallax"
import Img1 from "../../../img/img_5.JPG"
import Img2 from "../../../img/img_15.JPG"
import Footer from "../../layout/Footer"




class About extends Component {

    render() {
        return (
            <div className="">
                <Parallax bgImage={Img1} strength={600}>
                    <div style={{ height: 500, }}>
                    </div>
                </Parallax>

                <MainSection />
                <Parallax bgImage={Img2} strength={700}>
                    <div style={{ height: 500, }} className="responsive-img">
                    </div>
                </Parallax>
                <Footer />
            </div>
        );
    }

}

export default About;