import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../actions/userActions'
import { fetchDecks } from '../actions/deckActions'



class DeckList extends Component {
    componentDidMount() {
        this.props.fetchUser()
        this.props.fetchDecks()
        

    }




    render() {
        const user = this.props.user
        const decks = this.props.user.decks
        debugger;

      return (

          <div className="DeckList">
            <h1>{user.username}</h1>

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