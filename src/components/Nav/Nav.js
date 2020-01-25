import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import {blue, grey } from '@material-ui/core/colors';
import { NavLink} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const themes = createMuiTheme ({
    palette: {
        primary: {
          main: grey[900],
          light: grey[400],
          dark: grey[800]
        },
        secondary: {
          main: blue['A700'],
          light: blue['A400'],
          dark: blue[900]
            
        }
      }
})
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:grey[900],
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
    <MuiThemeProvider theme ={themes}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="secondary" noWrap>
            XINAMPA
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        color="secondary"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
          [
            <NavLink  onClick={handleDrawerClose} className="Nav_Link" to='/'>HOME</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/about'>ABOUT</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/contact'>CONTACT</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/events'>EVENTS</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/ourteam'>OUR TEAM</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/press'>PRESS</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/projects'>PROJECTS</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/resources'>RESOURCES</NavLink>,

          ].map((text, index) => (
              <ListItem key={index}>
                <ListItemText primary={text}/>
              </ListItem>
          ))}
        </List>
        <Divider />
        {/*<List>*/}
        {/*  {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
        {/*    <ListItem button key={text}>*/}
        {/*      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
        {/*      <ListItemText primary={text} />*/}
        {/*    </ListItem>*/}
        {/*  ))}*/}
        {/*</List>*/}
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Typography paragraph>

        </Typography>
        <Typography paragraph>
          
        </Typography> */}
      </main>
      </MuiThemeProvider>
    </div>
  );
}
