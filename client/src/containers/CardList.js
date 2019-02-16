import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchCards } from '../actions/cardActions'


class CardList extends Component {
    
    componentDidMount() {
       
    
        this.props.fetchCards()
        
    }

  render() {
    const cards = this.props.cards
    return (
    
      
        <div className="CardList">
        {cards.map(card => <Deck cardId={card.id} front={card.front} back={card.back}/>)}
            
        </div>

    );
  }
}

const mapStateToProps = state => {
    return{
        cards: state.card.all
        

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCards: () => {
            dispatch(fetchCards(ownProps.deckId))
        }
    }
}




export default  connect(mapStateToProps, mapDispatchToProps)(CardList);