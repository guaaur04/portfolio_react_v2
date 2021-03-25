import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import FavoriteIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';



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
    flexDirection: 'column',
    minHeight: '100vh',
  },
//   main: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(2),
//   },

  footer: {
    position: 'relative',
    padding: theme.spacing(2, 2),
    marginTop: '0 auto',
    paddingBottom: '2.5 rem',
    minHeight: '75vh',
    color: theme.palette.getContrastText("#598392"),
    backgroundColor: "#598392",
    '&:hover': {
      backgroundColor: "salmon",
    },
  },

  links:{
    float: 'right',
    // color: 'black',
  }
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
        </Container>
        <Container>
        <Typography variant="body3">"A lost ship, steered by tired, seasick sailors, can still be guided to port." ― Assata Shakur</Typography>
        
        {/* <Typography variant="body3">Contact me!</Typography> */}

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

                </ButtonGroup>

        
        
        
        </Container>
      </footer>
    </div>
  );
}