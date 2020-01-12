import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Cfooter from './View/footer'

import './View/sass/master.sass'
import Cimprint from './Imprint'
import CdataProtection from './datasecruity'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/imprint" component={Cimprint} />
        <Route path="/data-protection" component={CdataProtection} />
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
