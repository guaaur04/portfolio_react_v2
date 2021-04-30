import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactLinks from "../components/ContactLinks";

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


import TextField from '@material-ui/core/TextField';

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
    },

    form: {
        position: 'relative',
        marginLeft: '10em',
        margin: 'auto',

        
    }
}));

function Contact() {
    const classes = useStyles();
    return (
        <div>


            <Nav />

            {/* Here I will render my column details */}

            <h1 className={classes.title}>Contact</h1>


            {/* Contact Form  */}

            <div className={classes.form}>

            <TextField
                id="outlined-helperText"
                label="Name"
                defaultValue="Default Value"
                variant="outlined"
            />

            <TextField
                id="outlined-helperText"
                label="E-mail"
                defaultValue="Default Value"
                variant="outlined"
            />

            <TextField
                id="outlined-multiline-static"
                label="Message:"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
            />

            <Button variant="contained" color="primary">
            Send Message 
            </Button>

            </div>

            <Paper elevation={3}>
                <Typography variant="h4">Download Resume</Typography>
                <PictureAsPdfIcon />

                {/* Link to download resume  */}

            </Paper>

            <ContactLinks />

            <img src="https://media.giphy.com/media/py5qVYNFWCXpXKzcnk/giphy.gif" alt="glastrier" width="100" height="100"></img>


            <div> <Footer /> </div>

        </div>
    );
}

export default Contact;