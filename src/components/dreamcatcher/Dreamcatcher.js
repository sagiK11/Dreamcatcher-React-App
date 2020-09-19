import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import "./style.css"

const Dreamcatcher = (props) => {
    const { dreamcatcher } = props;

    return (
        <div style={{ padding: "0 1em 2em 1em", }}>
            <Card variant="outlined">
                <CardActionArea >
                    <CardMedia style={{ height: "400px", maxWidth: "385px" }}
                        image={dreamcatcher.img} />
                    <CardContent  >
                        <Typography gutterBottom variant="h5" component="h2" className="center">
                            {dreamcatcher.model}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="center">
                            {dreamcatcher.price} &#8362;
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Box className="buttons" display="flex" flexWrap="wrap" bgcolor="background.paper" justifyContent="center">
                    <Box >
                        <div className="card-button">
                            <Icon className="icon">shopping_basket_icon</Icon>
                            <span className="button-text">הוספה לסל </span>
                        </div>
                    </Box>
                </Box>
            </Card>
        </div >
    );

}
export default Dreamcatcher;
