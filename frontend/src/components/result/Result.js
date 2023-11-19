import './Result.css';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';




function Result({documentID, gymName, gymAddress, gymRating}) {



  return (
       <div className='result-div'>
            <div className="result-gyms"> 
              <NavLink className='result-link' to={`/Gym/${encodeURIComponent(documentID)}`}> 
                <h1 className='gym-name'>{gymName}</h1> 
                <h2 className='gym-address'>{gymAddress}</h2> 
                <h2 className='gym-rating'>{gymRating}</h2>
              </NavLink>
            </div>
    
       </div>
  );
}

export default Result;
