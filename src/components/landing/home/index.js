import React, { Component } from 'react'

import './style.css'

export default class Home extends Component {
  render () {
    return (
      <section id="home" className="home">
        <div className="home__inner">
          <h2 className="home__title">
            come, stay for a coffie!
          </h2>
        </div>
      </section>
    )
  }
}
