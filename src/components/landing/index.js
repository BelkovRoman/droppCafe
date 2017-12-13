import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Home from './home'
import Contacts from './contacts'

import './style.css'

export default class Landing extends Component {
  static propTypes = {
    check: PropTypes.func
  }

  render () {
    return (
      <div className="landing">
        <Header login={ this.props.check }/>
        <Home />
        <Contacts />
      </div>
    )
  }
}
