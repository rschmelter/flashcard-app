import React, { Component } from 'react';


class Card extends Component {

  state = {
    front: true
  }

  handleClick = () => {
    this.setState({front: !this.state.front})
  }

  render() {



    return (
    
      
        <div className="Card" onClick={this.handleClick}>
          {
            this.state.front
            ? <h1 className="Front">{this.props.front}</h1>
            : <h1 className="Back">{this.props.back}</h1>
          }
        </div>

    );
  }
}

export default Card;