/* import React*/
import React from "react";

/*A single Gallery-item component that can be reused to display the sets of images for
 each of the three topic categories you wish to display, like 
 sunsets, waterfalls and rainbows, for example.*/

const Galleryitem = props => (
  <ul>
    <li>
      <img src={props.url} alt="" />{" "}
      {/*set img src to props.url to render images*/}
    </li>
  </ul>
);

export default Galleryitem;
