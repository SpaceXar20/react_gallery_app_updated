import React from "react";

const Cats = (props) => (  
  
  <li> {console.log(props)}
  <img src={props.url} alt="" /> {/*set the img src to the props url passed in from the Gallery component */}
</li>

); 

export default Cats;