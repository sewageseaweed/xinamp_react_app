import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import {cyan, grey } from '@material-ui/core/colors';
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
import ListItemText from '@material-ui/core/ListItemText';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import DraftsTwoToneIcon from '@material-ui/icons/DraftsTwoTone';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import ContactlessTwoToneIcon from '@material-ui/icons/ContactlessTwoTone';
import EventSeatTwoToneIcon from '@material-ui/icons/EventSeatTwoTone';
import CreateNewFolderTwoToneIcon from '@material-ui/icons/CreateNewFolderTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import NewReleasesTwoToneIcon from '@material-ui/icons/NewReleasesTwoTone';


const drawerWidth = 240;

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
    backgroundColor:grey[50],
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
    padding: theme.spacing(.01),
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

function PersistentDrawerLeft() {
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
        })}>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
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
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/'><HomeWorkTwoToneIcon style={{marginRight:27}}/>HOME</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/about'><ContactlessTwoToneIcon style={{marginRight:27}}/>ABOUT</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/contact'><DraftsTwoToneIcon style={{marginRight:27}}/> CONTACT</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/events'><EventSeatTwoToneIcon style={{marginRight:27}}/>EVENTS</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/ourteam'> <GroupTwoToneIcon style={{marginRight:27}}/>OUR TEAM</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/press'><NewReleasesTwoToneIcon style={{marginRight:27}}/>PRESS</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/projects'> <AccountTreeTwoToneIcon style={{marginRight:27}}/>PROJECTS</NavLink>,
            <NavLink onClick={handleDrawerClose} className="Nav_Link" to='/resources'><CreateNewFolderTwoToneIcon style={{marginRight:27}}/> RESOURCES</NavLink>,
          ].map((text, index) => (
              <ListItem key={index}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <ContactlessTwoToneIcon /> ? <MailIcon/>: <CreateNewFolderTwoToneIcon/> }</ListItemIcon>*/}
                <ListItemText primary={text}/>
              </ListItem>
          ))}
        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      </MuiThemeProvider>
    </div>
  );
}

export default PersistentDrawerLeft
