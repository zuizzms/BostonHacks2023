import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import "./gym.css";
import { useParams } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80%; 
`
function Gym(){
    const { DocumentId } = useParams();  

    


    return(
        <div className='gym-div'> 
             <div className = "main-content">
                <div className = "gym-header">
                    <h1></h1>
                    <h3></h3>
                </div>
                <div className = "gym-body">
                    <div className = "rating">
                        <h5> Overall</h5>
                        <NavLink to = "/rating">
                            <button>Rate this Gym</button>
                        </NavLink>
                    </div>
                    <p>LGBTQ+ Friendliness: </p>
                    <p>Gender Diversity: </p>
                    <p>Age Diversity: </p>
                </div>
            </div>
        </div>
    )
}

export default Gym;