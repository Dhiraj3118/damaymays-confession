import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './Admin';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/adminpage/20704554" component={Admin} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

