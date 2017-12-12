import React, { Component } from 'react'

import invites from './invites.json'

import './style.css'

export default class ModeratorPanel extends Component {
  render() {
    return (
      <div className="modPanel">
        <header className="modPanel-header">
          <div className="modPanel-header__inner">
            <h1 className="modPanel-header__title">
              DR<span className="modPanel-header__title_red">0</span>PP
            </h1>
          </div>
        </header>
        <div className="modPanel__content">
          <h2 className="modPanel__title">
            Заявки
          </h2>
          {
            invites.map((invite, index) => {
              return (
                <div className="modPanel__invite">
                  <div className="invite__item invite__name">
                    { invite.name }
                  </div>
                  <div className="invite__item invite__surname">
                    { invite.surname }
                  </div>
                  <div className="invite__item invite__phone">
                    { invite.phone }
                  </div>
                  <div className="invite__item invite__email">
                    { invite.email }
                  </div>
                  <div className="invite__item invite__image">
                    { invite.image }
                  </div>
                  <div className="invite__item invite__message">
                    { invite.message }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
