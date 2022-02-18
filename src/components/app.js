import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavigationContainer from "./navigation/navigation-container.js";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth"
import NoMatch from "./pages/no-match";

export default class App extends Component {
  getPortfolioItems() {
    axios
      .get("https://garyduncan.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        // handle success
        console.log("response data", response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
