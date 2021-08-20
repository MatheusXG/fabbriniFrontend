import React from 'react';
import { useEffect, useState  } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
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
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../../images/logo.svg';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import HeightIcon from '@material-ui/icons/Height';
import InputAdornment from '@material-ui/core/InputAdornment';
import api from '../../services/api';
import MediaControlCard from '../../components/cardUser/index'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from "@material-ui/core/AccordionActions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import ptLocale from 'date-fns/locale/pt';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,

} from '@material-ui/pickers';

import { DatePicker } from "@material-ui/pickers";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import HeightFormat from '../../components/HeightMask';
import WeightFormat from '../../components/WeightMask';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory, Link, useParams } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';
import fileDownload from "js-file-download";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Badge from '@material-ui/core/Badge';

const themeGlobal = createTheme({
  palette: {
    primary: {
      main: '#2D9CDB',
    },
    secondary: {
      main: '#44b700',
    },
  },
});

const useStylesAcordion = makeStyles((theme) => ({
  root: {
    margin: '35px',
    padding: '25px',
    background: '#F0F0F0',
    borderRadius: '15px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',   
    border: '1px solid #E0E0E0',
    overflowY: 'auto',
    height: '710px',
    '&::-webkit-scrollbar': {
      width: '9px',

    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#2D9CDB',
      borderRadius: '15px'
    }
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 500,
    fontStyle: 'normal',
    color: '#878686',
  },
}));
const Container = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center', 
    justifyContent: 'center'
  },
  button: {
    marginRight: theme.spacing(18),
    width: '50px',
    marginLeft: 'auto',
    marginBottom: '20px',
    marginTop: '12px',
  },
}));

const InputDiv1 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3, 12, 3, 16),
      width: ' 50ch',
    },
  },
  accordion: {
    background: '#E5E5E5',
  }
}));

const ImputFont = createTheme({
  typography: {
    subtitle1: {
      fontSize: 18,
      fontStyle: 'normal',
      color: '#878686',
    },
    h1: {
      fontFamily: 'Roboto',
      fontSize: 45,
      fontWeight: 400,
      color: '#000000',
      fontStyle: 'normal',
    },
  },
});

const drawerWidth = 350;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
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

