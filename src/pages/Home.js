import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import ContactLinks from "../components/ContactLinks";
import Divider from '@material-ui/core/Divider';
// import ProjectCard from "../components/ProjectCard";
// import projects from "../projects.json";

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import "./style.css";

import InfiniteScroll from "react-infinite-scroll-component";
import { Box, Card } from "@material-ui/core";

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
        display: 'inline-grid',
        marginTop: '1.5em',
        // float: 'right',
        flexFlow: "row",
        flexWrap: "wrap",
        margin: "auto",
        position: "relative",
    
    },

    title: {
      textAlign: 'center',  
      marginTop: 20,
      marginBottom: 20,
    //   fontSize: 50, 
      font:'helvetica',
      
    },

    aboutContainer: {
        backgroundColor: 'red',
        position: 'relative',
        justifyContent: 'space-around',
        margin: 10,
        marginLeft: 100,
        width: 500,
        height: 'calc(100% / 4)',
        width: 'calc(100% / 2)',
        displpay: 'grid',
        maxWidth: 650,
        minWidth: 300,
        
            
    }, 

    links: {
        clear: 'both',
        width: 50,
        justifyContent: 'flex-end',
        // margin: 'auto',
       
        
    }
    
}));

function Home() {
    const classes = useStyles();
    return (
    <div>

        <Nav />

        <ContactLinks className={classes.links}/>

        <div id="homeWrapper">

        <Typography className={classes.title} variant="h3"> Auricia V Guardado </Typography>

        {/* <ContactLinks className={classes.links}/> */}

        <Box className={classes.aboutContainer} > 
            
            <img className={classes.grid} src="../images/portrait.jpg" width="388" height="500"></img>

            <Typography variant="h5"> 
             I'm a Web3 Full-Stack Engineer with previous experience in worker-cooperatives and the service industry. My mission to create tools that support and empower people, communities, and small businesses in a changing world by creating sustainably run technology using versatility, ingenuity, collaboration, and multi-faceted, complex solutions. 
            </Typography>

            <Divider></Divider>

            <Typography variant="h5"> 
             Javascript, React, Solidity
            </Typography>

            
        </Box> 

        <Box>
            <Typography>Placeholder</Typography>
        </Box>
        



    </div>

        <Footer />

    </div>
    
    );
}

export default Home; 