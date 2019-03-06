import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCards } from '../actions/cardActions'
import { sortCards } from '../actions/cardActions'
import Card from '../components/Card'



class CardList extends Component {
    
    componentDidMount() {      
        
        this.props.fetchCards(this.props.deckId)        
    }

    handleClick = event => {
        debugger;
        
        this.props.sortCards()
        
    }


 

  render() {
    
    const cards = this.props.cards


    return (
    
      
        <div className="CardList">
        <div className="Sort"><button onClick={this.handleClick}>Sort Cards</button></div>
        {cards.map(card => <Card key={card.id} cardId={card.id} front={card.front} back={card.back}/>)}
        
        </div>

    );
  }
}



const mapStateToProps = state => {
    return{
        cards: state.card.all
        

    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCards, sortCards }, dispatch)


// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         fetchCards: () => {
//             dispatch(fetchCards(ownProps.deckId))
//         },
//         sortCards: () => {
//             dispatch(sortCards)
//         }        
//     }
// }




export default  connect(mapStateToProps, mapDispatchToProps)(CardList);