//this component will have state
import React, { Component } from 'react';

/*Create a form component for the search bar. 
Since forms deal with a significant amount of unique information 
that can be very specific to the particular form being used, 
a stateless component might not be the best option. */

export default class Form extends Component {

state = {
  searchText: ''
}

onSearchChange = e => { //this function updates the state based on user input
  this.setState({ searchText: e.target.value });
  
}

handleSubmit = e => { //this will be called when the form is submitted
  e.preventDefault();
  this.props.onSearch(this.query.value); //to access the input field's value we pass this.query.value to onSearch
  e.currentTarget.reset(); //this resets input field
}

  render() {
    return ( //JSX inside ()
    <form 
    className="search-form" onSubmit={this.handleSubmit} > {/*pass the handleSubmit function to the form as a prop */}
        <input type="search" name="search" placeholder="Search" required onChange={this.onSearchChange} ref={(input) => this.query = input} //ref puts a reference to input on the search form class
 />
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>                 
    )
  }
    
}



