import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Confess from './Confess';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Memes from './Memes';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.render(
  <div>

    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Confess} />
        <Route path="/memes" exact component={Memes} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
  ,
  document.getElementById('root')
);

