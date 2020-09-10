import React from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import IconButton from '@material-ui/core/IconButton';



const Dreamcatcher = ({ dreamcatcher }) => {
    return (
        <div className="col s10 m10 l2" >
            <div className="center">
                <Card variant="outlined" >
                    <CardActionArea >
                        <img src={dreamcatcher.img} alt="לוכד חלומות" className="responsive-img" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className="center">
                                {dreamcatcher.model}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className="center">
                                {dreamcatcher.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <div className="row"  >
                        <div className="col s12 m5 l5" >
                            <IconButton style={moreInfoStyle} >
                                <div>
                                    מידע נוסף
                            </div>
                            </IconButton>
                        </div>
                        <div className="col s12 m5 l7" >
                            <IconButton style={addToCartSyle} >
                                <ShoppingBasketIcon style={{ color: "black", marginLeft: "0.5em" }} />
                                <div className="" >
                                    <span>  הוספה לסל</span>
                                </div>
                            </IconButton>
                            <div style={{ width: "100%" }}>
                            </div>
                        </div>

                    </div>
                </Card>
            </div>
        </div >

    );

}
const divStyle = {
    marginTop: "20px",
    paddingTop: "10px",
    width: "100%",
    maxWidth: "400px"
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

