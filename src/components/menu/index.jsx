import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HelpIcon from '@material-ui/icons/Help';
import MoreIcon from '@material-ui/icons/More';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../../images/logo.svg';


const drawerWidth = 310;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
  },
  appBar: {
    background: '#FFFFFF',
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
    color: 'black',
  },
  menuButton2: {
    marginRight: theme.spacing(-2),
    marginLeft: 'auto',
    color: 'black',
  },
  hide: {
    display: 'block',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 0,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -310,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  primary: {
    color: '#878686',
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontweight: 'normal',
    '&:hover': {
      color: '#0071BC',
      fontWeight: 'bold',
    },
  },
}));

const outherThemefont = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Roboto',
      fontSize: 35,
      fontWeight: 400,
      color: '#000000',
      fontStyle: 'normal',
    },
  },
});

function Menu() {
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
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="initial"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
             color="initial"
             aria-label="exit"
             edge="start"
            className={clsx(classes.menuButton2, open && classes.hide)}
            >
              <ExitToAppIcon style={{ color: 'black' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <img src={logo} alt="Logo do Fabbrini"></img>
          <Divider />
          <List style={{textAlign: 'center'}}>
            {[
              'DASHBOARD',
              'PROFISSIONAIS',
              'PACIENTES',
              'AGENDA',
              'PRONTUÁRIO',
              'AJUDA',
              'SOBRE',
            ].map((text, index) => (
              <ListItem button key={text} divider style={{padding: '30px'}}>
                <ListItemIcon >
                  {index === 0 ? (
                    <DashboardIcon style={{ color: '#0071BC', }} />
                  ) : (
                    ''
                  )}
                  {index === 1 ? (
                    <PeopleIcon style={{ color: '#0071BC' }} />
                  ) : (
                    ''
                  )}
                  {index === 2 ? (
                    <LocalHospitalIcon style={{ color: '#0071BC' }} />
                  ) : (
                    ''
                  )}
                  {index === 3 ? <EventIcon style={{ color: '#0071BC' }} /> : ''}
                  {index === 4 ? (
                    <AssignmentIndIcon style={{ color: '#0071BC' }} />
                  ) : (
                    ''
                  )}
                  {index === 5 ? <HelpIcon style={{ color: '#0071BC' }} /> : ''}
                  {index === 6 ? <MoreIcon style={{ color: '#0071BC' }} /> : ''}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  primary={text}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <ThemeProvider theme={outherThemefont}>
            <Box mt="30px">
              <Box ml="40px">
                <Box mb="40px">
                  <Typography variant="h1">PRONTUÁRIO</Typography>
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
            
       </main> */}
      </div>

  );
}
export default Menu;
