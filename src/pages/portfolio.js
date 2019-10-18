import React, { useState } from "react";
// import ReactDOM from 'react-dom';
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
        textAlign: "center", 
        fontSize: 40
    },
    resumeDimensions: {
        width: 1200,
        marginTop: 100,
    },
    divDimensions: {
        display: "flex",
        justifyContent: "center",
        flexWrap: 'wrap'
    },
    gifDiv: {
        textAlign: "center", 
        width: 600,
        color: "beige"
    },
    gifDisplay: {
        display: "inline-block"
    },
    gifStuff: {
        display: "flex",
        flexWrap: "wrap"
    }

}));


export default function Portfolio() {

    // const [gifLinks, setGifLinks] = useState([])
    const open = useState(false);
    const classes = useStyles();

    const gifInfo = [{
        name: "The Vice Cracker", giphy: "https://media1.giphy.com/media/kvrvnB158J4fm/200.gif", url: "https://vice-cracker.herokuapp.com/"
    },
    { name: "Sahara Marketplace", giphy: "https://media3.giphy.com/media/g7YDlrD5YLqfe/200.gif", url: "https://sahara-marketplace.herokuapp.com/" },
    { name: "Project 0", giphy: "https://media2.giphy.com/media/CF93EZqOxjdHG/200.gif", url: "https://github.com/ElyriaG/Project-0" },
    { name: "Friend Finder", giphy: "https://media1.giphy.com/media/OWabwoEn7ezug/200.gif", url: "https://elyria-friend-finder.herokuapp.com/survey" }];



    // useEffect(() => {
    //     let url = "//api.giphy.com/v1/gifs/search?api_key=46cmSCjXPzjlUw9vAuoYrUENygURGp1F&q=kittens&limit=5";

    //     fetch(url)
    //         .then(response => response.json()).then(gifLinks => {
    //             console.log(gifLinks);
    //             gifLinks.data.map((gif, i) => setGifLinks(gifLinks.data[i].images.fixed_height.url));
    //             console.log(gifLinks.data[1].images.fixed_height.url);
    //             // setGifLinks(gifLinks.data.images.fixed_height.url);

    //         })
    // }, []);


    return (
        <div key="fullPage">
            <CssBaseline />
            <LeftDrawer />

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })} key="thingy"
            >

                <div className={classes.drawerHeader} />
                <br />
                <div className={classes.resumeDimensions} key="pageDiv">
                    <h1 className={classes.textColor}>My Portfolio</h1>
                    <div className={classes.gifStuff} key="divOfGifs">
                        {gifInfo.map(({ name, giphy, url }) => (

                            <div className={classes.gifDiv}>
                                <h3>{name}</h3>
                                <a href={url} target="_blank" rel="noopener noreferrer"> <img className={classes.gifDisplay} src={giphy} alt="gif" /></a>
                                <hr style={{borderColor: "white"}} / >
                            </div>
                        ))}
                    </div>
                    {/* {gifLinks.map((gif) => <img src={gif} alt="gif" />)} */}
                    {/* <img src={gifLinks} alt="gif" /> */}
                    {/* <img src={gifLinks.data[1].images.fixed_height.url} alt="gif2" /> */}
                </div>
                <div>
                </div>
            </main>
        </div >
    )
}

