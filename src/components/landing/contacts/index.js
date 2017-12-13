import React, { Component } from 'react'

import invites from '../../../api/invite.js'

import './style.css'

export default class Contacts extends Component {
  state = {
    name: 'asd',
    surname: 'asd',
    phone: '+9(999)999-9999',
    email: 'example@gmail.com',
    message: 'asdasd'
  }

  handleSubmit = (e) => {
    this.setState({
      message: this.state.message.trim()
    })

    invites.sendData({ invite: { ...this.state } })
    e.preventDefault()
  }

  changeFormData = (key, value) => {
    this.setState({
      [key]:  key === 'name' || key === 'surname' ? value.trim() : value
    })
  }

  render () {
    const { name, surname, phone, email, message } = this.state

    return (
      <section id="contacts" className="contacts">
        <h2 className="contacts__title">
          CONTACT US
        </h2>
        <div className="contacts__inner">
          <form className="contacts-card" onSubmit={ this.handleSubmit }>
            <div className="contacts-card__inner">
              <input className="contacts-card__field name-field" onChange={ (e) => this.changeFormData('name', e.target.value) }
                name="name" placeholder="Your name here" type="text" required='true' value={ name }
              />
              <input className="contacts-card__field email-field" onChange={ (e) => this.changeFormData('surname', e.target.value) }
                name="surName" placeholder="Your surname here"  type="text" required='true' value={ surname }
              />
            </div>
            <div className="contacts-card__inner">
              <div className="contacts-card__item name-field">
                <span className="contacts-card__tip">Пример: +9(999)999-9999</span>
                <input className="contacts-card__field name-field__item" onChange={ (e) => this.changeFormData('phone', e.target.value) }
                  name="phone" placeholder="Phone number here" type="tel" required='true' pattern="[\+]\d{1}[\(]\d{3}[\)]\d{3}[\-]\d{4}" value={ phone }
                />
              </div>

              <div className="contacts-card__item email-field">
                <span className="contacts-card__tip">Пример: example@gmail.com</span>
                <input className="contacts-card__field email-field__item" onChange={ (e) => this.changeFormData('email', e.target.value) }
                  name="email" placeholder="Email address here"  type="email" required='true' value={ email }
                />
              </div>
            </div>

            <div className="contacts-card__inner">
              <textarea className="contacts-card__field message-field" onChange={ (e) => this.changeFormData('message', e.target.value) }
                name="message" placeholder="Describe yourself" required='true' value={ message }
              ></textarea>
            </div>
            <div className="">
              <span className="contacts-card__tip">Вы не робот?</span>
              <input type="checkbox" required='true' />
            </div>
            <button className="contacts__button">SEND MESSAGE NOW</button>
          </form>
        </div>
        <div className="add-info">
          <span className="copyright">© 2017 | developed by Belkov Roman</span>
        </div>
      </section>
    )
  }
}
