import React, { Component } from 'react';
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import {
    Home,
    Classify,
    Cart,
    Mine,
} from '@views';
import TabBarCom from '@/common/tabBar'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

        </Switch>
        <TabBarCom/>
      </Router>
    );
  }
}

export default App;
