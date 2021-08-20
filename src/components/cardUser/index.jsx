import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import FaceIcon from '@material-ui/icons/Face';
import CardActions from '@material-ui/core/CardActions';

// import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '15px',
    width: '100%',
    height: '130px',
    borderRadius: '15px',
    background: '#FFFFFF',
    //boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '100px',

  },
  content: {
      width: '250px',
      marginLeft: '-25px',
      marginTop: '8px',

  },
  action:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '110px',
  },
  details: {
    display: 'flex',
    width: '571px',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));


export default function MediaControlCard({data}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     
      <div className={classes.details}>
        <CardHeader
          avatar={       
              <Avatar className={classes.avatar}>
                <FaceIcon style={{background: 'white', color: '#0071BC' , fontSize: 100}}/>
              </Avatar>
          }
          title={
            <Typography style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '20px', fontStyle: 'normal', color: '#000000', textAlign: 'center'}}>
            {data.name}
            </Typography>
          }
          subheader={
            <Typography style={{fontFamily: 'Roboto', fontWeight: 'bold', fontSize: '15px', fontStyle: 'normal', color: '#000000', }}>
            {data.email}
            </Typography>
          }
        /> 
        <CardActions className={classes.action}>
        </CardActions>
      </div>
    </Card>

  );
}
