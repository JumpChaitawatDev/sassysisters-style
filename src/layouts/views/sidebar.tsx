import React from "react";
import clsx from "clsx";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import useNav from "../hooks/useNav";
import {menuList} from "../../constants/menuList";
import {useHistory} from "react-router";

const drawerWidth = 240;
const avatar = process.env.PUBLIC_URL + "/images/avatars/faii01.jpg";

const useStyles = makeStyles((theme) => ({
  list: {
    width: drawerWidth,
  },
  fullList: {
    width: "auto",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: 10,
    marginBottom: 20,
  },
  listItemAvatar: {
    justifyContent: "center",
  },
  userName: {
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
  highlight: {
    backgroundColor: "#b39ddb",
    color: "white",
    "&:hover": {
      backgroundColor: "#937fb7",
    },
  },
  normal: {},
}));

type ReturnTypeUsesidebar = ReturnType<typeof useNav>;

type sidebarViewProps = ReturnTypeUsesidebar & {};
let SidebarView: React.FC<sidebarViewProps> = ({
  toggleDrawer,
  openSidebar,
  handleClickPage,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const path = history.location.pathname.split("/")[1];
  console.log("ss");

  const sidebarItems = () => {
    return menuList.map((text, index) => (
      <ListItem
        button
        key={text}
        onClick={() => handleClickPage(text)}
        className={
          path === text.toLowerCase() ? classes.highlight : classes.normal
        }
      >
        <ListItemIcon>
          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ));
  };
  return (
    <div>
      <Drawer
        anchor={"left"}
        variant="persistent"
        open={openSidebar}
        onClose={toggleDrawer(false)}
      >
        <List className={classes.list}>
          <ListItem alignItems="center" className={classes.listItemAvatar}>
            <div>
              <Avatar alt="Faii" src={avatar} className={classes.large} />
              <Typography variant="body1" className={classes.userName}>
                {"Faii Kulbun"}
              </Typography>
            </div>
          </ListItem>
        </List>
        <Divider />
        <List className={classes.list}>{sidebarItems()}</List>
      </Drawer>
    </div>
  );
};

type sidebarProps = Omit<sidebarViewProps, keyof ReturnTypeUsesidebar>;
let Sidebar: React.FC<sidebarProps & ReturnTypeUsesidebar> = ({...others}) => {
  return <SidebarView {...others} />;
};

export default Sidebar;
