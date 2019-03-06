import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const Header = () => 
  <div className="Header">
      <Link to={"/home"}><h1>Home</h1></Link>
      <Link to={"/logout"}><h1>Logout</h1></Link>
  </div>



// class Header extends Component {
//   render() {
 
//     return (
    
      
//         <div className="Header">
//             <Link to={"/home"}><h1>Home</h1></Link>
//             <Link to={"/logout"}><h1>Logout</h1></Link>
            
//         </div>

//     );
//   }
// }

export default Header;