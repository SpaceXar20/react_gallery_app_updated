import React from 'react';

//this component will render if flickr is unable to find any matching results for user input
const NoPics = props => (
 
  <li className="not-found">
  <h3>No Results Found</h3>
  <p>You search did not return any results. Please try again.</p>
</li>
);

export default NoPics;