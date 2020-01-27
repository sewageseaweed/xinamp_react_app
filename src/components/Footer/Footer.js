import  React from 'react';
import {makeStyles,createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {Paper, Typography} from "@material-ui/core";
import {cyan, grey} from '@material-ui/core/colors';
import {Container, Row, Col} from 'react-bootstrap'




const themes = createMuiTheme ({
    palette: {
        primary: {
            main: grey[900],
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
    },
    hide: {
        display: 'none',
    },
    paper:{
        backgroundColor:grey[900]

    },
    tinFooter: {
        backgroundColor:grey[900],
        paddingTop:2,
        paddingBottom:20
    },
    bottomFooter: {
        backgroundColor:"#1C1919",
        paddingTop:10,
        paddingBottom:5
    },
    tinFooterCyan: {
        backgroundColor:cyan['A700'],
        paddingTop:2,
    },
    tinFooterGrey: {
        backgroundColor:grey[700],
        paddingTop:2,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    footerPaper: {
        marginTop:50,
        backgroundColor:grey[700],
        paddingTop:20
    },


}));

 function Footer() {
     const classes = useStyles();

    return (
        <div className="AppLight">
        <MuiThemeProvider theme={themes}>
                <div className={classes.root}>
                <Paper variant={"outlined"} square className={classes.paper}>
                    <Paper square className={classes.tinFooter}></Paper>
                    <Paper  className={classes.tinFooterGrey}></Paper>
                    <Container fluid>
                        <Row>
                            <Col md={4} style={{paddingTop:20,paddingBottom:20,paddingLeft:40}} className={"text-left"}>
                                <Typography variant={"h6"} color={"secondary"}>XINAMPA</Typography>
                                <Typography variant={"subtitle1"}style={{ color:grey[600]}} > 1234 Address Ave</Typography>
                                <Typography variant={"subtitle1"} style={{ color:grey[600]}}>Salinas, Ca 93906</Typography>
                            </Col>
                            <Col style={{paddingTop:20}}>
                            </Col>
                            <Col md={4} className={"text-center"} style={{paddingTop:20,paddingRight:20}} >
                                <Typography variant={"h6"} color={"secondary"}>STAY CONNECTED
                                </Typography>
                                <Typography variant={"subtitle1"}>
                                    <i style={{paddingRight:10,cursor:"pointer",color:"#3b5998"}}  className="fab fa-facebook "></i>
                                    <i style={{paddingRight:10,cursor:"pointer",color:"#E4405F"}}  className="fab fa-instagram "></i>
                                    <i style={{paddingRight:10,cursor:"pointer",color:"#38A1F3"}}  className="fab fa-twitter-square"></i>
                                    <i style={{paddingRight:10,cursor:"pointer",color:"#ffff"}}  className="fab fa-github-square"></i>
                                </Typography>
                            </Col>
                        </Row>
                    </Container>
                </Paper>
                    <Paper square className={classes.bottomFooter} >
                        <Container fluid>
                            <Row>
                                <Col md={4} className={"text-center"}>
                                    <Typography variant={"subtitle1"} style={{ color:grey[600]}}>Copyright © 2020 XINAMPA All rights reserved</Typography>
                                </Col>
                                <Col className={"text-center"}></Col>
                                <Col md={4} className={"text-center"} >
                                    <Typography variant={"subtitle1"}  style={{ color:grey[600]}}>Tech and Design - Xinampa Interns</Typography>
                                </Col>
                            </Row>
                        </Container>
                    </Paper>
                </div>
        </MuiThemeProvider>
        </div>
    );
};
export default Footer