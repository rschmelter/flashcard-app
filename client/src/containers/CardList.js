import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCards } from '../actions/cardActions'


class CardList extends Component {
    
    componentDidMount() {
        fetchCards(this.props.deckId)
        
    }

  render() {

   debugger;
    return (
    
      
        <div className="CardList">

            
        </div>

    );
  }
}

const mapStateToProps = state => {
    return{
        cards: state.card.all
        

    }
}





export default  connect(mapStateToProps, {fetchCards})(CardList);