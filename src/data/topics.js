export const CatPics = () => {
  console.log(CatPics)
  //fetch data from flickr
  axios 
    .get(
      ` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`
    )
    .then(response => { //set the response so that pics will be equal to the data array containing cat photos from flickr
      console.log(response)
      this.setState({
        cats: response.data.photos.photo, 
        loading: false //initialize a loading state to display a loading message
      });
    })
    .catch(error => { //this catch method outputs a message to the console, should axios fail to retrieve data
      console.log("Something went wrong, could not access data", error);
    });
}; 

export default CatPics;