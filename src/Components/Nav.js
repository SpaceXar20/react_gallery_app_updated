/* import React*/
import React from 'react';
import { NavLink } from 'react-router-dom'; //import Navlink to create nav links and to put active class on any link that is active


/*Create a Nav for navigation menu to be stored in Header*/
const Nav = (props) => { console.log(props) //Nav contains a function passed from App
    return ( //JSX inside ()
    <nav className="main-nav"> 
    <ul> 
      <li><NavLink to='/cats'>CATS</NavLink></li> {/*value in to needs to match the path defined in Route Path */}
      <li><NavLink to='/dogs'>DOGS</NavLink></li>
      <li><NavLink to='/computer'>COMPUTERS</NavLink></li>
    </ul>
  </nav>
  )
}


  export default Nav;
