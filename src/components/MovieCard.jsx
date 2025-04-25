import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
function MovieCard({movie}){//movie will be an objects property because it will contient more than one infos about the movie
  //in src of image becuase we want to every time we call the function will work for diffrent card with diffrent values but same context we used a variable and the way is writen inside curly bracels

  //<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  ==. this links alllows the poster(picture) of movies to be shown on the page 

  const {isFavorite,addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite=isFavorite(movie.id)// this will tel us if we currently favorite or not ,and if we weere we want to chane the button of favorite to red ,so that why we will change the class  of the button to expression ,so if we wree favorite we will add the active class that has a design for red heart
  function onFavoriteClick(e){
   e.preventDefault()
   if(favorite)
     removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }
return <div className="movie-card">
  <div className="movie-poster">
  
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
    <div className="movie-overlay">
      <button className={`favorite-btn ${favorite ?"active": ""}`} onClick={onFavoriteClick}>♥</button>
    </div>
  </div>
  <div className="movie-info">
    <h3>{movie.title}</h3>
    <p>{movie.release_date?.split("-")[1]}/{movie.release_date?.split("-")[0]}</p>
  </div>
</div>


}
//?.split("-")[0]==> this make the date(days and month)to not be shown just the year will be 
export default MovieCard //after writing this we export the  componenet so we will be able to use it and call it in every file we want