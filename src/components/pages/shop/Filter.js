import React, { Component } from 'react'
import Box from '@material-ui/core/Box';


class Filter extends Component {
    componentDidMount() {
        this.allCategories.focus();
    }

    render() {
        return (
            <div className="container">
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                    <Box>
                        <a ref={(input) => { this.allCategories = input }}
                            onClick={() => this.props.filter("all")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>כל הקטלוג</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("סט")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>סטים קסומים</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("לוכד חלומות")} href='#!' className="a-filter" >
                            <h6 style={{ paddingRight: "10px" }}>לוכדי חלומות</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("", "70")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>שבעים ס"מ קוטר</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("", "60")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>שישים ס"מ קוטר</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("", "50")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>חמישים ס"מ קוטר</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("", "40")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>ארבעים ס"מ קוטר</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("", "30")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>שלושים ס"מ קוטר</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("מחזיק מפתחות")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>מחזיק מפתחות לרכב</h6></a>
                    </Box>
                    <Box>
                        <a onClick={() => this.props.filter("מפיות")} href='#!' className="a-filter">
                            <h6 style={{ paddingRight: "10px" }}>מפיות סרוגות</h6></a>
                    </Box>
                </Box>
            </div >
        );
    }
}

export default Filter;