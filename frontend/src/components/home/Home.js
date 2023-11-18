import React, {useState} from "react";
import styled from "styled-components";
import "./home.css"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80%;
`
export function Home(){
    const [zipCode, setZipCode] = useState('');

    const startSearch = () =>{
    //implement API call here
    };


    return(
        <Wrapper>
            <div className = "main-content">
                <h3>See What Others</h3>
                <h3>Think About Your Gym</h3>
                <div className = "input-wrapper">
                    <label id = "zip-code">Search By Zipcode:</label>
                    <input type = "text" placeholder = "Your Zipcode" value = {zipCode} onChange = {(event) => setZipCode(event.target.value)} required></input>
                    <input type = "button" value = 'U+1F50D' onClick = {startSearch} id = "search"></input>
                </div>
            </div>
        </Wrapper>
    );
}