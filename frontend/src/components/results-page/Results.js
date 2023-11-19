import './Results.css';
import Result from '../result/Result';
import React, {useEffect, useState} from "react"
import axios from 'axios';
import useSWR from 'swr'

function Results() {

  const {data} = useSWR('/gyms', () => fetch('http://localhost:8080/gyms').then(res => res.json()))

  const Results = [
      {
        gymName: "Gym 1",
        gymAddress: "123 Main St",
        gymRating: "4.5"
      },
      {
        gymName: "Gym 2",
        gymAddress: "456 Main St",
        gymRating: "4.0"
      },
      {
        gymName: "Gym 3",
        gymAddress: "789 Main St",
        gymRating: "3.5"
      }
    ];

  return (
    <div className="results-div"> 
      <div className="results-list">
        {data?.map(result => (
          <Result 
            key={result.gymName}
            id={result.query.id}
            gymName={result.gymName}
            gymAddress={result.gymAddress} 
            gymRating={result.gymRating}
          />
          ))}
      </div>
    </div>
  );
}

export default Results;
