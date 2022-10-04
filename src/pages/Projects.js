import React from "react";
import Grid from '@material-ui/core/Grid';
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import ContactLinks from "../components/ContactLinks";
import { Typography } from "@material-ui/core";
import Footer from "../components/Footer";
import Button from '@material-ui/core/Button';
import projects from "../projects.json";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',  
    
    },

    gridContainer: {
        margin: 'auto',
        display: 'flex-start',
        flexWrap: 'wrap',
    },

    buttonMap: {
        // position: 'relative',
        color: 'black',
    },

    links: {
        // margin: 'auto',
        marginLeft: '5em',
    }

}));

function Portfolio() {
    const classes = useStyles();
    return (
        <div>

            <Nav />


            <div id="projectsWrapper">


            <Typography className={classes.title} variant="h3"> Auricia V Guardado </Typography>

                        {projects.map(project => (

                            <ProjectCard
                                id={project.id}
                                key={project.id}
                                name={project.name}
                                image={project.image}
                                description={project.description}
                                github={project.github}
                                live={project.live}
                            />

                        ))}

                  
            </div>

            <div> <Footer /> </div>

        </div>
    );
}


export default Portfolio;