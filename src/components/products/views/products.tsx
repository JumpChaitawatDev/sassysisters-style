import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {makeStyles, createStyles} from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import SearchField from "./searchField";
import ProductList from "./productList";

import useProducts, {useProductsProps, PageType} from "../hooks/useProducts";

type ReturnTypeuseProducts = ReturnType<typeof useProducts>;

type productsViewProps = ReturnTypeuseProducts & {};
let ProductsView: React.FC<productsViewProps> = ({page, hahdleChangePage}) => {
  const pageTitle = () => {
    switch (page) {
      case "list":
        return "All Products";
      case "add":
        return "Add Product";
      case "edit":
        return "Update Product";

      default:
        return "All Products";
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={{fontWeight: "bold"}}
            color="textPrimary"
          >
            {pageTitle()}
            {page !== "list" && (
              <Button
                color="primary"
                size="small"
                startIcon={<ArrowBackIosIcon />}
                onClick={() => hahdleChangePage("list")}
                style={{marginLeft: 20}}
              >
                {"Back"}
              </Button>
            )}
          </Typography>
        </Grid>

        {page === "list" && (
          <>
            <Grid item xs={12}>
              <Paper style={{padding: "10px 20px"}}>
                <Grid container justify="space-between" alignItems="center">
                  <SearchField />
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<AddIcon />}
                    onClick={() => hahdleChangePage("add")}
                  >
                    {"Add Product"}
                  </Button>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <ProductList />
            </Grid>
          </>
        )}

        {page === "add" && (
          <>
            <Grid item xs={12}></Grid>
          </>
        )}
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
