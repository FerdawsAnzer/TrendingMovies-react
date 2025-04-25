const API_KEY="fbce939b924dcd78d4f5732bea28596e";
const BASE_URL="https://api.themoviedb.org/3";

//functions that will perform the 2 operations of searching a movie and display the top ones for the day
//we gonna use expoart word with the functions so we will be able to call it anywhere
/*export  const getPopularMovies=async() =>{
  // async function is asychronous and it gonna take a second before we get the result
  const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
export  const searchMovies=async(query) =>{
  // async function is asychronous and it gonna take a second before we get the result
  const response= await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)
  }` );
  const data = await response.json()
  return data.results;
};*/
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};