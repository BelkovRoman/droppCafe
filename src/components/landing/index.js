import React, { Component } from 'react'

import Header from './header'
import Home from './home'
import Contacts from './contacts'

import './style.css'

export default class Landing extends Component {
  render () {
    return (
      <div className="landing">
        <Header />
        <Home />
        <Contacts />
      </div>
    )
  }
}
