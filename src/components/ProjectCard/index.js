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
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    minWidth: 325,
    marginLeft: 100,
    marginBottom: 50, 
    display: 'inline-grid',
    borderRadius: '20px',
    marginTop: '1 em',
    boxShadow: '6 6px 6px #999, 6 6px 6px #999',
   


    
    // textAlign: 'left',
    // height: 'calc(100% / 6)',
    // width: 'calc(100% / 3)',
    // flexFlow: "column",
    // flexWrap: "wrap",


    
  

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    objectFit: 'fill',
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

  description: {
    color: 'black',
  }
  

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

          <Tooltip title ="Github">
            <IconButton aria-label="Github" href={props.github}>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Live Site">
            <IconButton aria-label="Live Site" href={props.live}>
              <ShareIcon />
            </IconButton>
          </Tooltip>

          </CardActions>


        </Card>



  );
}

