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
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image, Svg } from '@react-pdf/renderer';
import Button from '@material-ui/core/Button';

//API
import api from '../../services/api';
import { getHours } from 'date-fns/esm';


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

  // const strDateHourGeneral = data?.generalDateTime;
  // const dateGeneral = strDateHourGeneral?.substring(0, 10); 
  // const hourGeneral = strDateHourGeneral?.substring(11, 19); 
  // const dateG = dateGeneral?.split('-')
  // const hourG = hourGeneral?.split(':')

  // const strDateHourAnthrop = data.anthropDateTime;
  // const dateAnthrop = strDateHourAnthrop?.substring(0, 10); 
  // const hourAnthrop = strDateHourAnthrop?.substring(11, 19); 
  // const dateA = dateAnthrop?.split('-')
  // const hourA = hourAnthrop?.split(':')

  // const strDateHourConsult = data.consultDateTime;
  // const dateConsult = strDateHourConsult?.substring(0, 10); 
  // const hourConsult = strDateHourConsult?.substring(11, 19); 
  // const dateC = dateConsult?.split('-')
  // const hourC = hourConsult?.split(':')

  // const strDateHourBirth = data.anthropBirthDate;
  // const dateBirth = strDateHourBirth?.substring(0, 10); 
  // const hourBirth = strDateHourBirth?.substring(11, 19); 
  // const dateB = dateBirth?.split('-')
  // const hourB = hourBirth?.split(':')

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
                    {/* <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Data e Hora da entrada:</Text>{`${dateG[1]}/${dateG[1]}/${dateG[0]} - ${hourG[0]}:${hourG[1]}:${hourG[2]}`}</Text> */}
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Sexo:</Text> {data.generalGroup}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Observações:</Text> {data.generalValue}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Upload da entrada de sáude:</Text> <a href="#entrada-saude" style={{textDecoration: 'underline', color: '#0071BC'}}>visualizar</a></Text>
                    <Text style={styles.textCampoName}>
                     Dados Antropômetricos:
                    </Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Data e Hora da antropometria:</Text></Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Data de Aniversário:</Text> </Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Sexo de Nascimento:</Text> {data.anthropSex}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Altura:</Text> {data.anthropHeigth}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Peso:</Text> {data.anthropWeigth}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Cirucunferência Abdominal:</Text> {data.anthropMemo}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Upload da Antropometria:</Text> <a href="#anthrop" style={{textDecoration: 'underline', color: '#0071BC'}}>visualizar</a></Text>
                    <Text style={styles.textCampoName}>
                     Prescrições da Consulta:
                    </Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Data e Hora da Consulta:</Text> </Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Tipo da Consulta:</Text> {data.consultType}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Matrícula do médico:</Text> {data.consultProfessionalId}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Especialidade Médica:</Text> {data.consultSpeciality}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Local de Antendimento:</Text> {data.consultLocal}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Motivo da Consulta:</Text> {data.consultReason}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Histórico da Consulta:</Text> {data.consultHistory}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Exames da Consulta:</Text> {data.consultExamination}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16,  marginTop: '100px'}}><Text style={{color: '#0B0101'}}>Hipótese da Consulta:</Text> {data.consultHypothesis}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Recomendações da Consulta:</Text> {data.consultRecomendations}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Prescrições da Consulta:</Text> {data.consultPrescription}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Solicitação de exames da Consulta:</Text> {data.consultExamsRequest}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Certificado Médico:</Text> {data.consultMedicalCertificate}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Upload da Consulta:</Text> <a href="#consulta" style={{textDecoration: 'underline', color: '#0071BC'}}>visualizar</a></Text>
                    <Text style={styles.textCampoName}>
                     Exames:
                    </Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Tipo do Exame:</Text> {data.examsType}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Exames Laboratoriais:</Text> {data.examsLab}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Método do Exame:</Text> {data.examsMethod}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Valor do Exame:</Text> {data.examsValue}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Unidade de Exame:</Text> {data.examsUnit}</Text>
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Relatório do Exame:</Text> {data.examsReport}</Text>  
                    <Text style={{marginHorizontal: 20, fontSize: 16}}><Text style={{color: '#0B0101'}}>Upload do Exame:</Text> <a href="#exames" style={{textDecoration: 'underline', color: '#0071BC'}}>visualizar</a></Text>                
                  </View>
                </Page>
                <Page size="A4">
                  <View style={styles.container}>
                    <Text style={styles.textCampoName} id="entrada-saude">Upload da entrada de Saúde: </Text>
                    {data.generalImageURL ? (
                        <>
                          <Text  style={{marginHorizontal: 20, fontSize: 16}}>
                            <a href={data.generalImageURL} style={{textDecoration: 'underline'}}>
                              visualizar imagem em tamanho maior
                            </a>
                          </Text>
                          <Image src={data.generalImageURL} alt="Logo do Fabbrini" style={{marginTop: '10%', width: '100%'}} />
                        </>
                      ) : (
                        <Text>Nenhum resultado encontrado</Text>
                      )}   
                  </View>
                </Page>
                <Page size="A4">
                  <View style={styles.container}>
                    <Text style={styles.textCampoName} id="anthrop">Upload da antropometria: </Text>
                      {data.anthropImageURL ? (
                        <>
                          <Text  style={{marginHorizontal: 20, fontSize: 16}}>
                            <a href={data.anthropImageURL} style={{textDecoration: 'underline'}}>
                              visualizar imagem em tamanho maior
                            </a>
                          </Text>
                          <Image src={data.anthropImageURL} alt="Logo do Fabbrini" style={{marginTop: '10%', width: '100%'}} />
                        </>
                      ) : (
                        <Text>Nenhum resultado encontrado</Text>
                      )}   
                  </View>
                </Page>
              <Page size="A4">
                  <View style={styles.container}>
                    <Text style={styles.textCampoName} id="consulta">Upload da consulta: </Text>
                      {data.consultImageURL ? (
                        <>
                          <Text  style={{marginHorizontal: 20, fontSize: 16}}>
                            <a href={data.consultImageURL} style={{textDecoration: 'underline'}}>
                              visualizar imagem em tamanho maior
                            </a>
                          </Text>
                          <Image src={data.consultImageURL} alt="Logo do Fabbrini" style={{marginTop: '10%', width: '100%'}} />
                        </>
                      ) : (
                        <Text>Nenhum resultado encontrado</Text>
                      )}   
                  </View>
                </Page>
                <Page size="A4">
                  <View style={styles.container}>
                    <Text style={styles.textCampoName} id="exames">Upload da antropometria: </Text>
                      {data.examsImageURL ? (
                        <>
                          <Text  style={{marginHorizontal: 20, fontSize: 16}}>
                            <a href={data.examsImageURL} style={{textDecoration: 'underline'}}>
                              visualizar imagem em tamanho maior
                            </a>
                          </Text>
                          <Image src={data.examsImageURL} alt="Logo do Fabbrini" style={{marginTop: '10%', width: '100%'}} />
                        </>
                      ) : (
                        <Text>Nenhum resultado encontrado</Text>
                      )}   
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
