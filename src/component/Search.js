import React,{useState} from 'react'
import axios from 'axios'
import Typewriter from "typewriter-effect";
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [keyword,setKeyword] = useState('')
  const navigate = useNavigate()
  
  const [suggestions,setSuggestions] = useState([])
  const fetchSuggestions = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4c84e185bd2955be5432fcc0687697d8&language=en-US&query=${keyword}&page=1&include_adult=false`)
    setSuggestions(res.data.results)
    
  }
  const onChangeHandler = (e) => {
    setKeyword(e.target.value)
    if (e.target.value.length >=3) {
      
      fetchSuggestions()
    }
    if (e.target.value.length < 3) {
      setSuggestions([])
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(document.getElementsByTagName('option'))
    Array.from(document.getElementsByTagName('option')).forEach(element => {
      console.log(element.value)
      if (element.value === keyword) {
        // console.log(element.id)
        navigate(`/movie/${element.id}/${element.value}`,{replace:true})
        
        window.location.reload()

      }
      // console.log(element)
    });
  }

  return (
    <div className='titlePage'>
    {/* {suggestions.length > 0 ? console.log(suggestions.filter(movie => movie.original_language === "en")) : console.log(suggestions)} */}
    <h1 className='typing'>
        <Typewriter 
        options={{
    autoStart: true,
    loop: true,
  }}
          onInit={(typewriter) => {
            typewriter
            .typeString('MOVIES ON THE GO!')
            .pauseFor(2500)
            .deleteAll()       
            .start();
          } 
          }
          />
      
    </h1>
    <form onSubmit={(e) => handleSubmit(e) }>
    <div className='searchComponent'>
    <input type='text' id="search-text" placeholder='Search Movies, Series & Many More' list="datalistOptions" onChange={e=>onChangeHandler(e)} value={keyword} className='search large text-capitalize'/>
    <input type='text' id="search-text" placeholder='Search Movies' list="datalistOptions" onChange={e=>onChangeHandler(e)} value={keyword} className='search small text-capitalize'/>
    <datalist id="datalistOptions" >
    {suggestions.length > 0 ? suggestions.filter(movie => movie.original_language === "en").map(movie => (
        
          <option id={movie.id} key={movie.id} value={movie.title} />
          
          
        )) : null}
    </datalist>
    {/* {suggestions.length > 0 ?  <Link to={`/movie/${suggestions[0].id}/${suggestions[0].title}`}><input type='button' value='Search' className='btn01 ms-5'/></Link> : <input type='button' value='Search' className='btn01 ms-5'/>} */}
    <input type='submit' value='Search' className='btn01'/>
    </div> 
    </form> 
    </div>
  )
}

export default Search