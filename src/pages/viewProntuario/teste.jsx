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
import logo from '../../images/logo.png';
import { Link, useParams} from "react-router-dom";
import '../../styles/Global.css'
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';

//API
import api from '../../services/api';


const themeGlobal = createTheme({
  palette: {
    primary: {
      main: '#2D9CDB',
    },
  },
});

const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
      marginHorizontal: "10%",
    },
    title: {
      marginTop: '50px',
      fontSize: 30,
      textAlign: 'center',
    },
    text: {
      marginTop: '50px',
      color: '#000000',
      fontSize: 16,
      textAlign: 'left', 
    },
    textCampoName: {
      color: '#0071BC',
      fontSize: 16,
      textAlign: 'left',
      marginBottom: '15px' ,
      marginTop: '15  px',
    },
    accordion: {
      marginTop: '24px',
      fontSize: 18,
      textAlign: 'left',
    },
    image: {
      marginHorizontal: '35%'
    }
  });


const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    
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


function Test() {
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
  const [ data,  setData] = React.useState([]);

//   const [loading, setLoading] = React.useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function getPront(){

      const response = await api.get(`/vizualizar/prontuario/${id}`)
      console.log(response)
      setData(response.data) 
    }
    getPront();
  }, [id]);



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
          <div className={classes.drawerHeader}/>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',}}>
            <div style={{display: 'flex', gap: '16px'}}>
              <Link to="/prontuarios" style={{textDecoration: 'none'}}> 
                  <Button variant="contained" color="primary" style={{marginBottom: '20px', marginTop: '5px', width: '120px', height: '35px'}}>
                      voltar
                  </Button>
              </Link>
              <Button variant="contained" color="primary" style={{marginBottom: '20px', marginTop: '5px', width: '120px', height: '35px'}} onClick={() => {window.location.reload();}}>
                Atualizar
              </Button>
            </div>
            <PDFViewer style={{width: '1500px', height: '760px', border: 'none'}}>
              <Document>
                <Page size="A4">
                  <View style={styles.container}>
                    <Image src={logo} alt="Logo do Fabbrini" style={styles.image} />
                    <Text style={styles.title}>
                      Prontuário Eletrônico
                    </Text>
                    <Text style={styles.text}>
                      <Text style={styles.textCampoName}>Paciente</Text>: {data.name}
                    </Text>
                    <Text style={styles.textCampoName}>
                     Entrada de Saúde:
                    </Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Data e Hora da entrada:</Text> {data.generalDateTime}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Sexo:</Text> {data.generalGroup}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Observações:</Text> {data.generalValue}</Text>
                    {/* <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Sexo:</Text> {data.generalGroup}</Text> */}
                    <Text style={styles.textCampoName}>
                     Dados Antropômetricos:
                    </Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Data e Hora da antropometria:</Text> {data.anthropDateTime}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Data de Aniversário:</Text> {data.anthropBirthDate}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Sexo de Nascimento:</Text> {data.anthropSex}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Altura:</Text> {data.anthropHeigth}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Peso:</Text> {data.anthropWeigth}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Cirucunferência abdominal:</Text> {data.anthropMemo}</Text>
                    <Text style={styles.textCampoName}>
                     Prescrições da Consulta:
                    </Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Data e Hora da prescrição:</Text> {data.consultDateTime}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Tipo da Consulta:</Text> {data.consultType}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Matrícula do médico:</Text> {data.consultProfessionalId}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Especialidade Médica:</Text> {data.consultSpeciality}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Local de Antendimento:</Text> {data.consultLocal}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: 'red'}}>Motivo da Consulta:</Text> {data.consultReason}</Text>
                  </View>
                </Page>
              </Document>
            </PDFViewer>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
export default Test;
