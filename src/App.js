/* Use the src/App.js file as your main container component,
 where you should import your .config file.*/

 import React, { Component } from "react"; // import React
 import "./css/index.css"; //import css styles
 import axios from "axios";
 import apiKey from "./config"; //import config file
 import {
   //import BrowserRouter and Route
   BrowserRouter,
   Route,
   Switch
 } from "react-router-dom";
 
 //import components
 import Header from "./Components/Header"; //after exporting Header ,import Header component into this file
 import Gallery from "./Components/Gallery";
 import Cats from "./Components/Cats"
 import Dogs from "./Components/Dogs"
 import Computer from "./Components/Computer"
 import NotFound from "./Components/NotFound"

 class App extends Component {
   constructor() {
     //state for data we want to display from flickr
     super();
     this.state = {
       pics: [], //this array will hold the pictures that will render as soon as the page loads
       loading: true
     };
   }
 
   componentDidMount() {
     this.performSearch(); //call performSearch function on the componentDidMount() life cycle
     this.renderCats()
   }
 
   //this function will create the search feature
   performSearch = (query = "") => {
     //include a query parameter so that flickr can return images based on user input, and provide a default value for query parameter to display sunset pics when the page first loads
     //fetch data from flickr
     axios 
       .get(
         `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
       )
       .then(response => { //set the response so that pics will be equal to the data array containing photos from flickr
        console.log(response)
         this.setState({
           pics: response.data.photos.photo, 
           loading: false //initialize a loading state to display a loading message
         });
       })
       .catch(error => { //this catch method outputs a message to the console, should axios fail to retrieve data
         console.log("Something went wrong, could not access data", error);
       });
   }; 

   //this function will retrieve the CATS pictures

   renderCats = () => {
    //fetch data from flickr
    axios 
      .get(
        ` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => { //set the response so that pics will be equal to the data array containing photos from flickr
        console.log(response)
        this.setState({
          pics: response.data.photos.photo, 
          loading: false //initialize a loading state to display a loading message
        });
      })
      .catch(error => { //this catch method outputs a message to the console, should axios fail to retrieve data
        console.log("Something went wrong, could not access data", error);
      });
  }; 
 
   render() { // I used a code snippet from Josue https://stackoverflow.com/a/54319021/10043628
     //console.log(this.state.pics);
     return (
       //JSX inside ()
       <BrowserRouter>
         <div>
           {/* Pass the performSearch function as a prop down to Header  so that I can pass it to Form component located inside Header to enable searches*/}
           <Header onSearch={this.performSearch} cats={this.renderCats}/> {/* I passed the renderCats function to Header so that I could pass it to Nav */}
            <div className="photo-container">
             <h2>Results</h2>
             <Switch> 
             {/* <Route path="/" component={App} /> */}
             <Route path="/cats" component={Cats} /> {/*use Route component to render Cats,Dogs and Computer components when the url matches  */}
             <Route path="/dogs" component={Dogs} />
             <Route path="/computer" component={Computer} />
             <Route component={NotFound}/> {/*render NotFound component */}
             </Switch > 
             {
               (this.state.loading)
               ? <h1>Retrieving Photos Please Wait...</h1> //if the loading state is true,I'll render a h1
               :  <Gallery data={this.state.pics} /> //otherwise if loading is false, render Gallery component, also pass a data props containing this.state.pics to Gallery component
             }
            
           
            </div>          
         </div>
       </BrowserRouter>
     );
   }
 } //closes App
 
 export default App;
 