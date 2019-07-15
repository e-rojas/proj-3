import React, { Component } from 'react'
import axios from 'axios';
export default class Signup extends Component {
  // Data
	state = {
		name: '',
		email: '',
		password: ''
	}
	// Functions
	changeName = (e) => {
		this.setState({name: e.target.value})
	}

	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	signup = (e) => {
		e.preventDefault()
		axios.post(`${process.env.REACT_APP_API}/api/signup`, this.state).then((res) => {
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
      <div className="card" style={{width:'18rem;'}}>
  <div className="card-body">
    <form>
    <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
</div>
      </div>
      </div>
    )
  }
}
