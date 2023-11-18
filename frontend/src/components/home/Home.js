import React, {useState} from "react";
import styled from "styled-components";
import "./home.css"
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
function Home(){

    return(
        <Wrapper>
            <div className = "main-content">
               <h3>See What Others Think About Your Gym</h3>
               <NavLink to='/results'>
                    <button className='home-results-button'>Results</button>
               </NavLink>
            </div>
        </Wrapper>
    );
}

export default Home;