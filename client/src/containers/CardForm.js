import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createCard } from '../actions/cardActions'
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
        console.log('A')
        this.props.createCard(this.props.deckId, this.state)
        console.log('B')
        this.setState({
            front: "",
            back: ""
        })
    }



    render() {
     
      return (

       
          <div className="CardForm">
            <form onSubmit={this.handleSubmit}>
                    <label>Create Card</label>
                <input name="front" placeholder="Question" type="text" onChange={(event) => this.handleChange(event)} value={this.state.front}/>
                <input name="back" placeholder="Answer" type="text" onChange={(event) => this.handleChange(event)} value={this.state.back}/>
                <input type="submit" value="Create Card"/>
            </form>
          </div>

      );
    }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
    createCard }, dispatch)

  
  export default  connect(null, mapDispatchToProps)(CardForm);