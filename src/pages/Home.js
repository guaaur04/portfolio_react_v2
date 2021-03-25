import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Contact from "../components/Contact";

import Paper from '@material-ui/core/Paper';


function Home() {
    return (
    <div>

     <Nav />

    <Paper elevation={3}>Full-Stack Developer</Paper>



    
    <Contact />

    {/* <Slider /> */}

    <Footer />

    </div>

    );
}

export default Home; 