import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class CardList extends Component {
    
    componentDidMount() {
        fetchCards(this.props.deckId)
        
    }

  render() {
   
    return (
    
      
        <div className="CardList">

            
        </div>

    );
  }
}




export default CardList;