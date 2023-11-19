import React, {useEffect} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import "./gym.css";
import {useState} from 'react';
import { useParams } from "react-router-dom";
import useSWR from 'swr';

function Gym() {
    const { documentID } = useParams();
    const url = 'http://localhost:8080/Gym/' + documentID;
    const {data} = useSWR('/', () => fetch('http://localhost:8080/Gym/').then(res => res.json()))
    // const Home = () => {
    //     const { documentID } = useParams();
    //     const [data, setData] = useState(null);
    //     const url = 'http://localhost:8080/api/gym/' + documentID;
    
    //     useEffect(() => {
    //         useSWR('/', () => fetch(url))
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);

    return(
        <div className='gym-div'> 
             <div className = " in-content">
                <div className = "gym-header">
                    <h1>Gym Name Placeholder</h1>
                    <h3>Gym Address Placeholder</h3>
                </div>
                <div className = "gym-body">
                    <div className = "rating">
                        <h5> Overall</h5>
                        <NavLink className='result-link' to={`/Rating/${encodeURIComponent(documentID)}`}>
                        <button>Rate this Gym</button>
                        </NavLink>
                    </div>
                    <p>LGBTQ+ Friendliness: {data.lgbtRating}</p>
                    <p>Gender Diversity: {data.genderRating}</p>
                    <p>Age Diversity: {data.ageRating}</p>
                </div>
            </div>
        </div>
    )
}

export default Gym;