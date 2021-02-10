import React, { useState } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const data = [
  {
    id: uuid(),
    name: "Dropbox",
    imageUrl: process.env.PUBLIC_URL + "/images/products/product_1.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Medium Corporation",
    imageUrl: process.env.PUBLIC_URL + "/images/products/product_2.png",
    updatedAt: moment().subtract(2, "hours"),
  },
  {
    id: uuid(),
    name: "Slack",
    imageUrl: process.env.PUBLIC_URL + "/images/products/product_3.png",
    updatedAt: moment().subtract(3, "hours"),
  },
  {
    id: uuid(),
    name: "Lyft",
    imageUrl: process.env.PUBLIC_URL + "/images/products/product_4.png",
    updatedAt: moment().subtract(5, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: process.env.PUBLIC_URL + "/images/products/product_5.png",
    updatedAt: moment().subtract(9, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: process.env.PUBLIC_URL + "/images/products/product_5.png",
    updatedAt: moment().subtract(9, "hours"),
  },
  {
    id: uuid(),
    name: "GitHub",
    imageUrl: process.env.PUBLIC_URL + "/images/products/product_5.png",
    updatedAt: moment().subtract(9, "hours"),
  },
];

const useStyles = makeStyles({
  root: {
    height: 500,
  },
  image: {
    height: 48,
    width: 48,
  },
});

type BudgetPropsType = {
  className?: string;
};
const LatestProducts: React.FC<BudgetPropsType> = ({ className, ...rest }) => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {products.map(
          (product, i) =>
            i < 5 && (
              <ListItem divider={i < products.length - 1} key={product.id}>
                <ListItemAvatar>
                  <img
                    alt="Product"
                    className={classes.image}
                    src={product.imageUrl}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={product.name}
                  secondary={`Updated ${product.updatedAt.fromNow()}`}
                  style={{ marginLeft: 10 }}
                  primaryTypographyProps={{
                    style: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                  }}
                  secondaryTypographyProps={{
                    style: {
                      fontSize: 12,
                    },
                  }}
                />
                <IconButton edge="end" size="small">
                  <MoreVertIcon />
                </IconButton>
              </ListItem>
            )
        )}
      </List>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
          style={{ marginTop: 10 }}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

export default LatestProducts;
