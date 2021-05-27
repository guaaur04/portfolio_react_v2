import React from "react";
import Grid from '@material-ui/core/Grid';
import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import projects from "../projects.json";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        marginLeft: '500px',
        marginRight: '500px',
        marginTop: '20px',
        // marginBottom: '20px',
        fontSize: '45px',
    },

        gridContainer: {
        margin: 'auto',
        display: 'flex-start',
        flexWrap: 'wrap',
    }

}));

function Portfolio() {
    const classes = useStyles();
    return (
        <div>

            <Nav />

            <div id="projectsWrapper">
                <Grid container spacing={3} className={classes.gridContainer}>
                <Grid container spacing={3}>
                    
                <h1 className={classes.title}>Projects</h1>
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
                </Grid>
                </Grid>
            </div>

            <div> <Footer /> </div>

        </div>
    );
}


export default Portfolio;