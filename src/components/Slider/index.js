import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import { makeStyles } from '@material-ui/core/styles';
import "./style.css"; 
import ProjectCard from '../ProjectCard';


const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    position: 'relative',
    // justifyContent: 'space-around',
    margin: 'auto',
    marginBottom: '5em',
    // marginLeft: '5em',
    maxWidth: 700,
    minWidth: 500,
    height: 400,
  }

}));


const AutoplaySlider = withAutoplay(AwesomeSlider);

export default function Slider() {
  const classes = useStyles();
return (

  
  <AutoplaySlider className ={classes.root}
  play={true}
  cancelOnInteraction={false} // should stop playing on user interaction
  interval={5000}
  >
    <div data-src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg">Full-Stack Developer </div>

    <div data-src="../images/la_libertad_saul_guardado.jpg" />

    <div data-src="../images/unsplash_chip_image.jpg" />

    <div data-src="../images/unsplash_copan_ruinas.jpg" />

    <div data-src="../images/unsplash_star.jpg" />

  </AutoplaySlider>
);
}