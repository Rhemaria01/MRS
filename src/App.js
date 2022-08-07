import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
// Components
import HomePage from './component/HomePage';
import React from 'react';
import SingleGenre from './component/SingleGenre';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Movie from './component/Movie';
// External CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//Route
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//State

function App() {
  const [genres,setGenres] = useState([])
    const fetchGenres = async () => {
        const res = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4c84e185bd2955be5432fcc0687697d8&language=en-US')
        setGenres(res.data.genres)
        // console.log(res.data.genres)
    }
    useEffect(() => {
        fetchGenres()
    },[])
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage  genres={genres}/>} />
          <Route path="/genre/:id" element={<SingleGenre  genres={genres}/>} />
          <Route path="/movie/:id/:name" element={<Movie  genres={genres}/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
