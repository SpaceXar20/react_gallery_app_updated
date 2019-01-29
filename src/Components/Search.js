/* import react*/
import React from "react";

//import components
import Form from "./Form";
import Nav from "./Nav";




/*Create a Search component that cab be used to search for pictures
 */

// Accept component properties as first parameter 
const Search = props => {   //Header contains onSearch={this.performSearch} as props from App, this prop containing the function will be passed to Form
 console.log(props)
  return (
    //JSX inside ()
    <div>
      <Form onSearch={props.onSearch}/> {/*render the search bar, and pass the onSearch={this.performSearch} prop*/}
    
    </div>
  );
};
/*Now export Header component so that we are able to import it 
  and use it within other components or modules of our app*/
export default Search;
