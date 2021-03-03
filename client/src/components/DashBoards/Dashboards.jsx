import React, { useState } from "react";
import {
  makeStyles,
  useTheme,
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Toolbar,
  Drawer,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import WorkIcon from "@material-ui/icons/Work";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";

import "./DashBoards.css";

import HRDashBoard from "./HRDashboard/HRDashboard";
import PostJob from "./PostJob/PostJob";

import JobPosts from "./JobPosts/JobPosts";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: "white",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  },
}));

function ResponsiveDrawer() {
  const classes = useStyles();
  const history = useHistory();

  const accountType = localStorage.getItem("hack-accountType");

  const [listItem, setListItem] = useState(
    accountType === "hr" ? "Dashboard" : "Jobs For You"
  );
  const drawerItems =
    accountType === "hr"
      ? [
          { itemText: "Dashboard", route: "/dashboard" },
          { itemText: "Post a Job", route: "/post-job" },
        ]
      : [
          { itemText: "Jobs For You", route: "/job-posts" },
          { itemText: "Your Profile", route: "/applicant-profile" },
        ];

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {drawerItems.map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              setListItem(text.itemText);
              history.push(text.route);
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <WorkIcon /> : <AccountBoxIcon />}
            </ListItemIcon>
            <ListItemText primary={text.itemText} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <div>
          <AppBar position="fixed" className={classes.appBar} elevation={2}>
            <Toolbar>
              <div className="navbar-flex-container">
                {accountType === "hr" ? (
                  ""
                ) : (
                  <div className="nav-notification-item">
                    <IconButton>
                      <NotificationsIcon />
                    </IconButton>
                  </div>
                )}
                <div>
                  <IconButton size="small">
                    <AccountCircleIcon />
                  </IconButton>
                  <span className="nav-name"> Ian D'souza </span>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div
          style={{ background: "#fafafa", padding: "2rem", height: "100vh" }}
        >
          {listItem === "Dashboard" && <HRDashBoard />}
          {listItem === "Post a Job" && <PostJob />}

          {listItem === "Jobs For You" && <JobPosts />}
        </div>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
