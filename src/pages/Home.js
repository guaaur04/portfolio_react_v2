import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ContactLinks from "../components/ContactLinks";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import "./style.css";


const useStyles = makeStyles((theme) => ({
    aboutText: { 
        display: 'inline-flex',
        margin: 'auto',
        backgroundColor: 'salmon',
    },

    grid: {
        flexGrow: 1,
        display: 'flex',
        width: 'calc(100% / 2)',
        flexFlow: "row",
        flexWrap: "wrap",
    },
  

}));

function Home() {
    const classes = useStyles();
    return (
    <div>

        <Nav />

        <div id="homeWrapper">
            
        <Grid container className={classes.grid} spacing={2}>
        <Grid item xs={12}>

        <Slider/>

        </Grid>

        
        <Grid item xs={12}>
        <Paper elevation={6}>
    
        <Paper elevation={6} className={classes.aboutText}>Full-Stack Developer</Paper>
        <Paper elevation={6} className={classes.aboutText}>Full-Stack Developer</Paper>
        <Paper elevation={6} className={classes.aboutText}>Full-Stack Developer</Paper>

        </Paper >

        <Paper elevation={3} className={classes.aboutText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>

        <Paper elevation={3} className={classes.aboutText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>
        </Grid>

        <ContactLinks />

    </div>

        <Footer />

    </div>
    
    );
}

export default Home; 