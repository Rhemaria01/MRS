import React ,{useState,useEffect} from 'react'
import axios from 'axios';

const Cast = ({id}) => {
    const [cast,setCast] = useState([])
    const fetchCast = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4c84e185bd2955be5432fcc0687697d8&language=en-US`)
        setCast(res.data)
        // console.log(res.data)
    }
    useEffect(() => {
        fetchCast()
    },[])
    
    // typeof(cast.length) == typeof(undefined) ?  cast.cast.length > 0  ? console.log(cast) : console.log('loading01') : console.log('loading02')
  return (
      <>
    <div className="movie" style={{color: "#E8E8E8"}}>
    	<center>
		<h3>TOP CAST</h3>
	</center>
  </div>
  <div className="movie-content ">
        {
            typeof(cast.length) == typeof(undefined)  ? cast.cast.length > 0  ?

            cast.cast.slice(0,6).map(cast => {
                return (
                    <a href={`https://en.wikipedia.org/wiki/${cast.name}`}>
                    <div className="castcard card "  style={{width: "15rem",borderRadius:20}} key={cast.id}>
                    
                        <img style={{borderRadius: 20}} alt="Image not Available" src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}` } />
                        <div className="movie-content-cast-text">
                            <h4>{cast.name}</h4>
                            <h5>{`Character: ${cast.character}`}</h5>
                        </div>
                    </div>
                    </a>
                )
            }):
            <div className="d-flex justify-content-center" style={{height: "100vh"}}>
          {/* {console.log('loading')} */}
      <div className="spinner-border" style={{width: "3rem", height: "3rem" }} role="status">
      </div>
    </div> :
    <div className="d-flex justify-content-center" style={{height: "100vh"}}>
          {/* {console.log('loading')} */}
      <div className="spinner-border" style={{width: "3rem", height: "3rem" }} role="status">
      </div>
    </div>
        }
    </div>
    </>
  )
}

export default Cast