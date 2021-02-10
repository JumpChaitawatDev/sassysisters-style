import React from "react";

type UseordersProps = {};
type ReturnTypeUseorders = ReturnType<typeof useorders>;
function useorders(props: UseordersProps) {
  const {} = props;
  return {};
}

type ordersViewProps = ReturnTypeUseorders & {};
let OrdersView: React.FC<ordersViewProps> = ({}) => {
  return <>ordersView</>;
};

type ordersProps = UseordersProps &
  Omit<ordersViewProps, keyof ReturnTypeUseorders>;
let Orders: React.FC<ordersProps> = ({ ...others }) => {
  const orders = useorders({});
  return <OrdersView {...orders} {...others} />;
};

export default Orders;
