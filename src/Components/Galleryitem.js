/* import React*/
import React from "react";

/*A single Gallery-item component that can be reused to display the sets of images for
 each of the three topic categories you wish to display, like 
 sunsets, waterfalls and rainbows, for example.*/

const Galleryitem = props => (
  
    <li>
      <img src={props.url} alt="" /> {/*set the img src to the props url passed in from the Gallery component */}
    </li>
  
);

export default Galleryitem;
