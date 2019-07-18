import React, { Component } from 'react'
import './Main.css'
import profile from './images/profile.jpg'

export default class LeftCol extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-light bg-light w-100 d-flex flex-column alig">
          <div className="imageWrapper ">
            <img src={profile} alt="..." className="img-thumbnail">
            </img>
          </div>
          <h4 className="small ">Michael Bronk</h4>
        </nav>
        <div className="wrap p-2">
          <div className="card-footer bg-transparent border-dark">
            <h5 className="lead small text-uppercase font-weight-bold">Categories</h5>
            <span className="badge badge-dark">#food</span> <span className="badge badge-dark">#travel</span> <span className="badge badge-dark">#wellness</span> <span className="badge badge-dark">#services</span>
            <span className="badge badge-dark">#sports</span>
          </div>
        </div>
      </div>
    )
  }
}
