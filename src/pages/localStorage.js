import React, { useState } from "react";
import { useInput } from "./../Hooks/useInput";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import LeftDrawer from "./../components/drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

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
  button: {
    margin: theme.spacing(1),
  },
}));

export default function LocalStorage(props) {
  const open = useState(false);
  const classes = useStyles();

  const { value: fullName, bind: bindFullName } = useInput("");
  const { value: email, bind: bindEmail } = useInput("");
  const { value: age, bind: bindAge } = useInput("");
  const { value: bookTitle, bind: bindBookTitle } = useInput("");
  const { value: bookAuthor, bind: bindBookAuthor } = useInput("");
  const { value: bookSummary, bind: bindBookSummary } = useInput("");
  const { value: movieTitle, bind: bindMovieTitle } = useInput("");
  const { value: movieYear, bind: bindMovieYear } = useInput("");
  const { value: movieSummary, bind: bindMovieSummary } = useInput("");
  let previousName = localStorage.getItem("fullName");
  let previousEmail = localStorage.getItem("email");
  let previousAge = localStorage.getItem("age");
  let previousBook = localStorage.getItem("bookTitle");
  let previousAuthor = localStorage.getItem("bookAuthor");
  let previousBookSummary = localStorage.getItem("bookSummary");
  let previousMovie = localStorage.getItem("movieTitle");
  let previousYear = localStorage.getItem("movieYear");
  let previousMovieSummary = localStorage.getItem("movieSummary")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting info for ${fullName} `);
    // resetFullName();
    // resetEmail();
    // resetAge();
    // resetBookTitle();
    // resetBookAuthor();
    // resetBookSummary();
    // resetMovieTitle();
    // resetMovieYear();
    // resetMovieSummary();
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("Email", email);
    localStorage.setItem("Age", age);
    localStorage.setItem("Book Title", bookTitle);
    localStorage.setItem("Book Author", bookAuthor);
    localStorage.setItem("Book Summary", bookSummary);
    localStorage.setItem("Movie Title", movieTitle);
    localStorage.setItem("Movie Year", movieYear);
    localStorage.setItem("Movie Summary", movieSummary);
  };

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
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <h2 id="aboutYouHeaders">Personal Details:</h2>
                <TextField
                  id="standard-basic name"
                  label="Name"
                  {...bindFullName}
                />
                <TextField
                  id="standard-basic email"
                  label="Email"
                  {...bindEmail}
                />
                <TextField id="standard-basic age" label="Age" {...bindAge} />
                <br /> <br />
                <Divider className={classes.divider}></Divider>
                <br />
                <h2 id="aboutYouHeaders">Favorite Book:</h2>
                <TextField
                  id="standard-basic book"
                  label="Title"
                  {...bindBookTitle}
                />
                <TextField
                  id="standard-basic bookAuthor"
                  label="Author"
                  {...bindBookAuthor}
                />
                <TextField
                  id="standard-basic bookSummary"
                  label="Summary"
                  {...bindBookSummary}
                />
                <br /> <br />
                <Divider className={classes.divider}></Divider>
                <br />
                <h2 id="aboutYouHeaders">Favorite Movie:</h2>
                <TextField
                  id="standard-basic movie"
                  label="Title"
                  {...bindMovieTitle}
                />
                <TextField
                  id="standard-basic movieYear"
                  label="Year"
                  {...bindMovieYear}
                />
                <TextField
                  id="standard-basic movieSummary"
                  label="Summary"
                  {...bindMovieSummary}
                />
              </form>
            </main>
            <br />
            <div>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                onClick={handleSubmit}
              >
                <SaveIcon /> Save
              </Button>
            </div>
          </div>
        </div>
        <h2>Previously Submitted:</h2>
        <h4>
          Name: {previousName}
          <br/>
          Email: {previousEmail}
          <br/>
          Age: {previousAge}
          <br/>
          Book: {previousBook} by {previousAuthor}
          <br/>
          Summary: {previousBookSummary}
          <br/>
          Movie: {previousMovie}, {previousYear}
          Summary: {previousMovieSummary}
        </h4>
      </main>
    </div>
  );
}
