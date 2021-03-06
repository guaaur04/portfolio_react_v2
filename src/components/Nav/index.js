import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Menu
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';

//Tabs

import HomeIcon from '@material-ui/icons/Home';

//Language 
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  //Tabs
  root: {
    flexGrow: 1,
    // position: 'center',
    // marginTop: 'auto',
    // margin: 'auto',

  },

  tabs: {
    // backgroundColor: 'lightgray',
    fontSize: '30px',
    fontWeight: '30px',
    width: '20em',
    color: 'black',
    display: 'flex',
    position: 'relative',
    margin: 'auto',

  },

  toolbar: {
    minHeight: 10,
    height: 400,
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),

    backgroundImage: "url(" + "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" + ")",
    backgroundSize: 'auto',

    // Nav Color
    backgroundColor: "whitesmoke",

  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: 'black',
    display: 'flex',


  },
  mobile: {
    // margin: 'auto',
    alignItems: 'flex-start',
  },

  navbarDisplayFlex: {
    display: 'grid',
    gridTemplateColumns: '5fr',
    gridTemplateRows: '5fr',
    margin: 'auto',

  },

  name: {
    color: 'black',
    marginLeft: '27rem',


  }, 

  language: {
    marginLeft: 1000,
  }

}));

// Language Options
const languages = [
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'Spanish',
    label: 'Spanish',
  },
  {
    value: 'Portuguese',
    label: 'Portuguese',
  },
  {
    value: 'Mandarin',
    label: 'Mandarin',
  },
];

export default function ProminentAppBar() {
  const classes = useStyles();

  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  //Language
  const [language, setLanguage] = React.useState('English');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Container className={classes.navbarDisplayFlex}>

            <Typography variant="h3" className={classes.name}>Auricia V Guardado</Typography>

            <div>
              <Tooltip title="Open Menu">
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  <MenuIcon></MenuIcon>
                </Button>
              </Tooltip>

              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.mobile}
              >
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>


            </div>

            <div>


              {/* Tabs */}
              <div className={classes.tabs}>

                <Button icon={<HomeIcon />} href="/" className={classes.tabs}> About </Button>

                <Button label="Projects" href="/projects" className={classes.tabs}> Projects </Button>

                <Button label="Contact" href="/contact" className={classes.tabs}> Contact </Button>

              </div>

              <div>
                {/* Language */}
                <TextField
                  id="outlined-select-language-native"
                  select
                  label="Language"
                  value={language}
                  onChange={handleLanguageChange}
                  SelectProps={{
                    native: true,
                  }}
                  // helperText="Language"
                  variant="outlined"
                  className={classes.language}
                >
                  {languages.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </div>


            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}