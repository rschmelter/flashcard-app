import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../actions/userActions'



class DeckList extends Component {
    componentWillMount() {
        this.props.fetchUser()

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
          user: state.user.current

      }
  }

  const mapDispatchToProps = dispatch => bindActionCreators({
      fetchUser
  }, dispatch)



  
  export default  connect(mapStateToProps, mapDispatchToProps)(DeckList);