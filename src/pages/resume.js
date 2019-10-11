import React, { useState } from "react";
import ResumeImage from "./../images/Resume.png";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import LeftDrawer from "./../components/drawer";
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    textColor: {
        color: "white",
    },
    resumeDimensions: {
        width: 700,
        height: 900,
        marginTop: 30,
    },
    divDimensions: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap'
    }

}));


export default function Resume(props) {

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
                <h2 className={classes.textColor}>My Resume</h2>
                <div className={classes.divDimensions}>
                    <img className={classes.resumeDimensions} src={ResumeImage} alt="Resume" />
                </div>
            </main>

        </div>
    )
}

