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
        margin: 'auto',
    },

    resume: {
        width: '30em',
        margin: 'auto',
    },

}));

function Contact() {
    const classes = useStyles();
    return (
        <div>


            <Nav />

    


            <div> <Footer /> </div>

        </div>
    );
}

export default Contact;