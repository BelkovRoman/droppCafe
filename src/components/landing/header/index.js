import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './style.css'

export default class Header extends Component {
  static propTypes = {
    login: PropTypes.func
  }

  state = {
    isPassInputShowed: false,
    isPassCorrect: true,
    value: ''
  }

  showPassInput = () => {
    this.setState({
      isPassInputShowed: true,
      isLogInShowed: false
    })
  }

  onPassChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  submitPass = () => {
    if (this.props.login(this.state.value)) {
      this.setState({
        isLogInShowed: true,
        isPassCorrect: true
      })
    } else {
      this.setState({
        isPassCorrect: false
      })
    }
  }

  renderLink = () =>
      <Link className="menu__item" to={`/modpanel`}>Get in!</Link>

  renderPass = () => {
    return (
      this.state.isPassInputShowed ? (
        <div className="header__passContainer">
          <span className="menu__item">
            { this.state.isPassCorrect ? 'Write password' : 'Wrong password!' }
          </span>
          <input className="header__input" type="password" onChange={ (e) => this.onPassChange(e) } maxLength="10"/>
          <div className="header__button" type="submit" onClick={ () => this.submitPass() }>CHECK</div>
        </div>
      ) : <span className="menu__item" onClick={ () => this.showPassInput() }>Log in</span>
    )
  }

  render () {
    return (
      <header className="header">
        <div className="header__inner">
          <h1 className="header__title">
            DR<span className="header__title_red">0</span>PP
          </h1>
          <nav className="header__menu">
            { this.state.isLogInShowed ? this.renderLink() : this.renderPass() }
          </nav>
        </div>
      </header>
    )
  }
}
