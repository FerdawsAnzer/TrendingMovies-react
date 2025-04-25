import MovieCard from "../components/MovieCard"
import {useState,useEffect} from "react"
import React from "react";
import {searchMovies, getPopularMovies } from "../services/api";

import "../css/Home.css"

//here we will display the movieCards
// in setErrorLoading()=> incase some error happened we will stop loading
function Home(){
  const[searchQuery,setSearchQuery]= useState("");
  //we want to make the fucntion getpopularMovies just one time when  the component get rendered
  //we will use state better then object,and we are storing the movies in state so anytime we udate the movie link will automatically rerender the component
 const[movies, setMovies]=useState([]);
 const[error,setError]=useState(null);
 const[loading,setLoading]= useState(true);
 useEffect(() => {
  const loadPopularMovies = async () => {
    try{
      const popularMovies = await getPopularMovies()
      setMovies(popularMovies)
  } catch(err){
    console.log(err);
    setError("Failed to load movies...");
  }finally{
  setLoading(false)
  }
  };
  loadPopularMovies();
 },[]);
 const handleSearch= async(e)=>{
  e.preventDefault()//prevent reload the page after clicking submit
//searchQuery return the value written in the inputbox
if(!searchQuery.trim()) return 
//this wont allow us to search when we already searching for something else
if(loading) return
 setLoading(true);
 try{
  const searchResults= await searchMovies(searchQuery)
  setMovies(searchResults);
  setError(null)
 }catch (err){
     setError("Failed to search movies...")
 }finally{//whether is false or succes we will no longer loading
  setLoading(false);
 }
setSearchQuery("");//make the search box empty when when click search
 };

  return (
  <div className="home">
    <form onSubmit={handleSearch} className="search-form">
      <input type="text" 
      placeholder="Search for movies..." className="search-input"   
      value={searchQuery}
      onChange={(e)=> setSearchQuery(e.target.value)}/>
      <button type="submit" className="search-button">Search</button>
    </form>

    {error && <div className="error-message">{error}</div>}
    {loading ? <div className="loading">Loading...</div>:<div className="movies-grid">
      {movies.map((movie)=> (<MovieCard movie={movie} key={movie.id}/>))}
    </div>
  }
  </div>
)}
export default Home