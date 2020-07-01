import React, { useState } from "react";
import { useInput } from "./../Hooks/useInput";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import LeftDrawer from "./../components/drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
// import SaveIcon from "@material-ui/icons/Save";

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
  let previousMovieSummary = localStorage.getItem("movieSummary");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting your information, ${fullName} `);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("bookTitle", bookTitle);
    localStorage.setItem("bookAuthor", bookAuthor);
    localStorage.setItem("bookSummary", bookSummary);
    localStorage.setItem("movieTitle", movieTitle);
    localStorage.setItem("movieYear", movieYear);
    localStorage.setItem("movieSummary", movieSummary);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    alert(`Clearing the data.`);
    localStorage.removeItem("fullName");
    localStorage.removeItem("email");
    localStorage.removeItem("age", age);
    localStorage.removeItem("bookTitle");
    localStorage.removeItem("bookAuthor");
    localStorage.removeItem("bookSummary");
    localStorage.removeItem("movieTitle");
    localStorage.removeItem("movieYear");
    localStorage.removeItem("movieSummary");
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
              <h3 id="pageExplanation">
                The information here will be saved on your computers local
                storage and is not seeable by anyone else - not even me. The
                information will remain if you refresh the page or even close
                the window.
              </h3>
              <div></div>
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
                <Divider />
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
                <Divider />
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
                Save
              </Button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Divider />
        <br />

        <div id="previousSubmission">
          <h2 id="previousSubmissionTitle">Previous Submission:</h2>
          <h4>
            Name: <span id="previousSubmissionSpans">{previousName}</span>
            <br />
            Email: <span id="previousSubmissionSpans">{previousEmail}</span>
            <br />
            Age: <span id="previousSubmissionSpans">{previousAge}</span>
            <br />
            Book: <span id="previousSubmissionSpans">{previousBook}</span> by
            <span id="previousSubmissionSpans"> {previousAuthor}</span>
            <br />
            Summary:{" "}
            <span id="previousSubmissionSpans">{previousBookSummary}</span>
            <br />
            Movie:{" "}
            <span id="previousSubmissionSpans">
              {" "}
              {previousMovie} - {previousYear}{" "}
            </span>
            <br />
            Summary:{" "}
            <span id="previousSubmissionSpans">{previousMovieSummary}</span>
          </h4>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </main>
    </div>
  );
}
