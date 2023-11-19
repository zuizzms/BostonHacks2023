import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import "./gym.css";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import result from "../result/Result";
import Result from "../result/Result";

function Gym(){
    const { documentID } = useParams();
    const {data} = useSWR('/gyms', () => fetch(`http://localhost:8080/gyms`).then(res => res.json()))
    
    return(
        <div className='gym-div'> 
             <div className = "main-content2">
                <div className = "gym-header">
                    <h1></h1>
                    <h3></h3>
                </div>
                <div className = "gym-body">
                    <div className = "rating">
                        <h5> Overall</h5>
                        <NavLink className='result-link' to={`/Rating/${encodeURIComponent(documentID)}`}>
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