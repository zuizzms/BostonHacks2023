import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header-div'>

      <div className='header-left'> 
        <h1 className='header-app-name'>RateMyGym</h1>
      </div>
      <div className='header-right' >
        <NavLink className='log-in-link' to='/results'>Log in</NavLink>
      </div>

    </div>
  )
}

export default Header;
