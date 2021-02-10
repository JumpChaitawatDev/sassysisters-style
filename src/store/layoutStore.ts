import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const drawerState = atom({
  key: "openDrawer", // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});
