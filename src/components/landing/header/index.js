import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header__inner">
          <h1 className="header__title">
            DR<span className="header__title_red">0</span>PP
          </h1>
          <nav className="header__menu">
            <Link className="menu__item" to={`/modpanel`}>Login</Link>
          </nav>
        </div>
      </header>
    )
  }
}
