import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter} from "react-router-dom";
import Header from  './component/Header';
import Films from  './component/Films/index';
import Marker from './component/Marker/index';
import NotFound from './component/NotFound';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path = "/" component={Films}/>
                    <Route  path = "/marker" component={Marker}/>
                    <Route  component={NotFound} />
                </Switch>
                {/*<Footer />*/}
          </div>
        </Router>
    );
  }
}

export default App;
