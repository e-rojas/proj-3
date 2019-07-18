import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import Sidebar from './Sidebar'
// import Content from './Content'
import Login from './Login'

import React, { Component } from 'react'

export default class App extends Component {
  render() {
	return (
	  <div>
	  <Login />
	  {/* <Signup /> */}
	  </div>
	)
  }
}
