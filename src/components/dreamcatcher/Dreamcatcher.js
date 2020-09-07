import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const Dreamcatcher = ({ dreamcatcher }) => {
    return (
        <div className="col s12 m6 l4" style={divStyle} dir="rtl">
            <Card raised="true">
                <CardActionArea>
                    <CardMedia
                        component={"img"}
                        alt="לוכד חלומות"
                        image={dreamcatcher.img}
                        title="לוכד חלומות"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {dreamcatcher.model}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {dreamcatcher.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="secondary" >
                        הוסיפי לסל
                    </Button>
                    <Button color="primary">
                        מידע נוסף
                    </Button>
                </CardActions>
            </Card>
        </div>

    );

}
const divStyle = {
    margin: "20px",
    padding: "10px",
}
export default Dreamcatcher;

