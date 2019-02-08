import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions/userActions'
import { bindActionCreators } from 'redux'
import { withRouter, Link } from 'react-router-dom'


class Login extends Component {

    constructor() {
        super()

        this.state = {
            username: '',
            password: ''
        };
    }


    handleChange = event => {
        const field = event.target.name
        let state = this.state

        state[field] = event.target.value
        this.setState(state)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.login(this.state, () => this.props.history.push('/home'))
    }



    render() {
      return (

          <div className="login">
            <form onSubmit={this.handleSubmit}>
                    <label>Login</label>
                <input name="username" placeholder="Username" type="text" onChange={(event) => this.handleChange(event)} value={this.state.username}/>
                <input name="password" placeholder="Password" type="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/>
                <input type="submit"/>
            </form>
          </div>

      );
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    login }, dispatch)

  
  export default  withRouter(connect(null, mapDispatchToProps)(Login));