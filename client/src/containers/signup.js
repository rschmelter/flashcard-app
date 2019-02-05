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




    render() {
      return (

          <div className="signup">
            <form onSubmit={this.handleSubmit}>
                    <label>signup</label>
                <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
                <input type="submit"/>
            </form>
          </div>

      );
    }
  }
  
  export default SignUp;