import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from '../landing'
import ModeratorPanel from '../moderatorPanel'

import './style.css'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={ Landing }/>
            <Route path="/modpanel" component={ ModeratorPanel }/>
            <Route component={ Landing }/>
          </Switch>
        </Router>
      </div>
    )
  }
}
