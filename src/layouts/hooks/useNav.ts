import { useEffect, useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";

import { drawerState } from "../../store/layoutStore";

type UsenavProps = {};
const useNav = (props: UsenavProps) => {
  const [openDrawer, setOpenDrawer] = useRecoilState(drawerState);
  const [openSidebar, setOpen] = useState(true);
  const history = useHistory();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(open);
    setOpenDrawer(open);
  };

  const handleClickPage = (page: string) => {
    history.push("/" + page.toLowerCase());
  };

  return {
    toggleDrawer,
    openSidebar,
    handleClickPage,
  };
};
export default useNav;
