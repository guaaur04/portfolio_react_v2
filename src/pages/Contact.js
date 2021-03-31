import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactLinks from "../components/ContactLinks";

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

import { makeStyles } from '@material-ui/core/styles';

// import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const useStyles = makeStyles
const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: '500px',
        marginRight: '500px',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '45px',
    },

    center: {
        marginLeft: '500px',
    }
}));

function Contact() {
    const classes = useStyles();
    return (
        <div>

            
                <Nav />

                {/* Here I will render my column details */}

                <h1 className={classes.title}>Contact</h1>
                <Paper elevation={3}>
                    <Typography variant ="h4">Download Resume</Typography>
                    <PictureAsPdfIcon/> 
                    
                    {/* Link to download resume  */}
                    
                </Paper>

                <ContactLinks/>

               <img src="https://media.giphy.com/media/py5qVYNFWCXpXKzcnk/giphy.gif" alt="glastrier" width="100" height="100"></img>
               

            <div> <Footer /> </div>
            
        </div>
    );
}

export default Contact; 