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

//Tabs
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';

//Language 
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  //Tabs
  root: {
    flexGrow: 1,
    display: 'flex',
    position: 'center',
    marginTop: 'auto',
    margin: 'auto',
    backgroundColor: 'lightgray',
  },

  toolbar: {
    minHeight: 300,
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Nav Color
    backgroundColor: "whitesmoke",
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: 'black',
  },
  mobile:{
    margin: 'auto',
    alignItems: 'flex-start',
  },

  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },

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

  //Tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Container className ={classes.navbarDisplayFlex}>
    
          {/* <Typography className={classes.title} variant="h5" noWrap>
            Placeholder Text
          </Typography> */}

          {/* Menu Button */}

     <div>

      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>

      <MenuIcon></MenuIcon>
       
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.mobile}
      >
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>More</MenuItem>
      </Menu>
    </div>

    <div>

    {/* Tabs */}
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab icon={<HomeIcon />} href="/"/> 
        <Tab label="Projects" href="/projects"/>
        <Tab label="Contact" href="/contact" />
  
      </Tabs>
    </Paper>

    </div>

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
        >
          {languages.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Container> 
        </Toolbar>
      </AppBar>
    </div>
  );
}