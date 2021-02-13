import React from "react";
import useProducts, {useProductsProps} from "../hooks/useProducts";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";

type ReturnTypeuseProducts = ReturnType<typeof useProducts>;

type productsViewProps = ReturnTypeuseProducts & {};
let ProductsView: React.FC<productsViewProps> = ({
  users,
  handleAddUser,
  deleteUser,
  updateUser,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>jump</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>jump</Paper>
        </Grid>
      </Grid>
    </>
  );
};

type productsProps = useProductsProps &
  Omit<productsViewProps, keyof ReturnTypeuseProducts>;
let Products: React.FC<productsProps> = ({...others}) => {
  const productsView = useProducts({});
  return <ProductsView {...productsView} {...others} />;
};

export default Products;