const outherThemefont = createTheme({
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


function EditProntuario() {
  const classes = useStyles();
  const classesBases1 = useStylesAcordion();
  const classesDiv1 = InputDiv1();
  const classesContainer = Container();

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [ generalDateTime,           setGeneralDateTime]               = React.useState(new Date("2014-08-18T21:11:54"));
  const [ generalGroup,              setGeneralGroup]                  = React.useState('');
  const [ generalValue,              setGeneralValue]                  = React.useState('');
  // const [ generalFiles,              setGeneralFiles]                  = React.useState([]);

  
  const [ anthropDateTime,           setAnthropDateTime]               = React.useState(new Date());
  const [ anthropBirthDate,          setAnthropBirthDate]              = React.useState(new Date());
  const [ anthropSex,                setAnthropSex]                    = React.useState('');
  const [ anthropHeigth,             setAnthropHeigth]                 = React.useState('');
  const [ anthropWeigth,             setAnthropWeigth]                 = React.useState('');
  const [ anthropMemo,               setAnthropMemo]                   = React.useState('');
  // const [ anthropFiles,              setAnthropFiles]                  = React.useState('');

  const [ consultDateTime,           setConsultDateTime]               = React.useState(new Date());
  const [ consultType,               setConsultType]                   = React.useState('');
  const [ consultProfessionalId,     setConsultProfessionalId]         = React.useState('');
  const [ consultSpeciality,         setConsultSpeciality]             = React.useState('');
  const [ consultLocal,              setConsultLocal]                  = React.useState('');
  const [ consultReason,             setConsultReason]                 = React.useState('');
  const [ consultHistory,            setConsultHistory]                = React.useState('');
  const [ consultExamination,        setConsultExamination]            = React.useState('');
  const [ consultHypothesis,         setConsultHypothesis]             = React.useState('');
  const [ consultRecomendations,     setConsultRecomendations]         = React.useState('');
  const [ consultPrescription,       setConsultPrescription]           = React.useState('');
  const [ consultExamsRequest,       setConsultExamsRequest]           = React.useState('');
  const [ consultMedicalCertificate, setConsultMedicalCertificate]     = React.useState('');
  // const [ consultFiles,              setConsultFiles]                  = React.useState('');

  const [ examsType,                 setExamsType]                     = React.useState('');
  const [ examsLab,                  setExamsLab]                      = React.useState('');
  const [ examsMethod,               setExamsMethod]                   = React.useState('');
  const [ examsValue,                setExamsValue]                    = React.useState('');
  const [ examsUnit,                 setExamsUnit]                     = React.useState('');
  const [ examsReference,            setExamsReference]                = React.useState('');
  const [ examsReport,               setExamsReport]                   = React.useState('');
  // const [ examsFiles,                setExamsFiles]                    = React.useState('');


  function downloadFile(url, filename){
    axios
      .get(url, {
        responseType: "blob"
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  const [generalImageURL, setGeneralImageURL] = React.useState('');
  const [generalOriginalFileName, setGeneralOriginalFileName] = React.useState([]);
  const [generalFormatFile, setGeneralFormatFile] = React.useState([]);
  const [contGeneral, setContGeneral] = React.useState(0);
  async function handleChangeGeneralFiles(e) {
    const files = e.target.files[0]
    const formData = new FormData()
    formData.append('file', files);
    formData.append('upload_preset', 't34xjsxz')
    const res = await fetch(process.env.REACT_APP_API_CLOUDNARY_URL,  
    {
      method: 'POST',
      body: formData,
    })

    const fileResponse = await res.json()
    console.log(fileResponse)
    setGeneralImageURL(fileResponse.secure_url)
    setGeneralOriginalFileName(fileResponse.original_filename)
    setGeneralFormatFile(fileResponse.format)
    setContGeneral(contGeneral + 1)
  }

  const [anthropImageURL, setAnthropImageURL] = React.useState('');
  const [anthropOriginalFileName, setAnthropOriginalFileName] = React.useState([]);
  const [anthropFormatFile, setAnthropFormatFile] = React.useState([]);
  const [contAnthrop, setContAnthrop] = React.useState(0);
  async function handleChangeAnthropFiles(e) {
    const files = e.target.files[0]
    const formData = new FormData()
    formData.append('file', files);
    formData.append('upload_preset', 't34xjsxz')
    const res = await fetch(process.env.REACT_APP_API_CLOUDNARY_URL, 
    {
      method: 'POST',
      body: formData,
    })

    const fileResponse = await res.json()
    console.log(fileResponse)
    setAnthropImageURL(fileResponse.secure_url)
    setAnthropOriginalFileName(fileResponse.original_filename)
    setAnthropFormatFile(fileResponse.format)
    setContAnthrop(contAnthrop + 1)
  }

  const [consultImageURL, setConsultImageURL] = React.useState('');
  const [consultOriginalFileName, setConsultOriginalFileName] = React.useState([]);
  const [consultFormatFile, setConsultFormatFile] = React.useState([]);
  const [contConsult, setContConsult] = React.useState(0);
  async function handleChangeConsultFiles(e) {
    const files = e.target.files[0]
    const formData = new FormData()
    formData.append('file', files);
    formData.append('upload_preset', 't34xjsxz')
    const res = await fetch(process.env.REACT_APP_API_CLOUDNARY_URL, 
    {
      method: 'POST',
      body: formData,
    })

    const fileResponse = await res.json()
    console.log(fileResponse)
    setConsultImageURL(fileResponse.secure_url)
    setConsultOriginalFileName(fileResponse.original_filename)
    setConsultFormatFile(fileResponse.format)
    setContConsult(contConsult + 1)
  }

  const [examsImageURL, setExamsImageURL] = React.useState('');
  const [examsOriginalFileName, setExamsOriginalFileName] = React.useState([]);
  const [examsFormatFile, setExamsFormatFile] = React.useState([]);
  const [contExams, setContExams] = React.useState(0);
  async function handleChangeExamsFiles(e) {
    const files = e.target.files[0]
    const formData = new FormData()
    formData.append('file', files);
    formData.append('upload_preset', 't34xjsxz')
    const res = await fetch(process.env.REACT_APP_API_CLOUDNARY_URL, 
    {
      method: 'POST',
      body: formData,
    })

    const fileResponse = await res.json()
    console.log(fileResponse)
    setExamsImageURL(fileResponse.secure_url)
    setExamsOriginalFileName(fileResponse.original_filename)
    setExamsFormatFile(fileResponse.format)
    setContExams(contExams + 1)
  }


  const [ data,  setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true)
  const [ loadSave, setLoadSave] = React.useState(false)
  const [disable, setDisable] = React.useState(false);
  const history = useHistory();

  const { id } = useParams();
  useEffect(() => {
    async function getProntuario(){

      const response = await api.get(`/editar/prontuario/${id}`)
      setData(response.data) 
      setLoading(false)
      console.log(response)

      
      setGeneralDateTime(response.data.generalDateTime);
      setGeneralGroup(response.data.generalGroup)                  
      setGeneralValue(response.data.generalValue)                  

      setAnthropDateTime(response.data.anthropDateTime)               
      setAnthropBirthDate(response.data.anthropBirthDate)              
      setAnthropSex(response.data.anthropSex)                    
      setAnthropHeigth(response.data.anthropHeigth)                 
      setAnthropWeigth(response.data.anthropWeigth)                 
      setAnthropMemo(response.data.anthropMemo)                   

      setConsultDateTime(response.data.consultDateTime)               
      setConsultType(response.data.consultType)                   
      setConsultProfessionalId(response.data.consultProfessionalId)         
      setConsultSpeciality(response.data.consultSpeciality)             
      setConsultLocal(response.data.consultLocal)                 
      setConsultReason(response.data.consultReason)                 
      setConsultHistory(response.data.consultHistory)                
      setConsultExamination(response.data.consultExamination)            
      setConsultHypothesis(response.data.consultHypothesis)             
      setConsultRecomendations(response.data.consultRecomendations)         
      setConsultPrescription(response.data.consultPrescription)           
      setConsultExamsRequest(response.data.consultExamsRequest)           
      setConsultMedicalCertificate(response.data.consultMedicalCertificate)     

      setExamsType(response.data.examsType)                     
      setExamsLab(response.data.examsLab)                      
      setExamsMethod(response.data.examsMethod)                   
      setExamsValue(response.data.examsValue)                    
      setExamsUnit(response.data.examsUnit)                     
      setExamsReference(response.data.examsReference)                
      setExamsReport(response.data.examsReport)
    }
    setTimeout(() => getProntuario(), 1000);

  },[id]);

  async function handleSubmit(event){
    event.preventDefault();

    const data = {

      generalDateTime, 
      generalGroup, 
      generalValue,
      generalImageURL,

      anthropDateTime,          
      anthropBirthDate,        
      anthropSex,                
      anthropHeigth,
      anthropWeigth,             
      anthropMemo,
      anthropImageURL,

      consultDateTime,                       
      consultType,               
      consultProfessionalId,     
      consultSpeciality,         
      consultLocal,              
      consultReason,             
      consultHistory,            
      consultExamination,        
      consultHypothesis,         
      consultRecomendations,     
      consultPrescription,       
      consultExamsRequest,       
      consultMedicalCertificate,
      consultImageURL,

      examsType,     
      examsLab,      
      examsMethod,   
      examsValue,    
      examsUnit,     
      examsReference,
      examsReport,
      examsImageURL 

    }
    try {
      const response = await api.put(`/editar/prontuario/${id}`, data)
      console.log(response)
      setLoadSave(true)
      setDisable(true)
      const toastId = toast.loading('Salvando...');
      if (response) {
        setTimeout(() =>{
          setLoadSave(false)
          toast.dismiss(toastId);
          toast.success(`${response.data}`)
          setDisable(false)
          setTimeout(() => {
            // history.push("/prontuarios")
          }, 1500)

        }, 2500)
       
      }
      
    }
    catch(err) {
      toast.error("Erro ao salvar")
    }
  }

  
   
  return (
    <ThemeProvider theme={themeGlobal}>
      <div className={classes.root}>
      <Toaster   position="bottom-center" toastOptions={{
        success: {
          iconTheme: {
            primary: '#2D9CDB',
            secondary: 'white',
          },
        },
        className: '',
        style: {
        fontSize: '22px',
        padding: '36px',
        color: '#713200',
        width: '100%',
        height: '60px',
        marginBottom: '80px',
        },
        }}
       />
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
          <ThemeProvider theme={outherThemefont}>
            <Box mt="30px">
              <Box ml="40px">
                <Box mb="40px">
                  <Typography variant="h1">PRONTUÁRIO ELETRÔNICO</Typography>
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
          
          {/*ACCORDIONS*/}
          <div className={classesBases1.root}>
              <div style={{display: 'flex', justifyContent: 'flex-start', width: '472px', marginBottom: '35px'}}>
                {loading ? (<LinearProgress style={{width: '100%'}} />) : (<MediaControlCard data={data}/>)}
              </div>
          
           {/* Primeiro Accordion */}
            <form  onSubmit={handleSubmit}>
            <Box mb="35px">
          
                <Accordion
                  style={{ borderRadius: '12px', boxsizing: 'border-box', border: '1px solid #E0E0E0'}}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-conten"
                    id="panel1a-header"
                  >
                    <Typography className={classesBases1.heading}>
                      Entrada de Saúde
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <ThemeProvider theme={ImputFont}>
                    <Box ml="115px">
                      <Box mt="20px">
                        <Typography variant="subtitle1">
                          Insira as informações referente a queixa principal.
                        </Typography>
                      </Box>
                    </Box>
                  </ThemeProvider>

                  {/* GENERAL ACCORDION */}
                  <section className={classesContainer.root}>
                    <div className={classesDiv1.root}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
                            <KeyboardDatePicker
                              label="Data de hoje"
                              inputVariant="outlined"
                              margin="normal"
                              id="generalDateTime"
                              name="generalDateTime"
                              value={generalDateTime}
                              onChange={date => setGeneralDateTime(date)}
                              format="dd/MM/yyyy"
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                          </MuiPickersUtilsProvider>

                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            Sexo
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="generalGroup"
                            name="generalGroup"
                            value={generalGroup}
                            onChange={e => setGeneralGroup(e.target.value)}
                            label="Sexo"
                          >
                            <MenuItem>
                              <em>-</em>
                            </MenuItem>
                            <MenuItem value={'Masculino'}>Masculino</MenuItem>
                            <MenuItem value={'Feminino'}>Feminino</MenuItem>
                          </Select>
                        </FormControl>

                        <TextField
                          label="Observações"
                          variant="outlined"
                          id="generalValue"
                          name="generalValue"
                          value={generalValue}
                          onChange={e => setGeneralValue(e.target.value)}
                          type="text"
                          placeholder="Insira alguma observação aqui"
                          multiline
                          rows={3}                       
                        />
                        
                        <TextField
                          id="generalFiles"
                          name="generalFiles"
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={handleChangeGeneralFiles}
                          InputProps={{
                            startAdornment: (
                              <IconButton position="start" style={{marginRight: '15px'}} type="button" onClick={() => {downloadFile(generalImageURL,`${generalOriginalFileName}.${generalFormatFile}`)}}>
                                <Badge badgeContent={contGeneral} color="secondary" variant="standard">
                                  <CloudDownloadIcon color="primary" />
                                </Badge>
                              </IconButton>
                              ),
                            }}
                          />
                         
                    </div>                 
                  </section>
                </Accordion>
            </Box>
            
            {/* Segundo Accordion */}
              <Box mb="35px">

                  <Accordion
                    style={{ borderRadius: '12px', boxsizing: 'border-box',background: '#FFFFFF', border: '1px solid #E0E0E0'}}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography className={classesBases1.heading}>
                        Antropometria
                      </Typography>
                    </AccordionSummary>
                    <Divider />
                    <ThemeProvider theme={ImputFont}>
                      <Box ml="115px">
                        <Box mt="20px">
                          <Typography variant="subtitle1">
                            Insira as informações referente a antropometria.
                          </Typography>
                        </Box>
                      </Box>
                    </ThemeProvider>

                    {/* ANTHROPOMETRY ACCORDION */}
                    <section className={classesContainer.root}>
                        <div className={classesDiv1.root}>
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              label="Data de hoje"
                              inputVariant="outlined"
                              margin="normal"
                              id="anthropDateTime"
                              name="anthropDateTime"
                              value={anthropDateTime}
                              onChange={date => setAnthropDateTime(date)}
                              format="dd/MM/yyyy"
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                          </MuiPickersUtilsProvider>

                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              label="Data de aniversário"
                              inputVariant="outlined"
                              margin="normal"
                              id="anthropBirthDate"
                              name="anthropBirthDate"
                              value={anthropBirthDate}
                              onChange={date => setAnthropBirthDate(date)}
                              helperText="*Insira a data de seu nascimento*"
                              format="dd/MM/yyyy"
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                          </MuiPickersUtilsProvider>

                          <TextField
                            label="Sexo de nascimento"
                            id="anthropSex"
                            name="anthropSex"
                            value={anthropSex}
                            onChange={e => setAnthropSex(e.target.value)}
                            type="text"
                            variant="outlined"
                         />
                                 
                          <TextField
                            label="Altura"
                            id="anthropHeigth"
                            name="anthropHeigth"
                            value={anthropHeigth}
                            onChange={e => setAnthropHeigth(e.target.value)}
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <HeightIcon />
                                </InputAdornment>
                              ),
                              inputComponent: HeightFormat,
                            }}
                          />

                          <TextField
                            label="Peso"
                            id="anthropWeigth"
                            name="anthropWeigth"
                            value={anthropWeigth}
                            onChange={e => setAnthropWeigth(e.target.value)}
                            variant="outlined"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                              inputComponent: WeightFormat
                            }}
                          />

                          <TextField
                            label="Circunferência abdominal"
                            id="anthropMemo"
                            name="anthropMemo"
                            value={anthropMemo}
                            onChange={e => setAnthropMemo(e.target.value)}
                            variant="outlined"
                            type="text"
                            multiline
                            rows={3} 
                          />

                          <TextField
                            helperText="*Faça o upload de alguma imagem*"
                            variant="outlined"
                            id="anthropFiles"
                            name="anthropFiles"
                            type="file"
                            accept="image/png,image/jpeg"
                            onChange={handleChangeAnthropFiles}
                            InputProps={{
                              startAdornment: (
                                  <IconButton position="start" style={{marginRight: '25px'}} type="button" onClick={() => {downloadFile(anthropImageURL,`${anthropOriginalFileName}.${anthropFormatFile}`)}}>
                                    <Badge badgeContent={contAnthrop} color="secondary" variant="standard">
                                      <CloudDownloadIcon color="primary" />
                                    </Badge>
                                  </IconButton>
                              ),
                            }}
                          />
                        </div>
                    </section>
                  </Accordion>
              </Box>
            
            {/* Terceiro Accordion */}
            <Box mb="35px">
              
                <Accordion
                  style={{ borderRadius: '12px', boxsizing: 'border-box', background: '#FFFFFF',  border: '1px solid #E0E0E0'}}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-conten"
                    id="panel3a-header"
                  >
                    <Typography className={classesBases1.heading}>
                      Consulta
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <ThemeProvider theme={ImputFont}>
                    <Box ml="115px">
                      <Box mt="20px">
                        <Typography variant="subtitle1">
                          Insira as informações referente a consulta.
                        </Typography>
                      </Box>
                    </Box>
                  </ThemeProvider>
                  
                  {/* CONSULT ACCORDION */}
                  <section className={classesContainer.root}>
                      <div className={classesDiv1.root}>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                          label="Data da Consulta"
                          id="consultDateTime"
                          name="consultDateTime"
                          value={consultDateTime}
                          onChange={date => setConsultDateTime(date)}
                          disableFuture
                          inputVariant="outlined"
                          openTo="year"
                          format="dd/MM/yyyy"
                          views={["date", "month", "year"]}
                        />
                      </MuiPickersUtilsProvider>
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <InputLabel id="demo-simple-select-outlined-label2">
                            Tipo da consulta
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label2"
                            label="Tipo da consulta"
                            id="consultType"
                            name="consultType"
                            value={consultType}
                            onChange={e => setConsultType(e.target.value)}
                          >
                            <MenuItem>
                              <em>-</em>
                            </MenuItem>
                            <MenuItem value={'Primeira Consulta'}> Primeira Consulta</MenuItem>
                            <MenuItem value={'Retorno'}>Retorno</MenuItem>
                            <MenuItem value={'Pré-natal'}>Pré-natal</MenuItem>
                            <MenuItem value={'Por encaminhamento'}>Por encaminhamento</MenuItem>
                          </Select>
                        </FormControl>

                        <TextField
                          label="CRM do médico"
                          variant="outlined"
                          id="consultProfessionalId"
                          name="consultProfessionalId"
                          value={consultProfessionalId}
                          onChange={e => setConsultProfessionalId(e.target.value)}
                          type="number"
                          placeholder="Insira o CRM do médico"
                        />

                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <InputLabel id="demo-simple-select-outlined-label3">
                            Especialidade Médica
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label3"
                            label="Especialidade médica"
                            id="consultSpeciality"
                            name="consultSpeciality"
                            value={consultSpeciality}
                            onChange={e => setConsultSpeciality(e.target.value)}
                          >
                            <MenuItem>
                              <em>-</em>
                            </MenuItem>
                            <MenuItem value={'Cardiologia'}>Cardiologia</MenuItem>
                            <MenuItem value={'Dermatologia'}>Dermatologia</MenuItem>
                            <MenuItem value={'Ginecologia e Obstetrícia'}>Ginecologia e Obstetrícia</MenuItem>
                            <MenuItem value={'Ortopedia'}>Ortopedia</MenuItem>
                          </Select>
                        </FormControl>

                        <TextField
                          label="Local da consulta"
                          variant="outlined"
                          id="consultLocal"
                          name="consultLocal"
                          value={consultLocal}
                          onChange={e => setConsultLocal(e.target.value)}
                          type="text"
                          placeholder="Insira o local da consulta"
                        />

                        <TextField
                          label="Motivo da consulta"
                          variant="outlined"
                          id="consultReason"
                          name="consultReason"
                          value={consultReason}
                          onChange={e => setConsultReason(e.target.value)}
                          type="text"
                          multiline
                          rows={2}
                          placeholder="Descreva o motivo da consulta"
                        
                        />

                        <TextField
                          label="Histórico da consulta"
                          variant="outlined"
                          id="consultHistory"
                          name="consultHistory"
                          value={consultHistory}
                          onChange={e => setConsultHistory(e.target.value)}
                          type="text"
                          multiline
                          rows={2}
                          placeholder="Descreva o histórico da consulta"
                        />

                        <TextField
                          label="Exames da consulta"
                          variant="outlined"
                          id="consultExamination"
                          name="consultExamination"
                          value={consultExamination}
                          onChange={e => setConsultExamination(e.target.value)}
                          type="text"
                          multiline
                          rows={2}
                          placeholder="Descreva o Exames da consulta"
                        />

                        <TextField
                          label="Hipótese diagnóstica da consulta"
                          variant="outlined"
                          id="consultHypothesis"
                          name="consultHypothesis"
                          value={consultHypothesis}
                          onChange={e => setConsultHypothesis(e.target.value)}
                          type="text"
                          multiline
                          rows={2}
                          placeholder="Descreva as hipóteses diagnósticas da consulta"
                        />

                        <TextField
                          label="Recomendações da consulta"
                          variant="outlined"
                          id="consultRecomendations"
                          name="consultRecomendations"
                          value={consultRecomendations}
                          onChange={e => setConsultRecomendations(e.target.value)}
                          type="text"
                          multiline
                          rows={2}
                          placeholder="Descreva as recomendações médicas que o paciente devera seguir após a consulta"
                        /> 

                        <TextField
                          label="Prescrições da consulta"
                          variant="outlined"
                          id="consultPrescription"
                          name="consultPrescription"
                          value={consultPrescription}
                          onChange={e => setConsultPrescription(e.target.value)}
                          type="text"
                          multiline
                          rows={2}
                          placeholder="Descreva as prescrições médicas do paciente"                       
                        />

                        <TextField
                          label="Solicitação para exame"
                          variant="outlined"
                          id="consultExamsRequest"
                          name="consultExamsRequest"
                          value={consultExamsRequest}
                          onChange={e => setConsultExamsRequest(e.target.value)}
                          type="text"
                          multiline
                          rows={2}
                          placeholder="Justifique a soliticação"
                        /> 

                        <TextField
                          label="Certificado médico"
                          variant="outlined"
                          id="consultMedicalCertificate"
                          name="consultMedicalCertificate"
                          value={consultMedicalCertificate}
                          onChange={e => setConsultMedicalCertificate(e.target.value)}
                          type="text"
                          multiline
                          rows={2}
                          placeholder="Informe o certificado médico"
                        />
                        <TextField
                          helperText="*Faça o upload de alguma imagem*"
                          variant="outlined"
                          id="consultFiles"
                          name="consultFiles"
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={handleChangeConsultFiles}
                          InputProps={{
                            startAdornment: (
                              <IconButton position="start" style={{marginRight: '25px'}} type="button" onClick={() => {downloadFile(consultImageURL,`${consultOriginalFileName}.${consultFormatFile}`)}}>
                                <Badge badgeContent={contConsult} color="secondary" variant="standard">
                                  <CloudDownloadIcon color="primary"/>
                                </Badge>
                              </IconButton>
                            ),
                          }}
                        />         
                      </div>                    
                  </section>
                </Accordion>
            </Box>
            <Box mb="35px">

                <Accordion
                  style={{ borderRadius: '12px', boxsizing: 'border-box',  border: '1px solid #E0E0E0'}}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-conten"
                    id="panel4a-header"
                  >
                    <Typography className={classesBases1.heading}>
                      Exames
                    </Typography>
                  </AccordionSummary>
                  <Divider />
                  <ThemeProvider theme={ImputFont}>
                    <Box ml="115px">
                      <Box mt="20px">
                        <Typography variant="subtitle1">
                          Insira as informações referente aos exames.
                        </Typography>
                      </Box>
                    </Box>
                  </ThemeProvider>


                  {/* EXAMS ACCORDION */}
                  <section className={classesContainer.root}>
                      <div className={classesDiv1.root}>

                        <TextField
                          label="Tipo de exame"
                          variant="outlined"
                          id="examsType"
                          name="examsType"
                          value={examsType}
                          onChange={e => setExamsType(e.target.value)}
                          type="text"
                          placeholder="Insira alguma observação aqui"
                          multiline
                          rows={2}                       
                        />
                        <TextField
                          label="Exame laboratoriais"
                          variant="outlined"
                          id="examsLab"
                          name="examsLab"
                          value={examsLab}
                          onChange={e => setExamsLab(e.target.value)}
                          type="text"
                          placeholder="Insira alguma observação aqui"
                          multiline
                          rows={2}                       
                        />
                        <TextField
                          label="Método do exame"
                          variant="outlined"
                          id="examsMethod"
                          name="examsMethod"
                          value={examsMethod}
                          onChange={e => setExamsMethod(e.target.value)}
                          type="text"
                          placeholder="Insira alguma observação aqui"
                          multiline
                          rows={2}                       
                        />
                        <TextField
                          label="Valor do exame"
                          variant="outlined"
                          id="examsValue"
                          name="examsValue"
                          value={examsValue}
                          onChange={e => setExamsValue(e.target.value)}
                          type="number"
                          placeholder="Insira o valor referente ao exame"
                        />
                        <TextField
                          label="Unidade de exame"
                          variant="outlined"
                          id="examsUnit"
                          name="examsUnit"
                          value={examsUnit}
                          onChange={e => setExamsUnit(e.target.value)}
                          type="text"
                          multiline
                          rows={2} 
                          placeholder="Insira o valor referente ao exame"
                        />
                        <TextField
                          label="Referência para exame"
                          variant="outlined"
                          id="examsReference"
                          name="examsReference"
                          value={examsReference}
                          onChange={e => setExamsReference(e.target.value)}
                          type="text"
                          multiline
                          rows={2} 
                          placeholder="Insira o valor referente ao exame"
                        />
                        <TextField
                          label="Relatório de exame"
                          variant="outlined"
                          id="examsReport"
                          name="examsReport"
                          value={examsReport}
                          onChange={e => setExamsReport(e.target.value)}
                          type="text"
                          multiline
                          rows={3} 
                          placeholder="Insira o valor referente ao exame"
                        />
                         <TextField
                          helperText="*Faça o upload de alguma imagem*"
                          variant="outlined"
                          id="examsFiles"
                          name="examsFiles"
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={handleChangeExamsFiles}
                          InputProps={{
                            startAdornment: (
                              <IconButton position="start" style={{marginRight: '25px'}} type="button" onClick={() => {downloadFile(examsImageURL,`${examsOriginalFileName}.${examsFormatFile}`)}}>
                                <Badge badgeContent={contExams} color="secondary" variant="standard">
                                  <CloudDownloadIcon color="primary"/>
                                </Badge>
                              </IconButton>
                            ),
                          }}
                        /> 
                      </div>
                  </section>
                </Accordion>
            </Box>
                <AccordionActions>
                  <Button
                    id="buttonGlobalForm"
                    size="large"
                    variant="contained"
                    // startIcon={<SaveIcon fontSize="30"/>}
                    style={{
                      borderRadius: '6px',
                      fontSize: '20px',
                    }}
                  > 
                  VOLTAR
                </Button>
                <Button
                    id="buttonGlobalForm"
                    type="submit"
                    size="large"
                    variant="contained"
                    color="primary"
                    // startIcon={<SaveIcon fontSize="30"/>}
                    style={{
                      width: "230px",
                      height: "60px",
                      borderRadius: '6px',
                      fontSize: '20px',
                      

                    }}
                    disabled={disable}                    
                  > 
                    {loadSave ? <><CircularProgress disableShrink  style={{color: '#2D9CDB'}} />&nbsp;&nbsp;&nbsp;Salvando...</> : "SALVAR"}
                </Button>
              </AccordionActions>
            </form>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
export default EditProntuario;
