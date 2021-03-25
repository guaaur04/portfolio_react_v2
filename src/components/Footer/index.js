import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


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
    flexDirection: 'column',
    minHeight: '100vh',
  },
//   main: {
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(2),
//   },

  footer: {
    padding: theme.spacing(2, 2),
    marginTop: '0 auto -50px',
    paddingBottom: '2.5 rem',
    minHeight: '100vh',
    color: theme.palette.getContrastText("#598392"),
    backgroundColor: "#598392",
    '&:hover': {
      backgroundColor: "#598392",
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
          {/* <Typography variant="body1">Auricia V Guardado 👨🏾‍💻 </Typography>
          <Typography variant="body2">auricia.guardado@gmail.com</Typography> */}
          <Copyright />
          <Typography variant="body3">Powered by React and Material UI</Typography>
        </Container>
        <Container>
        <Typography variant="body3">"A lost ship, steered by tired, seasick sailors, can still be guided to port." ― Assata Shakur</Typography>
        </Container>
      </footer>
    </div>
  );
}