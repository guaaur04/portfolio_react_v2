import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//Icons 
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FavoriteIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import { red } from '@material-ui/core/colors';


// import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const useStyles = makeStyles

const useStyles = makeStyles((theme) => ({
    title: {
        // marginLeft: '500px',
        // marginRight: '500px',
        // marginTop: '20px',
        // marginBottom: '20px',
        fontSize: '45px',
    },

    center: {
        // marginLeft: '500px',
        position: 'fixed',
        float: 'right',

        // position: 'absolute',  
    },

    icons:{
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        '&:hover': {
          backgroundColor: red[700],
          width: '100%',
        },
      },
}));

    function Contact() {
    const classes = useStyles();
    return (
        <div>
            
            <div>


                {/* <Typography classname={classes.center} variant="body3">Contact me via E-mail, Github or LinkedIn!</Typography> */}


                {/* <ContactForm /> */}


                <ButtonGroup
                    color="primary"
                    aria-label="contained primary button group"
                    variant="text"
                    orientation="vertical"
                    className ={classes.center}
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

            </div>


            {/* <div> <Footer /> </div> */}
        </div>
    );
}

export default Contact;