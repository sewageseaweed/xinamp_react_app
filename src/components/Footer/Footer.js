import  React from 'react';
import {makeStyles,createMuiTheme,MuiThemeProvider, Paper} from '@material-ui/core';
import {cyan, grey} from '@material-ui/core/colors';



const themes = createMuiTheme ({
    palette: {
        primary: {
            main: grey[50],
            light:grey['#ffffff'],
            dark: grey[800]
        },
        secondary: {
            main: cyan['A400'],
            light: cyan['#6effff'],
            dark: cyan['#00b2cc']

        }
    }
});

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: theme.palette.common.white,
        ...theme.mixins
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    hide: {
        display: 'none',
    },
    tinFooter: {
        backgroundColor:grey[800],
        paddingTop:2,
        marginBottom:14

    },
    tinFooterCyan: {
        backgroundColor:cyan['A700'],
        paddingTop:2,


    },
    footerPaper: {
        marginTop:50,
        backgroundColor:grey[900],
        paddingTop:20

    },
    paper:{
        backgroundColor:grey[800]
    }

}));

 const Footer = () => {
     const classes = useStyles();
    return (
        <MuiThemeProvider theme={themes}>
            <div className="AppLight">
                <div className={classes.root}>
                <Paper className={classes.paper} elevation={1}>
                    <Paper className={classes.tinFooterCyan}> </Paper>
                   <h2 className="text-center">Footer</h2>
                </Paper>
                </div>
            </div>
        </MuiThemeProvider>

    );
};
export default Footer