import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        maxWidth: 385,
    },
    media: {
        height: 400,
    },
});

const Dreamcatcher = ({ dreamcatcher }) => {
    const classes = useStyles();
    return (
        <div style={{ padding: "0 1em 2em 1em" }}>
            <Card variant="outlined" >
                <CardActionArea >
                    <CardMedia className={classes.media}
                        image={dreamcatcher.img} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className="center">
                            {dreamcatcher.model}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="center">
                            {dreamcatcher.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Box display="flex" flexWrap="wrap" p={1} m={1} bgcolor="background.paper" justifyContent="center">
                    <Box>
                        <IconButton style={addToCartSyle} >
                            <ShoppingBasketIcon style={{ color: "black", marginLeft: "0.5em" }} />
                            <span>הוספה לסל</span>
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton style={moreInfoStyle} >
                            <span>מידע נוסף</span>
                        </IconButton>
                    </Box>
                </Box>
            </Card>
        </div>
    );

}
const addToCartSyle = {
    color: "black",
    borderRadius: "0em"
}

const moreInfoStyle = {
    color: "black",
    borderRadius: "0em",
}
export default Dreamcatcher;

