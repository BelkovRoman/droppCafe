import React, { Component } from 'react'

import invites from '../../../api/invite.js'

import './style.css'

export default class Contacts extends Component {
  state = {
    data: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      image: '',
      message: ''
    },
    imgError: false,
    isSended: false
  }

  handleSubmit = (e) => {
    const isAllOk = !this.state.data.imgError && this.state.data.image !== ''

    this.setState({
      data: {
        ...this.state.data,
        message: this.state.data.message.trim()
      },
      isSended: isAllOk
    })

    if (isAllOk) {
      invites.sendData({ ...this.state.data })
      alert('Message sended')
      setTimeout(() => {
        this.setState({
          isSended: false
        })
      }, 2000)
    }
    e.preventDefault()
  }

  handleFileLoad = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    const i = new Image()

    let params = {}
    let err = false

    if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
      reader.readAsDataURL(file)

      reader.onload = () => {
        i.src = reader.result
        i.onload = () => {
          params = {
            width: i.width,
            height: i.height
          }

          console.log(file.type)

          if (params.height < 501 && params.width < 501) {
            this.changeFormData('image', reader.result)
            err = false
          } else {
            err = true
          }

          this.setState({
            imgError: err
          })
        }
      }
    } else {
      this.setState({
        imgError: true
      })
    }
  }

  alphaOnly = (value) => {
    return /^[a-zA-Z]+$/.test(value)
  }

  numbOnly = (value) => {
    // return /^[1-9]+$/.test(value)
    return true
  }

  changeFormData = (key, value) => {
    this.setState({
      data: {
        ...this.state.data,
        [key]:  key === 'name' || key === 'surname' ? value.trim() : value
      }
    })
  }

  render () {
    const { name, surname, phone, email, message, image } = this.state.data
    const { imgError, isSended } = this.state

    return (
      <section id="contacts" className="contacts">
        <h2 className="contacts__title">
          CONTACT US
        </h2>
        <div className="contacts__inner">
          <form className="contacts-card" onSubmit={ this.handleSubmit }>
            <div className="contacts-card__inner">
              <input className="contacts-card__field name-field" onChange={ (e) => this.alphaOnly(e.target.value) ? this.changeFormData('name', e.target.value) : {} }
                name="name" placeholder="Your name" type="text" required='true' value={ name } maxLength="20"
              />
            <input className="contacts-card__field email-field" onChange={ (e) => this.alphaOnly(e.target.value) ? this.changeFormData('surname', e.target.value) : {} }
                name="surName" placeholder="Your surname"  type="text" required='true' value={ surname } maxLength="20"
              />
            </div>
            <div className="contacts-card__inner">
              <div className="contacts-card__item name-field">
                <span className="contacts-card__tip">For example: +9(999)999-9999</span>
                <input className="contacts-card__field name-field__item" onChange={ (e) => this.numbOnly(e.target.value) ? this.changeFormData('phone', e.target.value) : {} }
                  name="phone" placeholder="Phone number (optional)" type="tel" pattern="[\+]\d{1}[\(]\d{3}[\)]\d{3}[\-]\d{4}" value={ phone } maxLength="20"
                />
              </div>

              <div className="contacts-card__item email-field">
                <span className="contacts-card__tip">For example: example@gmail.com</span>
                <input className="contacts-card__field email-field__item" onChange={ (e) => this.changeFormData('email', e.target.value) }
                  name="email" placeholder="Email address"  type="email" required='true' value={ email } maxLength="20"
                />
              </div>
            </div>
            <div className="contacts-card__inner">
              <label className="contacts-card__field file-field">
                <input type="file" name="image_uploads" accept=".jpg, .jpeg, .png" onChange={ this.handleFileLoad.bind(this) } maxLength="20"/>
                {
                  imgError ?
                  'Image must be 500x500! Try again! or must be jpg, png or jpeg' :
                  (image !== '' ? 'Image was uploaded!' : 'Click to upload some avatar')
                }
              </label>
            </div>
            <div className="contacts-card__inner">
              <textarea className="contacts-card__field message-field" onChange={ (e) => this.changeFormData('message', e.target.value) }
                name="message" placeholder="Describe yourself" required='true' value={ message }
              ></textarea>
            </div>
            <div className="contacts-card__inner contacts-card__inner_checking">
              <span>Are you robot?</span>
              <div className="contacts-card__capcha">
                <input type="checkbox" required='true' />
                <span>I'm mr.robot</span>
              </div>
            </div>
            <button className="contacts__button">
            { isSended ? 'MESSAGE SENDED!' : 'SEND MESSAGE NOW' }
            </button>
          </form>
        </div>
        <div className="add-info">
          <span className="copyright">© 2017 | developed by Belkov Roman</span>
        </div>
      </section>
    )
  }
}
