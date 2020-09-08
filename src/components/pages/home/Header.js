import React from "react"
import { Animate } from "react-simple-animate";


const Header = () => {
    return (
        <div className="section-1">
            <div className="valign-wrapper center-align" style={{ height: 400 }}>
                <div className="row" >
                    <Animate play start={{ opacity: 0, transform: 'translate(0, -70px)' }} end={{ opacity: 1, transform: 'translate(0, 0)' }} duration={1.5}>
                        <h1 className="welcome-title">ברוכים הבאים לעולם שכולו קסם</h1>
                    </Animate>
                </div>
            </div>
        </div>
    );
}

export default Header;
