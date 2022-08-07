import React from 'react'
import logo from '../assets/logo.png'
import  {Link} from 'react-router-dom'
const Header = () => {
  return (
    
    <div className='header' fixed-top='true'>
    <Link to='/'>
      <img src={logo} className='logo'/>
    </Link>
    </div>
  )
}

export default Header