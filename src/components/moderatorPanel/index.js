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
            <Link to={`/`}>Назад</Link>
          </div>
        </header>
        <div className="modPanel__content">
          <h2 className="modPanel__title">
            Заявки
          </h2>
          {
            !!this.state.invites.rows ? this.state.invites.rows.map((invite, index) => {
              return (
                <div key={ index } className="modPanel__invite">
                  <div className="invite__item invite__name">
                    { invite.doc.invite.name }
                  </div>
                  <div className="invite__item invite__surname">
                    { invite.doc.invite.surname }
                  </div>
                  <div className="invite__item invite__phone">
                    { invite.doc.invite.phone }
                  </div>
                  <div className="invite__item invite__email">
                    { invite.doc.invite.email }
                  </div>
                  <div className="invite__item invite__image">
                    { invite.doc.invite.image }
                  </div>
                  <div className="invite__item invite__message">
                    { invite.doc.invite.message }
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
