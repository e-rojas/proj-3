import React, { Component } from 'react'
import axios from 'axios';
import './App.css'
import logo from './images/logo.png'
export default class Signup extends Component {
  // Data
  state = {
    name: '',
    email: '',
    password: ''
  }
  // Functions
  changeName = (e) => {
    this.setState({ name: e.target.value })
  }

  changeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  changePassword = (e) => {
    this.setState({ password: e.target.value })
  }

  signup = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:2200/api/signup`, this.state).then((res) => {
      localStorage.setItem('token', res.data.token)
      this.props.auth()
    }).catch((err) => {
      console.log('err', err)
    })
  }

  render() {
    return (
      <div>
        <div id="main-container-signup" className=" container-fluid d-flex flex-column justify-content-center align-items-center">
          <div className="card" style={{ width: '18rem' }}>
            <img className='w-50 m-auto' src={logo} alt="logo" />
            <div className="card-body">
              <div className='text-center'>
                <label className='font-weight-bolder '>Signup</label>
              </div>
              <form onSubmit={(e) => this.signup(e)} >
                <div className="form-group">
                  <label >Name</label>
                  <input
                    value={this.state.name}
                    onChange={(e) => this.changeName(e)}
                    type="text" className="form-control" aria-describedby="nameHelp" placeholder="Enter name" />
                </div>
                <div className="form-group">
                  <label >Email address</label>
                  <input
                    value={this.state.email}
                    onChange={(e) => this.changeEmail(e)}
                    type="email" className="form-control" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label >Password</label>
                  <input
                    value={this.state.password}
                    onChange={(e) => this.changePassword(e)}
                    type="password" className="form-control" placeholder="Password" />
                </div>


                <button type="submit" className="btn btn-primary">Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


