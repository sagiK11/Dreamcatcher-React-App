import React from "react";

import Icon from "@material-ui/core/Icon";
import "./style.css";
import { Container, makeStyles } from "@material-ui/core";
import OnSaleBadge from "../../img/sale_badge.svg";
import OutOfStockBadge from "../../img/out_of_stock_badge.svg";
import NewBadge from "../../img/new_badge.png";
import EmptyBadge from "../../img/empty_badge.svg";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
  Box,
} from "@material-ui/core";

const Dreamcatcher = (props) => {
  const { dreamcatcher } = props;
  const classes = useStyles();

  return (
    <Container className={classes.cardContainer}>
      <Badges dreamcatcher={dreamcatcher} />

      <Card variant="outlined" className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.img} image={dreamcatcher.img} />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="center"
            >
              {dreamcatcher.model}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className="center"
            >
              {dreamcatcher.price} &#8362;
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box
          className="buttons"
          display="flex"
          flexWrap="wrap"
          bgcolor="background.paper"
          justifyContent="center"
        >
          <Box>
            <div className="card-button">
              <Icon className="icon">shopping_basket_icon</Icon>
              <span className="button-text">הוספה לסל </span>
            </div>
          </Box>
        </Box>
      </Card>
    </Container>
  );
};
export default Dreamcatcher;

const Badges = ({ dreamcatcher }) => {
  const isOutOfStock = Number(dreamcatcher.amount) === 0;
  const isOnSale = dreamcatcher.isOnSale && !isOutOfStock;
  const isNew = dreamcatcher.isNew;
  const classes = useStyles();
  const outOfStock = isOutOfStock ? <OutOfStockRibbon /> : null;
  const cornerBadge = isNew ? (
    <ItemBadge newItem />
  ) : isOnSale ? (
    <ItemBadge onSale />
  ) : (
    <NoBadge />
  );
  return (
    <Container className={classes.container}>
      {cornerBadge}
      <div className="center">{outOfStock}</div>
    </Container>
  );
};

const ItemBadge = ({ onSale = false }) => {
  const classes = useStyles();
  return (
    <img
      src={onSale ? OnSaleBadge : NewBadge}
      alt="תו"
      className={classes.badge}
    />
  );
};

const NoBadge = () => {
  const classes = useStyles();
  return <img src={EmptyBadge} alt="תו" className={classes.badge} />;
};

const OutOfStockRibbon = () => {
  const classes = useStyles();
  return (
    <img src={OutOfStockBadge} alt="חסר במלאי" className={classes.ribbon} />
  );
};

const useStyles = makeStyles({
  cardContainer: {
    padding: "0em 1em 2em 1em",
  },
  card: {
    borderRadius: "1em 1em 1.1em 1.1em",
  },
  img: {
    height: "25em",
    maxWidth: "24em",
  },
  badge: {
    position: "relative",
    top: "1.8em",
    right: "1.2em",
    zIndex: "1",
    width: "3.5em",
    height: "3.45em",
  },
  ribbon: {
    position: "relative",
    top: "19.75em",
    width: "5em",
    transform: "scale(2,2)",
    zIndex: "1",
  },
  container: {
    margin: "0",
    padding: "0",
    height: "3.125em",
  },
});
