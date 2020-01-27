import React from 'react';
import {makeStyles,createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {cyan, grey} from "@material-ui/core/colors";


const themes = createMuiTheme ({
    palette: {
        primary: {
            main: grey[800],
            light:grey['#ffffff'],
            dark: grey[700]
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
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

 function FooterBottom() {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={themes}>
        <div className={classes.root}>
            <AppBar position="static" color={"primary"}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
        </MuiThemeProvider>
    );
}
export default FooterBottom
