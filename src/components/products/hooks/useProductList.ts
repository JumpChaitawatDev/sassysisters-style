import {useEffect, useState, MouseEvent, ChangeEvent} from "react";

export type HeadCell = {
  disablePadding: boolean;
  id: keyof Product;
  label: string;
  numeric: boolean;
  align?: "center" | "right" | "left" | "inherit" | "justify";
};
export type Product = {
  imgUrl: string;
  name: string;
  details: string;
  colorNumber: number;
  sizeNumber: number;
  price: number;
};
export type Order = "asc" | "desc";
export type UseProductListPropsType = {};
const useProductList = ({}: UseProductListPropsType) => {
  function createData(
    imgUrl: string,
    name: string,
    details: string,
    colorNumber: number,
    sizeNumber: number,
    price: number
  ): Product {
    return {imgUrl, name, details, colorNumber, sizeNumber, price};
  }

  const rows = [
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
    createData("Cupcake", "Cupcake", "Cupcake", 67, 4.3, 40),
  ];

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
  ): (
    a: {[key in Key]: number | string},
    b: {[key in Key]: number | string}
  ) => number {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const headCells: HeadCell[] = [
    {
      id: "imgUrl",
      numeric: false,
      disablePadding: true,
      label: "Image",
      align: "center",
    },
    {
      id: "name",
      numeric: true,
      disablePadding: false,
      label: "Name",
      align: "center",
    },
    {
      id: "details",
      numeric: true,
      disablePadding: false,
      label: "Detail",
      align: "center",
    },
    {
      id: "price",
      numeric: true,
      disablePadding: false,
      label: "Price (Baht)",
      align: "right",
    },
  ];

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Product>("name");
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof Product
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return {
    getComparator,
    stableSort,
    handleRequestSort,
    handleSelectAllClick,
    handleClick,
    handleChangePage,
    handleChangeRowsPerPage,
    handleChangeDense,
    isSelected,
    emptyRows,
    selected,
    order,
    orderBy,
    page,
    rowsPerPage,
    rows,
    headCells,
    dense,
  };
};
export default useProductList;
