import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../actions/userActions'
import { fetchDecks } from '../actions/deckActions'



class DeckList extends Component {
    componentWillMount() {
        this.props.fetchUser()
        this.props.fetchDecks()
        

    }




    render() {
     

      return (

          <div className="DeckList">
            <h1>{this.props.user.username}</h1>

          </div>

      );
    }
  }

  const mapStateToProps = state => {
      return{
          user: state.user.current,
          decks: state.deck.all

      }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
      fetchUser,
      fetchDecks
  }, dispatch)



  
  export default  connect(mapStateToProps, mapDispatchToProps)(DeckList);