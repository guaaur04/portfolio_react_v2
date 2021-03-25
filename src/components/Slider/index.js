import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import "./style.css"; 


// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/GitHub';
// import ShareIcon from '@material-ui/icons/Link';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Slider() {
  
  // const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

return (

  <AwesomeSlider>
    <div data-src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg" />

    <div data-src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg" />

    <div data-src="https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2018/02/thumb_720_450_Jungledreamstime_l_56902828.jpg" />



    {/* <Card className={classes.root}>
          <CardHeader
            title={props.name}
          />
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Study Kanji"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="Github" href={props.github}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Live Site" href={props.live}>
              <ShareIcon />
            </IconButton>
            <IconButton
              className={(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                Next time you're here, there will be even more info.
          </Typography>
            </CardContent>
          </Collapse>
        </Card> */}




  </AwesomeSlider>
);
}