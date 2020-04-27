import React, { useState } from "react";
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
        textAlign: "center"
    },
    resumeDimensions: {
        marginTop: 100,
    },
    divDimensions: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap'
    }, 
    headerText: {
        color: "beige",
        fontSize: 30, 
        textAlign: "center"
    }, 
    contactDiv:  {
        marginTop: 100
    }

}));


export default function ApiExamples(props) {

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
                <div className={classes.resumeDimensions} key="pageDiv">
                   <h1 className={classes.headerText}>This is where the examples will go.</h1>
                    </div>
             
                <div className={classes.divDimensions}>

                </div>
            </main>

        </div>
    )
}

