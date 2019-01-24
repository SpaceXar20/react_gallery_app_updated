/* import React*/
import React from 'react';
import { Link } from 'react-router-dom'; //import link to create nav links

/*Create a Nav for navigation menu to be stored in Header*/
const Nav = () => {
    return ( //JSX inside ()
    <nav className="main-nav">
    <ul> 
      <li><Link to=''>Cats</Link></li> {/*value in to needs to match the path defined in Route Path */}
      <li><Link to='#'>Dogs</Link></li>
      <li><Link to='#'>Computers</Link></li>
    </ul>
  </nav>

    )
}


  export default Nav;
