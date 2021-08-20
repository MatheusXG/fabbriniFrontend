import React from 'react';
import { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
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
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../../images/logo.svg';
import { Link} from "react-router-dom";
import '../../styles/Global.css'
//Card
import CardProntList from '../../components/cardProntList';

//Grid
import Grid from '@material-ui/core/Grid';

//API
import api from '../../services/api';

const themeGlobal = createTheme({
  palette: {
    primary: {
      main: '#2D9CDB',
    },
  },
});


// const Font = createTheme({
//   typography: {
//     subtitle1: {
//       fontSize: 18,
//       fontStyle: 'normal',
//       color: '#878686',
//     },
//     h1: {
//       fontFamily: 'Roboto',
//       fontSize: 45,
//       fontWeight: 400,
//       color: '#000000',
//       fontStyle: 'normal',
//     },
//   },
// });

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    background: '#F0F0F0',
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


function SearchProntuario() {
  const classes = useStyles();

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Busca na API
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('http://localhost:3333/prontuarios')
      setUsers(response.data);
    }
    loadUsers()
  },[]);

  return (
    <ThemeProvider theme={themeGlobal}>
      <div className={classes.root}>
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
          <img src={logo} alt="Logo do Fabbrini" style={{ height: '150px', margin: '0 auto', marginBottom: '20px'}}></img>
          <Divider />
          <List style={{textAlign: 'center'}}>
            <Link to="/" style={{textDecoration: 'none'}}>
              <ListItem button style={{padding: '30px'}}>
                <ListItemIcon>
                  <AssignmentIndIcon style={{ color: '#0071BC'}}/>
                </ListItemIcon>
                <ListItemText primary="DASHBOARD" classes={{ primary: classes.primary }} />
              </ListItem>
            </Link>
        <Divider />    
            <Link to="/prontuarios" style={{textDecoration: 'none'}}>
              <ListItem button style={{padding: '30px'}}>
                <ListItemIcon>
                  <AssignmentIndIcon style={{ color: '#0071BC'}}/>
                </ListItemIcon>
                <ListItemText primary="PRONTUÁRIOS" classes={{ primary: classes.primary }} />
              </ListItem>
            </Link>
          <Divider /> 
            {[
              'PROFISSIONAIS',
              'PACIENTES',
              'AGENDA',
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
                  {index === 4 ? <HelpIcon style={{ color: '#0071BC' }} /> : ''}
                  {index === 5 ? <MoreIcon style={{ color: '#0071BC' }} /> : ''}
                </ListItemIcon>
                <ListItemText
                  classes={{ primary: classes.primary }}
                  primary={text}
                />
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
          <div className={classes.drawerHeader} />

          <Grid container spacing={10}  justifyContent="flex-start" alignItems="center" style={{margin: '0 auto', width: '100%'}}>
            {users.map(user => (
              <Grid item xs={4}>
                <CardProntList user={user} />
              </Grid>
            ))}
          </Grid>           
        </main>
      </div>
    </ThemeProvider>
  );
}
export default SearchProntuario;
