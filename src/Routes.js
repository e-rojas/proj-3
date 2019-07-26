import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Main from './Main';
import Create from './Create'

export default class Routes extends Component {
    //data
    state = {}
    //Methods
    checkAuth = () => {
        if (localStorage.getItem('token')) {
            return true
        } else {
            return false
        }
    }
    auth = () => {
        if (this.checkAuth()) {
            window.location.href = '/'
        }
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={() => <Login auth={this.auth} />} />
                    <Route path='/signup' component={() => <Signup auth={this.auth} />} />
                    <Route path='/create' component={() => <Create auth={this.auth} />} />
                    <Route path='/' render={() => (
                        this.checkAuth() ? (<Main />) : (<Redirect to='/login' />)
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}
