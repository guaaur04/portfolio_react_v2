import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";


const useStyles = makeStyles((theme) => ({
    aboutText: { 
        display: 'inline-flex',
        margin: 'auto',
        backgroundColor: 'salmon',
    },
  

}));

function Home() {
    const classes = useStyles();
    return (
    <div>

        <Nav />

         <div id="homeWrapper">
    
        <Paper elevation={3} className={classes.aboutText}>Full-Stack Developer</Paper>

        <Contact />

         <Slider/>

    </div>

        <Footer />

    </div>
    
    );
}

export default Home; 