import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    minWidth: 250,
    backgroundColor: 'lightblue',
    borderRadius: '10px',
    margin: '1.5rem',
    position: 'relative',
    boxShadow: '0 3px 6px #999, 0 3px 6px #999',
    textAlign: 'left',
    justifyContent: 'center',
  
    // height: 'calc(100% / 4)',
    width: 'calc(100% / 3)',
    flexFlow: "row",
    flexWrap: "wrap",

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  

}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
        <Card className={classes.root}>
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
        </Card>



  );
}

