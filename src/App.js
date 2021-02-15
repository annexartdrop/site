import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

const App = withRouter(
  class App extends Component {
    render() {
      return (
        <div>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
            </Switch>
        </div>
      );
    }
  }
);

class RoutedApp extends Component {
  render() {
    return (
      <Router basename="/">
        <App />
      </Router>
    );
  }
}

export default RoutedApp;