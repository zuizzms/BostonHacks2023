import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 80%;
`
export function Gym(gymName, gymAddress, oRating, lRating, gRating, aRating){


    return(
        <Wrapper>
            <div className = "main-content">
                <div className = "gym-header">
                    <h1>{gymName}</h1>
                    <h3>{gymAddress}</h3>
                </div>
                <div className = "gym-body">
                    <div className = "rating">
                        <h5>{oRating} Overall</h5>
                        <Link to = "rate">
                            <button>Rate this Gym</button>
                        </Link>
                    </div>
                    <p>LGBTQ+ Friendliness: {lRating}</p>
                    <p>Gender Diversity: {gRating}</p>
                    <p>Age Diversity: {aRating}</p>
                </div>
            </div>
        </Wrapper>
    )
}