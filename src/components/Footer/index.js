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
    minHeight: '100vh',
    bottom: 0,
  },

  footer: {
    position: 'static',
    width: '100%',
    padding: theme.spacing(2, 2),
    marginTop: '0 auto',
    paddingBottom: '2.5 rem',
    minHeight: '50vh',
    color: theme.palette.getContrastText("#598392"),
    backgroundColor: "#598392",
    '&:hover': {
      backgroundColor: "#59A5D8",
    },

    display: 'flex',

  },

  links:{
    float: 'right',
  },

  icons:{
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
      // width: '100%',
    },
  
  },

}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">V Guardado 👨🏾‍💻 </Typography>

          <Copyright />

          <Typography variant="body3">Powered by React and Material UI</Typography>

          <Typography variant="body3">"A lost ship, steered by tired, seasick sailors, can still be guided to port." ― Assata Shakur</Typography>

        </Container>

        <Container>
        
        {/* <Typography variant="body3">Stay Connected</Typography> */}

        <ButtonGroup
                    color="primary"
                    aria-label="contained primary button group"
                    variant="text"
                    className = {classes.links}
                    // orientation="vertical"
                > 
                    <IconButton className={classes.icons} aria-label="Github" href="https://github.com/guaaur04">
                        <FavoriteIcon />
                    </IconButton>

                    <IconButton className={classes.icons} aria-label="LinkedIn" href="https://www.linkedin.com/in/auricia-v-guardado-599883a0/">
                        <LinkedInIcon />
                    </IconButton>

                    <IconButton className={classes.icons} aria-label="Twitter" href="https://twitter.com/V88118935">
                        <TwitterIcon />
                    </IconButton>


          </ButtonGroup>

        
        
        
        </Container>
      </footer>
    </div>
  );
}