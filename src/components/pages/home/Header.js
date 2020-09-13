import React from "react"
import { Animate } from "react-simple-animate";
import "./style.css"

const Header = () => {
    return (
        <div className="section-1">
            <div className="valign-wrapper center-align">
                <div className="row" >
                    <div className="col s12 m12 l12">
                        <Animate play={true} start={{ opacity: 0.1, transform: 'translate(0, -30px)' }} end={{ opacity: 1, transform: 'translate(0, 0)' }} duration={1.5}>
                            <h1 className="welcome-title up">ברוכים הבאים</h1>
                        </Animate>
                    </div>
                    <div className="col s12 m12 l12">
                        <Animate play delay={2} start={{ opacity: 0, transform: 'translate(80px, 0px)' }} end={{ opacity: 1, transform: 'translate(0, 0)' }} duration={1.5}>
                            <h1 className="welcome-title down">לעולם שכולו קסם</h1>
                        </Animate>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Header;
