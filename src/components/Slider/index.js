import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css"; 


const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-around',
    margin: 'auto',
    marginLeft: '5em',
    maxWidth: 800,
    minWidth: 800,
    height: 400,
  }

}));


export default function Slider() {
  const classes = useStyles();
return (

  <AwesomeSlider className ={classes.root}>
    <div data-src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg">Full-Stack Developer </div>

    <div data-src="../images/la_libertad_saul_guardado.jpg" />

    <div data-src="../images/unsplash_chip_image.jpg" />

    <div data-src="../images/unsplash_copan_ruinas.jpg" />

    <div data-src="../images/unsplash_star.jpg" />


  </AwesomeSlider>
);
}