import React, {useState} from "react";
import styled from "styled-components";
import "./home.css";
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