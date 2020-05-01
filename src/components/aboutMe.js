import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles(theme => ({
    typographyDiv: {            //parent div of the about me content
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignContent: 'center'
    },
    aboutMeParentDiv: {
        marginTop: 80,
        width: 600
    },
    headerColor: {
        color: "#CAA8E1",
        textAlign: "center",
        fontSize: 40
    },
    aboutMeContentDiv:  {
        marginTop: 50
    },
    aboutMeContent: {
        color: "beige",
        fontSize: 25, 
        textAlign: "center"
    },
    dividerColor: {
        backgroundColor: 'white'
    }
}));

function AboutMe() {
    const classes = useStyles();

    return (
        <div className={classes.typographyDiv}>
        

            <div className={classes.aboutMeParentDiv}>
                    <h1 className={classes.headerColor}>About Me</h1>
                    <Divider className={classes.dividerColor}></Divider>

                    <div className={classes.aboutMeContentDiv}>
                        <h2 className={classes.aboutMeContent}> 
                        Currently-stuck-in-quarantine server aspiring to enter the software engineering field. 
                        <br/><br/>
                        Focused on Front-End but studied Back-End as well at the Northwestern Coding Bootcamp. 
                        <br/><br/>
                        Problem solver, wannabe musician, linguist, baker, and rock climber. 
                        <br/>· · ·<br/>
                        And future software engineer.  
                        </h2>
                    </div>
                </div>

        </div>
    )
};



export default AboutMe;