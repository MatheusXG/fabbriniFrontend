import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from "react-router-dom";
import FaceIcon from '@material-ui/icons/Face';

export default function CardProntList({user}) {
 
  return (
    <Card sx={{ maxWidth: 345 }} style={{width: '450px', height: '275px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px', borderRadius: '10px'}} key={user._id}>
        <CardHeader
          style={{backgroundColor: '#efebe9'}}
          avatar={
            <Avatar  style={{width: '95px', height: '95px'}}>
                <FaceIcon style={{background: 'white', color: '#0071BC' , fontSize: 100}}/>
            </Avatar>
          }
          title={<Typography variant="h6">{user.name}</Typography>}
        />
      
      <CardContent style={{height: '90px',  backgroundColor: '#F5F5F5',boxShadow: 'rgba(0, 0, 1, 1) 0px 5px 10px'}}>
        <Typography variant="body1">Email: {user.email}</Typography>
        <Typography variant="body1">CPF: {user.cpf}</Typography>
      </CardContent>
      <CardActions style={{display: 'flex', justifyContent: 'flex-end', backgroundColor: '#0071BC', boxShadow: 'rgba(0, 0, 1, 1) 0px 5px 15px'}}>
        <Link to={`/editar/prontuario/${user._id}`}>
          <Tooltip title="Editar Prontuário" aria-label="add">
            <IconButton aria-label="Edit" style={{}}>
              <EditIcon style={{color: '#EFEFEF'}}/>
            </IconButton>
          </Tooltip>
        </Link>
        <a href={`/visualizar/prontuario/${user._id}`}  >
          <Tooltip title="Visualizar Prontuário" aria-label="add">
            <IconButton aria-label="Print" >
              <AssignmentIcon style={{color: '#EFEFEF'}}/>
            </IconButton>
          </Tooltip>
        </a>
      </CardActions>
    </Card>
  );
}
