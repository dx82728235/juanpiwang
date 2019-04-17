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
          <Redirect from='/' to="/home" exact/>
          <Route path='/home' component={Home}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/mine' component={Mine}/>
        </Switch>
        <TabBarCom/>
      </Router>
    );
  }
}

export default App;
