import './Header.css';
import { NavLink } from 'react-router-dom';
import React, {useState} from "react";


function Header() {

    const [loggedIn, setLoggedIn] = useState(false);

    const logIn = () => {
        setLoggedIn(true);
    }

  return (
    <div className='header-div'>

      <div className='header-left'> 
        <NavLink className='header-home-link' to='/'>
          <h1 className='header-app-name' >RateMyGym</h1>
        </NavLink>
      </div>
      <div className='header-right' >
        <NavLink className='header-log-in-link' to='/results'>Log in</NavLink>
      </div>

    </div>
  )
}

export default Header;
