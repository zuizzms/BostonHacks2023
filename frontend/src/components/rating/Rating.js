import React, {useState} from "react";
import styled from "styled-components";
import {NavLink, useParams} from "react-router-dom";
import "./rating.css";
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

function Rating() {
    const { documentID } = useParams();
    const url = 'http://localhost:8080/api/Gym/' + documentID;
    const {data} = useSWR(url, fetcher)

    const[lgbtqRating, setLGBTRating] = useState('');
    const[genderRating, setGenderRating] = useState('');
    const[ageRating, setAgeRating] = useState('');
    const[boxVisible, setBoxVisible] = useState(false);
    const[rated, setRated] = useState(false);

    const updateData = {
        'lgbtRating': lgbtqRating,
        'genderRating': genderRating,
        'ageRating':ageRating
    }

    const sendToDB = async() => {
        setBoxVisible(true);
        setRated(true);
        const url = 'http://localhost:8080/api/UpdateRating/' + documentID;
        console.log(updateData);
        
        fetch(url, {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(updateData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the response JSON
            })
        .then(updatedData => {
            console.log('Updated data:', updatedData);
            // Handle the updated data or perform additional actions
            })
        .catch(error => {
            console.error('There was a problem with the PUT request:', error);
            // Handle errors or perform fallback actions
            });
    }
    if (!data) {
        return null
    }
    return(
        <Wrapper>
            <div className = "rating-header">
                <h2>{data.gymName}</h2>
                <h4>Rate this gym according to these categories!</h4>
            </div>
            <div className = "rating-body">
                <label id = "lgbtq">LGBTQ+ Friendliness</label>
                {/* <input type = "text"
                       placeholder = "Number from 1 to 5"
                       name = "lgbtqFriendliness"
                       id = "textInput"
                       value = {lgbtqRating}
                       onChange = {(event) => setLGBTRating(event.target.value)}
                       required>
                </input> */}
                <div class="slidingcontainer">
                    <input type="range"
                    min="1"
                    max="5"
                    value={lgbtqRating}
                    class="slider"
                    id="myRange"
                    onChange = {(event) => setLGBTRating(event.target.value)}
                    required>
                    </input>
                </div>
                <label id = "gender">Gender Diversity</label>
                <div class="slidingcontainer">
                    <input type="range"
                    min="1"
                    max="5"
                    value={genderRating}
                    class="slider"
                    id="myRange"
                    onChange = {(event) => setGenderRating(event.target.value)}
                    required>
                    </input>
                </div>
                <label id = "age">Age Diversity</label>
                <div class="slidingcontainer">
                    <input type="range"
                    min="1"
                    max="5"
                    step="0.1"
                    value={ageRating}
                    class="slider"
                    id="myRange"
                    onChange = {(event) => setAgeRating(event.target.value)}
                    required>
                    </input>
                </div>
                <button onClick = {sendToDB}>Submit</button>
                <div className = "alert-window" style = {{visibility: boxVisible ? 'visible':'hidden'}}>
                    <div className = "alert-window-child">
                        <p>Thank you for rating!</p>
                        <NavLink className='result-link' to={`/Gym/${encodeURIComponent(documentID)}`}>
                        <button>Go Back to the Gym Page</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Rating;