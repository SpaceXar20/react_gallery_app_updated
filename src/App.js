/* Use the src/App.js file as your main container component,
 where you should import your .config file.*/

 import React, { Component } from "react"; // import React
 import "./css/index.css"; //import css styles
 import axios from "axios";
 import apiKey from "./config"; //import config file
 import {
   //import react router
   BrowserRouter,
   Route
 } from "react-router-dom";
 
 //import components
 import Header from "./Components/Header"; //after exporting Header ,import Header component into this file
 import Gallery from "./Components/Gallery";
 
 class App extends Component {
   constructor() {
     //state for data we want to display from flickr
     super();
     this.state = {
       pics: [],
       loading: true //initialize a loading state
     };
   }
 
   componentDidMount() {
     this.performSearch(); //call performSearch function on the componentDidMount() life cycle
   }
 
   //this function will create the search feature
   performSearch = (query = "sunset") => {
     //include a query parameter so that flickr can return images based on user input, and provide a default value for query parameter to display sunset pics when the page first loads
     //fetch data from flickr
     axios
       .get(
         `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
       )
       .then(response => {
         this.setState({
           pics: response.data.photos.photo
         });
       })
       .catch(error => {
         console.log("Something went wrong, could not access data", error);
       });
   };
 
   render() { // I used a code snippet from Josue https://stackoverflow.com/a/54319021/10043628
     //console.log(this.state.pics);
     return (
       //JSX inside ()
       <BrowserRouter>
         <div>
           {/* Pass the performSearch function as a prop down to Header  so that I can pass it to Nav*/}
           <Header onSearch={this.performSearch} />

             <div className="photo-container">
             <h2>Results</h2>
            <Gallery data={this.state.pics} />
            </div>          
           {/*pass data array to Gallery component */}
         </div>
       </BrowserRouter>
     );
   }
 } //closes App
 
 export default App;
 