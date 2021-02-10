import React from "react";

type UseproductsViewProps = {};
type ReturnTypeUseproductsView = ReturnType<typeof useproductsView>;
function useproductsView(props: UseproductsViewProps) {
  const {} = props;
  return {};
}

type productsViewProps = ReturnTypeUseproductsView & {};
let ProductsView: React.FC<productsViewProps> = ({}) => {
  return <>ProductsView</>;
};

type productsProps = UseproductsViewProps &
  Omit<productsViewProps, keyof ReturnTypeUseproductsView>;
let Products: React.FC<productsProps> = ({ ...others }) => {
  const productsView = useproductsView({});
  return <ProductsView {...productsView} {...others} />;
};

export default Products;
