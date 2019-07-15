import React, { Component } from 'react'
import axios from 'axios';
 class Login extends Component {
   	// Data
	state = {
		email: '',
		password: '',
		error: ''
	}
	// Functions

	changeEmail = (e) => {
		this.setState({email: e.target.value})
	}

	changePassword = (e) => {
		this.setState({password: e.target.value})
	}

	login = (e) => {
		e.preventDefault()
		axios.post(`${process.env.REACT_APP_API}/api/login`, this.state).then((res) => {
			if (!res.data.token) {
				this.setState({
					error: res.data
				})
			} else {
				this.setState({
					error: ''
				})
				localStorage.setItem('token', res.data.token)
				this.props.auth()
			}
		}).catch((err) => {
			console.log('err', err)
		})
	}
  render() {
    return (
      <div>
      <div id="main-container" className=" container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="card" style={{width:'18rem;'}}>
          <h5 className='text-center'>Login</h5>
  <div className="card-body">
    <form onSubmit={(e) => this.login(e)} >
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" 
    className="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Enter email"
    value={this.state.email} onChange={(e) => this.changeEmail(e)}
    />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password"
     className="form-control" 
     id="exampleInputPassword1" 
     placeholder="Password"
     value={this.state.password} onChange={(e) => this.changePassword(e)}
     />
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

export default Login
