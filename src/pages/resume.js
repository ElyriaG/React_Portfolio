import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LeftDrawer from "./../components/drawer";
import CssBaseline from '@material-ui/core/CssBaseline';
import { Document } from 'react-pdf';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
}));


function Resume() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <LeftDrawer />
            <Document file="./../images/" />
        </div>
    )
}

export default Resume;