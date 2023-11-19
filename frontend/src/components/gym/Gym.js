import React, {useEffect} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import "./gym.css";
import { useParams } from "react-router-dom";
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())

function Gym() {
    const { documentID } = useParams();
    const url = 'http://localhost:8080/api/Gym/' + documentID;
    // const {data} = useSWR('/', () => fetch(url).then(res => res.json()))
    const {data} = useSWR(url, fetcher)

    // const Home = () => {
    //     const { documentID } = useParams();
    //     const [data, setData] = useState(null);
    //     const url = 'http://localhost:8080/api/gym/' + documentID;
    
    //     useEffect(() => {
    //         useSWR('/', () => fetch(url))
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);

    if (!data) {
        return null
    }

    return(
        <div className='gym-div'> 
             <div className = " in-content">
                <div className = "gym-header">
                    <h1>{data.gymName}</h1>
                    <h3>{data.address}</h3>
                </div>
                <div className = "gym-body">
                    <div className = "rating">
                        <h5> Overall</h5>
                        <NavLink className='result-link' to={`/Rating/${encodeURIComponent(documentID)}`}>
                        <button>Rate this Gym</button>
                        </NavLink>
                    </div>
                    <p>LGBTQ+ Friendliness:</p>
                    <p>Gender Diversity: </p>
                    <p>Age Diversity:</p>
                </div>
            </div>
        </div>
    )
}

export default Gym;