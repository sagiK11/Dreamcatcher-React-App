import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import AddDreamcatcher from "./AddDreamcatcher"
import Coupon from "./Coupon"
import "./style.css"

const Console = (props) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)

    }
    return (
        <div>
            <AppBar position="static" >
                <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
                    <Tab className="tab" label="הוספת פריט" />
                    <Tab className="tab" label="יצירת קופון" />
                    <Tab className="tab" label="סטטיסטיקה" />
                    <Tab className="tab" label="מייל תפוצה" />

                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <AddDreamcatcher />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Coupon />
            </TabPanel>
        </div>
    );
}

export default Console
function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div role="tabpanel">
            {value === index && (
                <Box p={3}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };
