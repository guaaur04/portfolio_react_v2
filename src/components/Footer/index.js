import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import FavoriteIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright ©'}
      <Link color="inherit" href="https://material-ui.com/">
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    minHeight: '30vh',
    bottom: 0,
  },

  footer: {
    position: 'static',
    width: '100%',
    padding: theme.spacing(2, 2),
    marginTop: '0 auto',
    paddingBottom: '2.5 rem',
    minHeight: '50vh',
    color: theme.palette.getContrastText("#59A5D8"),
    backgroundColor: "#59A5D8",
    '&:hover': {
      backgroundColor: "#CACFEF",

     
    },

    display: 'flex',

  },

  // links:{
  //   float: 'right',
  // },

  //Change icon color from red
  icons:{
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
      // width: '100%',
    },
  
  },

  content: {
    marginLeft: 250,
    width: 'auto',
  }

}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm" className={classes.content}>
          <Typography variant="h3">Auricia V Guardado </Typography>
          <Typography variant="h6">Full Stack Web Developer</Typography>

          <Typography variant="body3">Powered by React and Material UI</Typography>

          <Copyright />
            
        </Container>

        <Container className={classes.content}>
    
        <img src="https://media.giphy.com/media/py5qVYNFWCXpXKzcnk/giphy.gif" alt="glastrier" width="100" height="100"></img>

        </Container>
      </footer>
    </div>
  );
}