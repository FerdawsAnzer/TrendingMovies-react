
import './css/App.css';
import Favorite from './pages/Favorites';  
import Home from './pages/Home'
import {Routes,Route} from "react-router-dom"
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
function App() {
  //this how we set a basic router so we be able to change from page to page using paths(writing them in browser)
  return (
   
      <MovieProvider>
     <NavBar />
      <main className='main-content'>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/favorites" element={<Favorite />}/>
    </Routes>
   </main>
   
    </MovieProvider>
  );
}


export default App;
