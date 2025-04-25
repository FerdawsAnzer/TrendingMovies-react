//what we will do here is not create a componenet even if it look like that but ,it job is procide some global state and some function that we can use from multiple places within our application
import { createContext,useState,useContext,useEffect } from "react";
const MovieContext=createContext();
export const useMovieContext =() => useContext(MovieContext)
//provide state to any of the components that are wrapped around it
export const MovieProvider=({children}) =>{
  const [favorites,setFavorites]=useState([])
  
  
    //we gonna look inside our local storage and see if we have any favorite
    useEffect(() => {
      const storedFavs = localStorage.getItem("favorites")
      //if there is anything set in favorite movie,we will store it in a list first thing we will convert it to Json then store it in Json
      if(storedFavs) setFavorites(JSON.parse(storedFavs)) 
    },[])
  //anytime ou favorites state change we will update what we are storing in local Storage
useEffect(() =>{
  localStorage.setItem('favorites',JSON.stringify(favorites))
},[favorites])
// we need to add 3 operations one remove operation to remove from favorites
//2 opration add to add favorites
//2 check operation to check if there is any favorites

const addToFavorites=(movie)=> {
  setFavorites(prev => [...prev,movie])//this how we update a state
  }
  //remove from favorites
  const removeFromFavorites =(movieId) =>{
    setFavorites(prev=> prev.filter(movie=>movie.id !== movieId))
  }
  // check all the movie Ids in our favorites  to check if it equal to the movie id that we are looking at  if it is we return true if it wasnt we return false
  const isFavorite= (movieId) =>{
    return favorites.some(movie => movie.id==movieId)
  }
  const value={
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}