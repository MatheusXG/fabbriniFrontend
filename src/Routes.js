import React from 'react';
import EditProntuario from './pages/editProntuario';
import SearchProntuario from './pages/searchProntuario';
import SearchUser from './pages/searchUser';
import Home from './pages/Home';
import Teste from './pages/viewProntuario/teste';

import { BrowserRouter, Switch, Route} from "react-router-dom";

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/prontuarios" component={SearchProntuario} />
        <Route exact path="/prontuarios/:search" component={SearchUser} />
        <Route exact path="/editar/prontuario/:id" component={EditProntuario} />
        <Route exact path="/visualizar/prontuario/:id" component={Teste} />
      </Switch>
    </BrowserRouter>
  );
  
export default Routes;