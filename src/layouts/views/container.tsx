import React from "react";
import { useRecoilValue } from "recoil";
import { drawerState } from "../../store/layoutStore";

type UsecontainerProps = {};
type ReturnTypeUsecontainer = ReturnType<typeof usecontainer>;
function usecontainer(props: UsecontainerProps) {
  const {} = props;
  return {};
}

type containerViewProps = ReturnTypeUsecontainer & {};
let ContainerView: React.FC<containerViewProps> = ({ children }) => {
  const openSidebar = useRecoilValue(drawerState);
  return (
    <div
      style={{
        padding: 30,
        paddingTop: 94,
        background: "#F4F6F8",
        marginLeft: openSidebar ? 240 : 0,
        minHeight: "calc(100vh - 124px)",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

type containerProps = UsecontainerProps &
  Omit<containerViewProps, keyof ReturnTypeUsecontainer>;
let Container: React.FC<containerProps> = ({ ...others }) => {
  const container = usecontainer({});
  return <ContainerView {...container} {...others} />;
};

export default Container;
