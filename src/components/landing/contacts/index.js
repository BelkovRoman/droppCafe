import React, { Component } from 'react'

import './style.css'

export default class Contacts extends Component {
  render () {
    return (
      <section id="contacts" className="contacts">
        <h2 className="contacts__title">
          CONTACT US
        </h2>
        <div className="contacts__inner">
          <form className="contacts-card">
            <div className="contacts-card__inner">
              <input id="name" className="contacts-card__field name-field"
                name="name" placeholder="Your name here" type="text" required='true'
              />
              <input id="surName" className="contacts-card__field email-field"
                name="surName" placeholder="Your surname here"  type="text" required='true'
              />
            </div>
            <div className="contacts-card__inner">
              <input id="name" className="contacts-card__field name-field"
                name="phone" placeholder="Phone number here" type="tel" required='true'
              />
              <input id="email" className="contacts-card__field email-field"
                name="email" placeholder="Email address here"  type="email" required='true'
              />
            </div>
            <div className="contacts-card__inner">
              <label class="contacts-card__field file-field">
                <input type="file" />
                Click to upload some avatar
              </label>
            </div>
            <div className="contacts-card__inner">
              <textarea id="message" className="contacts-card__field message-field"
                name="message" placeholder="Describe yourself" required='true'
              ></textarea>
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
