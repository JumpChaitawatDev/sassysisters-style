import React from "react";
import { useEffect, useState, useMemo } from "react";

type UsesidebarProps = {};
const useSidebar = (props: UsesidebarProps) => {
  const [openSidebar, setOpen] = useState(true);

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
  };

  return {
    toggleDrawer,
    openSidebar,
  };
};
export default useSidebar;
