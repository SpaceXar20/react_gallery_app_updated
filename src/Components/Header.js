/* import react*/
import React from "react";

//import components
import Form from "./Form";
import Nav from "./Nav";



/*Create a Header component that could store things 
like an app title, logo, nav and search bar.
 */

// Accept component properties as first parameter 
const Header = props => {   //Header contains onSearch={this.performSearch} as props from App, this prop containing the function will be passed to Form
// console.log(props)
  return (
    //JSX inside ()
    <header>
      <Nav  /> 
    </header>
  );
};
/*Now export Header component so that we are able to import it 
  and use it within other components or modules of our app*/
export default Header;
