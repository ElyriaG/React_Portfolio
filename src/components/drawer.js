import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import MailIcon from "@material-ui/icons/Mail";
import Avatar from "@material-ui/core/Avatar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import AppsIcon from "@material-ui/icons/Apps";
import StorageIcon from "@material-ui/icons/Storage";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const drawerWidth = 240;
const LinkedInLink = "https://www.linkedin.com/in/elyriagarcia/";
const GithubLink = "https://github.com/ElyriaG";

const useStyles = makeStyles((theme) => ({
  bigAvatar: {
    margin: 20,
    width: 60,
    height: 60,
  },
  root: {
    display: "flex",
  },
  appBar: {
    //Elyria Garcia header
    background: "linear-gradient(45deg, #000000 20%, #35363f 30%, #000000 30%)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#e1e1ea",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    backgroundColor: "#e1e1ea",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  rootDrawer: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LeftDrawer(props) {
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const classes = useStyles();

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  //   const handleClick = () => {
  //     setOpen((prev) => !prev);
  //   };

  //   const handleClickAway = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" noWrap>
              <div className="image_name">
                <Avatar
                  alt="Me"
                  src="https://i.imgur.com/n7lPJAN.jpg"
                  className={classes.bigAvatar}
                />
                <h2>Elyria Garcia</h2>
              </div>
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <ClickAwayListener onClickAway={handleClickAway}> */}
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        {/* </ClickAwayListener> */}

        <Divider />

        <List>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button key={"About Me"}>
              <>
                <ListItemIcon>
                  {" "}
                  <EmojiEmotionsOutlinedIcon />
                </ListItemIcon>
              </>
              <ListItemText primary={"About Me"} />
            </ListItem>
          </Link>
          <Link to="/resume" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button key={"Resume"}>
              <>
                <ListItemIcon>
                  {" "}
                  <AssignmentIndIcon />
                </ListItemIcon>
              </>
              <ListItemText primary={"Resume"} />
            </ListItem>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key={"Contact Me"}>
              <>
                <ListItemIcon>
                  {" "}
                  <MailIcon />
                </ListItemIcon>
              </>
              <ListItemText primary={"Contact Me"} />
            </ListItem>
          </Link>
          <Link
            to="/portfolio"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button key={"Portfolio"}>
              <>
                <ListItemIcon>
                  {" "}
                  <DeveloperModeIcon />
                </ListItemIcon>
              </>
              <ListItemText primary={"Portfolio"} />
            </ListItem>
          </Link>
        </List>

        <Divider />

        <Link
          to="/ApiExamples"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button key={"Api Examples"}>
            <>
              <ListItemIcon>
                {" "}
                <AppsIcon />
              </ListItemIcon>
            </>
            <ListItemText primary={"Api Examples"} />
          </ListItem>
        </Link>
        <Link
          to="/LocalStorage"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem button key={"Local Storage"}>
            <>
              <ListItemIcon>
                {" "}
                <StorageIcon />
              </ListItemIcon>
            </>
            <ListItemText primary={"Local Storage"} />
          </ListItem>
        </Link>

        <Divider />

        <List>
          <a
            href={LinkedInLink}
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {["LinkedIn"].map((text, index) => (
              <ListItem button key={text}>
                <>
                  <ListItemIcon>
                    {" "}
                    <LinkedInIcon />
                  </ListItemIcon>
                </>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </a>
          <a
            href={GithubLink}
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {["GitHub"].map((text, index) => (
              <ListItem button key={text}>
                <>
                  <ListItemIcon>
                    {" "}
                    <GitHubIcon />
                  </ListItemIcon>
                </>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </a>
        </List>
      </Drawer>
    </div>
  );
}
