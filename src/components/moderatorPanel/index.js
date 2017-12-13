import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import invites from '../../api/invite.js'

import './style.css'

export default class ModeratorPanel extends Component {
  state = {
    invites: {}
  }

  initData = (data) => {
    this.setState({
      invites: data
    })
  }

  componentDidMount() {
    invites.getData(this.initData)
  }

  render() {

    return (
      <div className="modPanel">
        <header className="modPanel-header">
          <div className="modPanel-header__inner">
            <h1 className="modPanel-header__title">
              DR<span className="modPanel-header__title_red">0</span>PP
            </h1>
            <nav className="header__menu">
              <Link className="menu__item" to={`/`}>Get Back</Link>
            </nav>
          </div>
        </header>
        <div className="modPanel__content">
          <h2 className="modPanel__title">
            Invites
          </h2>
          <div className="modPanel__invite modPanel__tableHeader">
            <div className="invite__item invite__image">
              Avatar
            </div>
            <div className="invite__item invite__name">
              Name
            </div>
            <div className="invite__item invite__surname">
              Surname
            </div>
            <div className="invite__item invite__phone">
              Phone number
            </div>
            <div className="invite__item invite__email">
              Email
            </div>
            <div className="invite__item invite__message">
              Comment
            </div>
          </div>
          {
            !!this.state.invites.rows ? this.state.invites.rows.map((invite, index) => {
              return (
                <div key={ index } className="modPanel__invite">
                  <div className="invite__item invite__image">
                    <img id={ index } src={ invite.doc.image } alt="user avatar" />
                  </div>
                  <div className="invite__item invite__name">
                    { invite.doc.name }
                  </div>
                  <div className="invite__item invite__surname">
                    { invite.doc.surname }
                  </div>
                  <div className="invite__item invite__phone">
                    { invite.doc.phone }
                  </div>
                  <div className="invite__item invite__email">
                    { invite.doc.email }
                  </div>
                  <div className="invite__item invite__message">
                    { invite.doc.message }
                  </div>
                </div>
              )
            }) : null
          }
        </div>
      </div>
    )
  }
}
