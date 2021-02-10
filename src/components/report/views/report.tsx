import React, { useState } from "react";
import clsx from "clsx";
import moment from "moment";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import {
  Box,
  Grid,
  Card,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Pagination from "@material-ui/lab/Pagination";

const data = [
  {
    id: uuid(),
    orderNo: 1,
    date: new Date(),
    name: "Daisy",
    color: "Purple",
    size: "38",
    channel: "Shopee",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 2,
    date: new Date(),
    name: "Daisy",
    color: "Purple",
    size: "38",
    channel: "Shopee",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 3,
    date: new Date(),
    name: "Smock",
    color: "Pink",
    size: "38",
    channel: "Facebook",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 4,
    date: new Date(),
    name: "Daisy",
    color: "Purple",
    size: "38",
    channel: "Shopee",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 5,
    date: new Date(),
    name: "Daisy",
    color: "Pink",
    size: "38",
    channel: "Facebook",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 6,
    date: new Date(),
    name: "Daisy",
    color: "Black",
    size: "38",
    channel: "Facebook",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 1,
    date: new Date(),
    name: "Smock",
    color: "Beige",
    size: "38",
    channel: "Shopee",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 2,
    date: new Date(),
    name: "Smock",
    color: "Purple",
    size: "38",
    channel: "Shopee",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 3,
    date: new Date(),
    name: "Daisy",
    color: "Pink",
    size: "38",
    channel: "Shopee",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 4,
    date: new Date(),
    name: "Daisy",
    color: "Purple",
    size: "38",
    channel: "Shopee",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 5,
    date: new Date(),
    name: "Daisy",
    color: "Beige",
    size: "38",
    channel: "Facebook",
    quantity: 1,
    cost: 60,
  },
  {
    id: uuid(),
    orderNo: 6,
    date: new Date(),
    name: "Daisy",
    color: "Purple",
    size: "38",
    channel: "Shopee",
    quantity: 1,
    cost: 60,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: "67vh",
  },
  actions: {
    justifyContent: "flex-end",
  },
  div: {},
  box: {},
  title: {
    marginBottom: 20,
  },
  tableHead: {
    background: theme.palette.primary.light,
    color: "white",
  },
  rootPagination: {
    "& > *": {
      marginTop: 30,
    },
  },
  iconDirectionDesc: {
    color: "white !important",
  },
  iconDirectionAsc: {
    color: "white !important",
  },
  shopee: {
    color: "#ff5722",
    fontWeight: "bold",
  },
  facebook: {
    color: "#2962ff",
    fontWeight: "bold",
  },
}));

type BudgetPropsType = {
  className?: string;
};
const LatestOrders: React.FC<BudgetPropsType> = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  const path = process.env.PUBLIC_URL;

  const getColor = (color: string) => {
    switch (color) {
      case "Purple":
        return "#b39ddb";
      case "Pink":
        return "#f48fb1";
      case "Beige":
        return "#FFCC99";
      case "Black":
        return "#424242";

      default:
        return "#9575cd";
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "Daisy":
        return path + "/images/icons/daisy.png";
      case "Smock":
        return path + "/images/icons/wave.png";

      default:
        return "#9575cd";
    }
  };

  return (
    <div>
      <Typography variant="h5" color="textPrimary" className={classes.title}>
        {"Summary Report"}
      </Typography>

      <Card className={clsx(classes.root, className)} {...rest}>
        <PerfectScrollbar>
          <div className={classes.div}>
            <Box minWidth={800} className={classes.box}>
              <Table>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell sortDirection="asc" align="center">
                      <Tooltip enterDelay={300} title="Sort">
                        <TableSortLabel
                          active={true}
                          hideSortIcon
                          direction="asc"
                          style={{ color: "white" }}
                          classes={{
                            iconDirectionDesc: classes.iconDirectionDesc,
                            iconDirectionAsc: classes.iconDirectionAsc,
                          }}
                        >
                          No.
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell sortDirection="desc" align="center">
                      <Tooltip enterDelay={300} title="Sort">
                        <TableSortLabel
                          active={false}
                          hideSortIcon
                          direction="desc"
                          style={{ color: "white" }}
                          classes={{
                            iconDirectionDesc: classes.iconDirectionDesc,
                            iconDirectionAsc: classes.iconDirectionAsc,
                          }}
                        >
                          Date
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell sortDirection="desc" align="center">
                      <Tooltip enterDelay={300} title="Sort">
                        <TableSortLabel
                          active={false}
                          hideSortIcon
                          direction="desc"
                          style={{ color: "white" }}
                          classes={{
                            iconDirectionDesc: classes.iconDirectionDesc,
                            iconDirectionAsc: classes.iconDirectionAsc,
                          }}
                        >
                          Product Name
                        </TableSortLabel>
                      </Tooltip>
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="center">
                      Color
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="center">
                      Size
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="center">
                      Channel
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="center">
                      Quantity
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="center">
                      Cost
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map(
                    (order, i) =>
                      i < 10 && (
                        <TableRow hover key={order.id}>
                          <TableCell sortDirection="asc" align="center">
                            {order.orderNo}
                          </TableCell>
                          <TableCell align="center">
                            {moment(order.date).format("DD/MM/YYYY")}
                          </TableCell>
                          <TableCell align="center">
                            {order.name}
                            <img
                              src={getIcon(order.name)}
                              alt={order.name}
                              style={{ marginBottom: -3, marginLeft: 5 }}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Chip
                              label={order.color}
                              color="primary"
                              size="small"
                              style={{
                                width: 70,
                                background: getColor(order.color),
                              }}
                            />
                          </TableCell>
                          <TableCell align="center">{order.size}</TableCell>
                          <TableCell
                            align="center"
                            className={
                              order.channel === "Shopee"
                                ? classes.shopee
                                : classes.facebook
                            }
                          >
                            {order.channel}
                          </TableCell>
                          <TableCell align="center">{order.quantity}</TableCell>
                          <TableCell align="center">{order.cost}</TableCell>
                        </TableRow>
                      )
                  )}
                </TableBody>
              </Table>
            </Box>
          </div>
        </PerfectScrollbar>
      </Card>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.rootPagination}
      >
        <Grid item>
          <Pagination
            showFirstButton
            showLastButton
            count={orders.length}
            color="primary"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default LatestOrders;
