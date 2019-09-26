import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles(theme => ({
    typographyHeader: {
        textAlign: 'center',
        padding: 10,
        background: 'linear-gradient(45deg, #808080 10%, #ffffff 40%, #808080 80%)'
    },
    typographyContent: {
        padding: 20,
        background: 'linear-gradient(45deg, #808080 10%, #ffffff 40%, #808080 80%)'
    }
}));

function AboutMe() {
    const classes = useStyles();

    return (
        <>
            <Typography paragraph>
                <h3 className={classes.typographyHeader}>About Me<br /> &#x2193;</h3>

            </Typography>
            <Typography paragraph className={classes.typographyContent}>
                <p>
                    I love making websites pretty, modern, and accessible.
                </p>
                <p>
                    Recent graduate from the Full Stack Coding Boot Camp program at Northwesten University.
                </p>

            </Typography>
        </>
    )
};



export default AboutMe;