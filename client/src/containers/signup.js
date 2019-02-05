import React, { Component } from 'react';
import { connect } from 'react-redux'



class SignUp extends Component {

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



    render() {
      return (

          <div className="signup">
            <form onSubmit={this.handleSubmit}>
                    <label>signup</label>
                <input name="username" placeholder="Username" type="text" onChange={(event) => this.handleChange(event)} value={this.state.username}/>
                <input name="password" placeholder="Password" type="password" onChange={(event) => this.handleChange(event)} value={this.state.password}/>
                <input type="submit"/>
            </form>
          </div>

      );
    }
  }


  
  export default  SignUp;