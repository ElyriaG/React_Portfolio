import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import LeftDrawer from "./../components/drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  typographyDiv: {
    //parent div of the about me content
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignContent: "center",
  },
  textColor: {
    color: "#CAA8E1",
    textAlign: "center",
    fontSize: 40,
  },
  contactParentDiv: {
    marginTop: 170,
  },
  contactInfo: {
    color: "beige",
    fontSize: 25,
    textAlign: "center",
  },
  contactDiv: {
    marginTop: 80,
  },
  dividerColor: {
    backgroundColor: "#ffffff",
  },
}));

export default function Contact(props) {
  const open = useState(false);
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <LeftDrawer />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <br />
        <div className={classes.typographyDiv}>
          <div className={classes.contactParentDiv}>
            <h1 className={classes.textColor}>Contact Me</h1>
            <br />
            <Divider className={classes.dividerColor}></Divider>

            <div className={classes.contactDiv}>
              <h3 className={classes.contactInfo}>
                Email: elyria.garcia@gmail.com
              </h3>
              <h3 className={classes.contactInfo}>Phone # : 224-428-7823</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
