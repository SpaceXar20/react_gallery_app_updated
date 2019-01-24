/* import react*/
import React from "react";

//import components
import Form from "./Form";
import Nav from "./Nav";
import Galleryitem from "./Galleryitem";

// import Galleryitem from './Galleryitem'

/*Create a Header component that could store things 
like an app title, logo, nav and search bar.
 */

// Accept component properties as first parameter
const Header = props => { 
  return (
    //JSX inside ()
    <header>
      <Form onSearch={props.onSearch}/> {/*render the search bar*/}
      <Nav  /> {/*Render Nav menu */}
      <Galleryitem /> {/*Render Gallery component  */}
    </header>
  );
};
/*Now export Header component so that we are able to import it 
  and use it within other components or modules of our app*/
export default Header;
