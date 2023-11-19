import React, {useState} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import "./rating.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

function Rating(){

    const[lgbtqRating, setLGBTRating] = useState('');
    const[genderRating, setGenderRating] = useState('');
    const[ageRating, setAgeRating] = useState('');
    const[boxVisible, setBoxVisible] = useState(false);

    const updateData = {
        'lgbtRating': lgbtqRating,
        'genderRating': genderRating,
        'ageRating':ageRating
    }
    const sendToDB = async() =>{
        setBoxVisible(true);
        try{
            const response = await fetch('locahost:8080/updateRating', {
                method: 'PUT',
                params:{
                    "id" : gymID
                },
                headers: {
                    "Content-Type" : "application/json"
                },
                body: updateData
            })
        } catch (e) {
            console.error(e)
        }
    }

    return(
        <Wrapper>
            <div className = "rating-header">
                <h2></h2>
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
                <button onClick = {sendToDB}>Submit</button>
                <div className = "alert-window" style = {{visibility: boxVisible ? 'visible':'hidden'}}>
                    <div className = "alert-window-child">
                        <p>Thank you for rating!</p>
                        <NavLink to = "/gym">
                            <button>Go Back to the Gym Page</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Rating;