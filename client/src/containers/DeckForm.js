import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createDeck } from '../actions/deckActions'
import { bindActionCreators } from 'redux'



class DeckForm extends Component {

    constructor() {
        super()

        this.state = {
            name: ""
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
        this.props.createDeck(this.state)
    }



    render() {
      return (

          <div className="DeckForm">
            <form onSubmit={this.handleSubmit}>
                    <label>Create Deck</label>
                <input name="name" placeholder="Name" type="text" onChange={(event) => this.handleChange(event)} value={this.state.username}/>
                <input type="submit"/>
            </form>
          </div>

      );
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    createDeck }, dispatch)

  
  export default  connect(null, mapDispatchToProps)(DeckForm);