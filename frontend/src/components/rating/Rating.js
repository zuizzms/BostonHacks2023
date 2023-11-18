import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80%;
`
export function Rating(gymName){

    const[lgbtqRating, setLGBTRating] = useState('');
    const[genderRating, setGenderRating] = useState('');
    const[ageRating, setAgeRating] = useState('');

    return(
        <Wrapper>
            <div className = "rating-header">
                <h2>{gymName}</h2>
                <h4>Rate this gym according to these categories!</h4>
            </div>
            <div className = "rating-body">
                <label id = "lgbtq">LGBTQ+ Friendliness</label>
                <input type = "text"
                       placeholder = "Number from 1 to 5"
                       name = "lgbtqFriendliness"
                       id = "textInput"
                       value = {lgbtqRating}
                       onChange = {(event) => setLGBTRating(event.target.value)}
                       required>
                </input>
                <label id = "gender">Gender Diversity</label>
                <input type = "text"
                       placeholder = "Number from 1 to 5"
                       name = "genderDiversity"
                       id = "textInput"
                       value = {genderRating}
                       onChange = {(event) => setGenderRating(event.target.value)}
                       required>
                </input>
                <label id = "age">Age Diversity</label>
                <input type = "text"
                       placeholder = "Number from 1 to 5"
                       name = "ageDiversity"
                       value = {ageRating}
                       onChange = {(event) => setAgeRating(event.target.value)}
                       required>
                </input>
                <Link to = "gym">
                    <button>Submit Rating</button>
                </Link>
            </div>
        </Wrapper>
    )
}