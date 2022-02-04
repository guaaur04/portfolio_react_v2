import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ContactLinks from "../components/ContactLinks";
// import ProjectCard from "../components/ProjectCard";
// import projects from "../projects.json";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import "./style.css";

import InfiniteScroll from "react-infinite-scroll-component";

const useStyles = makeStyles((theme) => ({
    aboutText: { 
        display: 'inline-flex',
        margin: '10px',
        backgroundColor: 'lightGray',
        height: 'auto',
        fontSize: '15px',
    },
    
    tag: {
        display: 'flex',
        marginTop: 3,
        backgroundColor: 'lightgray',
    },

    grid: {
        flexGrow: 1,
        display: 'flex',
        marginTop: '1.5em',
        flexFlow: "row",
        // flexWrap: "wrap",
        margin: "auto",
        position: "relative",
    
    },

    aboutContainer: {
        display: 'center',
        justifyContent: 'space-around',
        
    }, 

    links: {
        // margin: 'auto',
        marginLeft: '5em',
    }
    
}));

function Home() {
    const classes = useStyles();
    return (
    <div>

        <Nav />

        <div id="homeWrapper">


        <Button variant="contained" color="secondary" href="/projects" class="arrow">
        Projects
        </Button> 

        <Button variant="contained" color="secondary" href="/projects" class="arrow">
        Technologies
        </Button>

        <Button variant="contained" color="secondary" href="/projects" class="arrow">
        Interests
        </Button>

        <Grid container className={classes.grid} spacing={1}>
        <Grid item xs={6}>

        <Slider/>
        
        </Grid>
        <Grid item xs={4} className={classes.aboutContainer}>
        

        <Typography variant="h3">About Me</Typography>

        <Paper elevation={6} className={classes.aboutText}>Full-Stack Web Developer</Paper>
    
        <Paper elevation={6} className={classes.aboutText}>Cooperative and Economic Development</Paper>

        <Paper elevation={6} className={classes.aboutText}> Another Highlight</Paper>

        <Paper elevation={3} className={classes.aboutText}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Paper>

        <Paper elevation={3} className={classes.aboutText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        
    
        {/* <Paper elevation={3}> */}
        </Grid>

        <ContactLinks className={classes.links}/>

        
        </Grid>

        <Typography variant="h3">Technologies</Typography>
        <Paper elevation={3} className={classes.aboutText}>
        HTML
        </Paper>

        <Paper elevation={3} className={classes.aboutText}>
        CSS
        </Paper>

        <Paper elevation={3} className={classes.aboutText}>
        Javascript
        </Paper>

        <Paper elevation={3} className={classes.aboutText}>
        Python
        </Paper>

        <Paper elevation={3} className={classes.aboutText}>
        Solidity
        </Paper>

        <Typography variant="h3">Interests</Typography>
        <Typography variant="h4">

            Creating practical, user-friendly solutions to everyday problems, as well, as imagining and creating beyond those limits of imagination. 

            <br></br>

            Developing technology for cooperative economic networks. 

            <br></br>

            Developing and collaborating in blockchain technology. 
            
            <br></br>

            Thinking of and developing technology that is responsive to quantum science and computing. 

        </Typography>


    </div>

        <Footer />

    </div>
    
    );
}

export default Home; 