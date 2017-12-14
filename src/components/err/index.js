import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default class Err extends Component {
  render() {
    return (
      <div className="err">
        <div className="err__inner">
          <h1 className="err__title">
            404
          </h1>
          <h2 className="err__subtitle">
             Page was now found!
          </h2>
          <div className="err__image"></div>
          <Link className="err__link" to={`/`}>Get Back</Link>
        </div>
      </div>
    )
  }
}
