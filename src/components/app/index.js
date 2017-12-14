import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import invites from '../../api/invite.js'

import Landing from '../landing'
import Err from '../err'
import ModeratorPanel from '../moderatorPanel'

import './style.css'

export default class App extends Component {
  state = {
    pass: '',
    isPassCorrect: false
  }

  componentDidMount() {
    invites.getPass(this.checkServer)
  }

  checkServer = (value = '') => {
    this.setState({
      pass: value.rows[0].doc.value
    })
  }

  passIn = (value) => {
    const isCorrect = value === this.state.pass

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
            <Route component={ Err }/>
          </Switch>
        </Router>
      </div>
    )
  }
}
