import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//Icons 
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FavoriteIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';


// import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// const useStyles = makeStyles

const useStyles = makeStyles((theme) => ({
    title: {
        marginLeft: '500px',
        marginRight: '500px',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '45px',
    },

    center: {
        marginLeft: '500px',
    }
}));

    function Contact() {
    const classes = useStyles();
    return (
        <div>
            
            <div>


                <Typography classname={classes.center} variant="body3">Contact me via E-mail, Github or LinkedIn!</Typography>


                {/* <ContactForm /> */}


                <ButtonGroup
                    color="primary"
                    aria-label="contained primary button group"
                    variant="text"
                >
                    <IconButton className={classes.icons} aria-label="Github" href="https://github.com/guaaur04">
                        <FavoriteIcon />
                    </IconButton>

                    <IconButton className={classes.icons} aria-label="LinkedIn" href="https://www.linkedin.com/in/auricia-v-guardado-599883a0/">
                        <LinkedInIcon />
                    </IconButton>

                </ButtonGroup>





            </div>


            {/* <div> <Footer /> </div> */}
        </div>
    );
}

export default Contact;