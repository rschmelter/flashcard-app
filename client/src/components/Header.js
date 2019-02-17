import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {

    return (
    
      
        <div className="Header">
            <Link to={"/home"}><h2>Home</h2></Link>
            <Link to={"/logout"}><h2>Logout</h2></Link>
            
        </div>

    );
  }
}

export default Header;