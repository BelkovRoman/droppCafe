import React, { Component } from 'react'

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
            <span className="menu__item">
              Login
            </span>
          </nav>
        </div>
      </header>
    )
  }
}
