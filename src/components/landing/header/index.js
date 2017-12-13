import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.css'

export default class Header extends Component {
  static propTypes = {
    login: PropTypes.func
  }

  state = {
    isPassInputShowed: false
  }

  showPassInput = () => {
    this.setState({
      isPassInputShowed: true,
      isLogInShowed: false
    })
  }

  isPassCorrect = (e) => {
    if (e.key === 'Enter' && this.props.login(e.target.value)) {
      this.setState({
        isLogInShowed: true
      })
    }
  }

  render () {
    return (
      <header className="header">
        <div className="header__inner">
          <h1 className="header__title">
            DR<span className="header__title_red">0</span>PP
          </h1>
          <nav className="header__menu">
            {
              this.state.isLogInShowed ? <Link className="menu__item" to={`/modpanel`}>Get in!</Link> : (
                this.state.isPassInputShowed ? <div>
                  <span className="menu__item">Пароль:</span>
                  <input type="password" autoComplete="current-password" onKeyPress={ (e) => this.isPassCorrect(e) }/>
                </div> : <span className="menu__item" onClick={ () => this.showPassInput() }>
                Log in</span>
              )
            }
          </nav>
        </div>
      </header>
    )
  }
}
