import './Result.css';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;



function Result({documentID, gymName, gymAddress, gymRating}) {



  return (
       <Wrapper> 
          <NavLink className='result-link' to={`/Gym/${encodeURIComponent(documentID)}`}> 
            <div className="result-div"> 
              <h1 className='gym-name'>{gymName}</h1> 
              <h2 className='gym-adress'>{gymAddress}</h2> 
              <h2 className='gym-rating'>{gymRating}</h2>
            </div>
          </NavLink>
       </Wrapper>
  );
}

export default Result;
