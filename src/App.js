import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./pages/home";
import Mission from "./pages/mission";
import StartYourOwn from "./pages/startyourown";
import Contribute from "./pages/contribute";

const App = withRouter(
  class App extends Component {

    render() {
      return (
        <div>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/mission" component={Mission}/>
              <Route path="/startyourown" component={StartYourOwn}/>
              <Route path="/contribute" component={Contribute}/>
            </Switch>
        </div>
      );
    }
  }
);

class RoutedApp extends Component {
  render() {
    return (
      <Router basename="/annexartdrop">
        <App />
      </Router>
    );
  }
}

export default RoutedApp;