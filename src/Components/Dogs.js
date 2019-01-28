import React from "react";
import Galleryitem from "./Galleryitem";
import NoPics from './NoPics'



/*format to create url for flickr:
https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg*/

const Dogs = (props) => { 
   const results = props.data;  //console.log(results)  shows that the data was passed over from App component
  let pics;
  
  
  //If return.length is greater than 0, pics will equal the map function */
  if (results.length > 0) {
    pics = results.map(pic => <Galleryitem url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} title={pic.title} />);
} else { //if no results are returned, then pics will be equal to the NoPics component
    pics = <NoPics />
  }

  return (
     <ul>
       {pics}
     </ul>
  );
};

export default Dogs;
