import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Budget from "./budget";
import TotalCustomer from "./totalCustomer";
import SalesRate from "./salesRate";
import TotalProfit from "./totalProfit";

import LatestProducts from "./latestProducts";
import LatestOrders from "./latestOrders";

type UsedashboardProps = {};
type ReturnTypeUsedashboard = ReturnType<typeof usedashboard>;
function usedashboard(props: UsedashboardProps) {
  const {} = props;
  return {};
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

type dashboardViewProps = ReturnTypeUsedashboard & {};
let DashboardView: React.FC<dashboardViewProps> = ({}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Budget />
        </Grid>
        <Grid item xs={3}>
          <TotalCustomer />
        </Grid>
        <Grid item xs={3}>
          <SalesRate />
        </Grid>
        <Grid item xs={3}>
          <TotalProfit />
        </Grid>

        <Grid item xs={3}>
          <LatestProducts />
        </Grid>
        <Grid item xs={9}>
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  );
};

type dashboardProps = UsedashboardProps &
  Omit<dashboardViewProps, keyof ReturnTypeUsedashboard>;
let Dashboard: React.FC<dashboardProps> = ({ ...others }) => {
  const dashboard = usedashboard({});
  return <DashboardView {...dashboard} {...others} />;
};

export default Dashboard;
