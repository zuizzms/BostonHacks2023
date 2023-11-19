import React, {useState} from "react";
import styled from "styled-components";
import "./home.css";
import { NavLink } from 'react-router-dom';

function Home(){

    return(
            <div className = "home-main-content">
                <h3 className="home-title">
                    <p className="home-find">Find a gym in</p>
                    <p className="home-boston">Boston</p>
                </h3>
                <div id = "nav-wrapper">
                    <NavLink to='/results'>
                        <button className='home-results-button'>See gyms</button>
                    </NavLink>
                </div>
            </div>
    );
}

export default Home;