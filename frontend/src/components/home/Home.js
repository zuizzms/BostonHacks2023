import React, {useState} from "react";
import styled from "styled-components";
import "./home.css"
import gymPic from "./images/MK4_8202-16x9-1-1600x900-1670337171.jpg"
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width:100%;
  overflow: hidden;
`;

function Home(){

    return(
        <Wrapper>
            <img src = {gymPic} alt = "photo of a gym"></img>
            <div className = "main-content">
               <h3>See What Others <br></br>Think About Your Gym</h3>
                <div id = "nav-wrapper">
                    <NavLink to='/results'>
                        <button className='home-results-button'>Results</button>
                    </NavLink>
                </div>
            </div>
        </Wrapper>
    );
}

export default Home;