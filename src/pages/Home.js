import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ContactLinks from "../components/ContactLinks";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import "./style.css";


const useStyles = makeStyles((theme) => ({
    aboutText: { 
        display: 'inline-flex',
        margin: 'auto',
        backgroundColor: 'lightBlue',
    },
    
    tag: {
        // display: 'flex',
        marginTop: 3,
        // justifyContent: 'space-around',
        backgroundColor: 'lightgreen',
        // flexWrap: 'wrap',
    },

    grid: {
        flexGrow: 1,
        display: 'flex',
        gridTemplateColumns: '300px 1em 200px',
        marginTop: '1.5em',
        // gridColumn: 'span 3/-1',


        // width: 'calc(100% / 2)',
        flexFlow: "row",
        flexWrap: "wrap",
        // margin: "auto",
        // position: "relative",
    
    },

    aboutContainer: {
        display: 'center',
        justifyContent: 'space-around',
        
    }, 

    links: {
        margin: 'auto',
    }
    
}));

function Home() {
    const classes = useStyles();
    return (
    <div>

        <Nav />

        {/* <div id="homeWrapper"> */}

        <Grid container className={classes.grid} spacing={1}>
        <Grid item xs={6}>

        <Slider/>
        
        </Grid>

        
        <Grid item xs={4} className={classes.aboutContainer}>

        <Typography>Welcome</Typography>

        <Typography>About Me</Typography>

        <Paper elevation={3} className={classes.aboutText}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paper>

        <Paper elevation={3} className={classes.aboutText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        
        <Button variant="contained" color="secondary" href="/projects" class="arrow">
        Projects
        </Button> 

        {/* <Paper elevation={3}> */}
        <Paper elevation={6} className={classes.tag}>Full-Stack Developer</Paper>
        <Paper elevation={6} className={classes.tag}>Javascript</Paper>
        <Paper elevation={6} className={classes.tag}>HTML</Paper>
        <Paper elevation={6} className={classes.tag}>CSS</Paper>
        <Paper elevation={6} className={classes.tag}>Cooperative Development</Paper>
        <Paper elevation={6} className={classes.tag}>Teamwork</Paper>
        {/* </Paper> */}
        </Grid>

        <ContactLinks className={classes.links}/>

        
        </Grid>

        
        
        

    {/* </div> */}

        <Footer />

    </div>
    
    );
}

export default Home; 