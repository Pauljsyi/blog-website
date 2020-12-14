import React from 'react';
import ReactDOM from 'react-dom';
import Page1 from './components/first/Page1';
import Page2 from "./components/second/Page2";
import Page3 from "./components/third/Page3";
import { BrowserRouter, Route, Switch } from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

