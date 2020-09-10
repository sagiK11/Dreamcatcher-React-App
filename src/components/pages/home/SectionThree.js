import React from 'react'
import Box from '@material-ui/core/Box';


function SectionThree() {
    return (
        <div className="center">
            <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" justifyContent="center">
                <Box justifyContent="flex-start">
                    <h3 className="black-text text-darken-4" >רוצה לשמוע על מבצעים סודיים?</h3>
                    <h4>הצטרפי עכשיו למועדון החברות!</h4>
                </Box>
                <Box justifyContent="flex-end">
                    <h5>איך נרשמים?</h5>
                    <p className="flow-text">
                        מאד פשוט! היכנסי לדף ההרשמה <span><a href="/signup">כאן </a></span>
                        ותהיי מבין הראשונות ששומעות על מבצעים והגרלות! </p>
                </Box>
            </Box>

        </div>
    )
}


export default SectionThree;

