import React from 'react'

function Footer() {
    return (
        <footer className="page-footer dream-edges">
            <div className="container">
                <div className="row">

                    <div className="col s7 l7 black-text " dir="rtl">
                        <h4>צרי קשר</h4>
                        <p>050-8829551</p>
                        <p>hilash95@gmail.com</p>
                        <p>ישראל</p>
                        <div className="row">
                            <div className="col s9 l1 offset-l10">
                                <a href="https://www.instagram.com/dreamcatcher_by_hila/"
                                    className="tooltipped btn-floating btn-small pink lighten-3"
                                    data-tooltip="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>

                            <div className="col s3 l1">
                                <a href="https://www.facebook.com/לוכדי-החלומות-של-הילה-355862111817525"
                                    className="tooltipped btn-floating btn-small pink lighten-3"
                                    data-tooltip="Instagram">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container center-align  black-text">
                    &copy; 2020 Dream Catcher by Hila
                </div>
            </div>
        </footer>
    )
}

export default Footer
