import React from 'react'
import Box from "@material-ui/core/Box"
import "./footerStyle.css"
import Logo from './Logo'

function Footer() {
    return (
        <footer className="page-footer dream-edges">
            <div>
                <Box display="flex" flexWrap="wrap" flexDirection="row" justifyContent="center">
                    <Box>
                        <div style={{ padding: "1em  2em 2em 5em" }}>
                            <Logo />
                        </div>
                    </Box>
                    <Box >
                        <div style={{ padding: "0  2em 2em 5em" }}>
                            <a href="/"><div >
                                <p className="description">לוכדי החלומות של הילה</p>
                                <p className="description">יצירת לוכדי חלומות בעבודת יד לעיצוב הבית</p>
                            </div></a>
                        </div>
                    </Box>
                    <Box>
                        <div dir="ltr" style={{ padding: "0  2em 0em 5em" }}>
                            <p ><a href="mailto:hilash95@gmail.com" className="media">hilash95@gmail.com</a></p>
                            <p className="black-text">050-8829551</p>
                        </div>

                    </Box>
                    <Box >
                        <div dir="ltr" style={{ padding: "0  2em 2em 0em", }}>
                            <p ><a href="https://www.facebook.com/לוכדי-החלומות-של-הילה-355862111817525" className="media">facebook</a></p>
                            <p><a href="https://www.instagram.com/dreamcatcher_by_hila/" className="media" >instagram</a></p>
                        </div>
                    </Box>
                </Box>
            </div>

            <div className="footer-copyright" dir="ltr">
                <div className="container center-align  black-text copy-right">
                    &copy; 2020 Dreamcatcher by Hila
                </div>
            </div>
        </footer>
    )
}

export default Footer


