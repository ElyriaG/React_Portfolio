import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import LeftDrawer from "./../components/drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  headerText: {
    color: "#CAA8E1",
    textAlign: "center",
  },
  textField: {
    color: "white",
  },
  divider: {
    backgroundColor: "gray",
    width: "100%",
  },
}));

export default function LocalStorage(props) {
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
        <div id="AboutYouDiv">
          <div className={classes.drawerHeader} />
          <br />
          <div id="aboutYouParent">
            <div id="aboutYouHeader">
              <h1 className={classes.headerText} id="aboutYouH">
                About You - Local Storage
              </h1>
            </div>
            <main>
              <form className={classes.root} noValidate autoComplete="off">
              <h2 id="aboutYouHeaders">Personal Details:</h2>
                <TextField
                  className={classes.headerText}
                  id="standard-basic name"
                  label="Name"
                />
                <TextField id="standard-basic email" label="Email" />
                <TextField id="standard-basic age" label="Age" />
                <br /> <br />
                <Divider className={classes.divider}></Divider>
                <br />
                <h2 id="aboutYouHeaders">Favorite Book:</h2>
                <TextField id="standard-basic book" label="Title" />
                <TextField id="standard-basic bookAuthor" label="Author" />
                <TextField id="standard-basic bookSummary" label="Summary" />
                <br /> <br />
                <Divider className={classes.divider}></Divider>
                <br />
                <h2 id="aboutYouHeaders">Favorite Movie:</h2>
                <TextField id="standard-basic movie" label="Title" />
                <TextField id="standard-basic movieYear" label="Year" />
                <TextField id="standard-basic movieSummary" label="Summary" />
              </form>
            </main>
          </div>
        </div>
      </main>
    </div>
  );
}
