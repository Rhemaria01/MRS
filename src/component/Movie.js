import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Search from './Search';
import Cast from './Cast';
import RecommendedMovies from './RecommendedMovies';
import Emoji from 'react-emoji-render';
import Genre from './Genre';
const Movie = (genres) => {
    const params = useParams();
    // console.log(params.name)
    const [movie,setMovie] = useState({})
    const [recommendedMovies, setRecommendedMovies] = useState({})
    const fetchMovie = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=4c84e185bd2955be5432fcc0687697d8&language=en-US`)
        setMovie(res.data)
        // console.log(res.data)
    }
    const fetchRecommendedMovies = async () => {
      fetch(`https://movierecommenderapi.herokuapp.com/movie/${params.name}`).then(res => res.json()).then(data => setRecommendedMovies(data.recommended_movie)).catch(err => console.log(err))
      
    }
    useEffect(() => {
        fetchMovie()
        fetchRecommendedMovies()
    },[])
    // recommendedMovies.length > 0 ? console.log(recommendedMovies) : console.log('loading')
  return (
    <>
    {window.scrollTo(0,0)}
  
    <div className="results mt-5">
	    <center>
	      <h2 id="name" className="text-uppercase">{movie.title}</h2>
	    </center>
	</div>
	<br></br>

    <div id="mycontent">
    <div id="mcontent">
      <div className="poster-md">
        <img className="poster" style={{borderRadius: 40, marginLeft: 90}} height={400} width={250} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

      </div>
      <div className="poster-sm text-center">
        <img className="poster" style={{borderRadius: 40, marginBottom: '5%'}} height={400} width={250} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />

      </div>
      <div id="details">
        <br/>
        <h6 id="title" style={{color:"white"}}>TITLE: &nbsp;{movie.title}</h6>
        <div>
  <h6 id="overview" style={{color: 'white', maxWidth: '85%'}}>OVERVIEW: <br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{movie.overview}</h6>
  <h6 id="vote_average" style={{color: 'white'}}>RATING: &nbsp;{movie.vote_average}/10 ({movie.vote_count} votes)</h6>
  {/* <h6 id="genres" style={{color: 'white'}}>GENRE: &nbsp;{movie.genres}</h6> */}
  <h6 id="date" style={{color: 'white'}}>RELEASE DATE: &nbsp;{movie.release_date}</h6>
  <h6 id="runtime" style={{color: 'white'}}>RUNTIME: &nbsp;{movie.runtime}&nbsp;minutes</h6>
  <h6 id="status" style={{color: 'white'}}>STATUS: &nbsp;{movie.status}</h6>
  
  </div>

      </div>
    </div>
  </div>
  {/* cast */}
  <Cast id={params.id}/>
  {/* recommended movies */}
  <div className="movie" style={{color: "#E8E8E8"}}>
    	<center>
		<h2 className='mt-5 mb-5'>Movies You May Like To Watch Next</h2>
	</center>
  </div>
  <div className="movie-content ">

  {recommendedMovies.length > 0 ?
   recommendedMovies.map((movie,index) => {
     return <div className={`poster-lg ${index>4? "d-none d-sm-block":""}`}  key={movie}>
     <RecommendedMovies movieId = {movie}/> 
     </div>}) 
   : <h1><Emoji text="😥"/>Sorry Recommendation not available</h1>}
  </div> 
  
  <Search/>
  {/* <Genre genres={genres}/> */}
    </>
    
  )
}

export default Movie