import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'



class DeckList extends Component {
    componentWillMount() {
        this.props.fetchUser()
        this.props.fetchDecks()
    }




    render() {
      return (

          <div className="DeckList">

          </div>

      );
    }
  }

  const mapStateToProps = state => {
      return{
          user: state.user.current,
          decks: state.decks.all
      }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
      fetchUser,
      fetchDecks
  }, dispatch)



  
  export default  connect(mapStateToProps, mapDispatchToProps)(DeckList);