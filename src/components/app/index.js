import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from '../landing'
import ModeratorPanel from '../moderatorPanel'

import './style.css'

export default class App extends Component {
  state = {
    isPassCorrect: false
  }

  passIn = (value) => {
    const isCorrect = value === 'admin'

    if (isCorrect) {
      this.setState({
        isPassCorrect: true
      })
    }

    return isCorrect
  }

  render () {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={ () => <Landing check={ this.passIn } /> } />
            {
              this.state.isPassCorrect ?
              <Route path="/modpanel" component={ ModeratorPanel }/>
              : ''
            }
            <Route component={ Landing }/>
          </Switch>
        </Router>
      </div>
    )
  }
}
