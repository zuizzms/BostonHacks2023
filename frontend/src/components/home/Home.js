import React, {useState} from "react";
import styled from "styled-components";
import "./home.css"
import gymPic from "./images/MK4_8202-16x9-1-1600x900-1670337171.jpg"
import { NavLink } from 'react-router-dom';

function Home(){

    return(
            <div className = "home-main-content">
               <h3 className="home-title">See what others <br/>think about your gym </h3>
                <div id = "nav-wrapper">
                    <NavLink to='/results'>
                        <button className='home-results-button'>Results</button>
                    </NavLink>
                </div>
            </div>
    );
}

export default Home;