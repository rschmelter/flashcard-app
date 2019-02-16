import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createCard } from '../actions/deckActions'
import { bindActionCreators } from 'redux'



class CardForm extends Component {

    constructor() {
        super()

        this.state = {
            front: "",
            back: ""
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
        this.props.createCard(this.state)
    }



    render() {
      return (

          <div className="CardForm">
            <form onSubmit={this.handleSubmit}>
                    <label>Create Card</label>
                <input name="Front" placeholder="Question" type="text" onChange={(event) => this.handleChange(event)} value={this.state.front}/>
                <input name="Back" placeholder="Answer" type="text" onChange={(event) => this.handleChange(event)} value={this.state.back}/>
                <input type="submit"/>
            </form>
          </div>

      );
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    createCard }, dispatch)

  
  export default  connect(null, mapDispatchToProps)(CardForm);