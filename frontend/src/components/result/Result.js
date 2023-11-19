import './Result.css';
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;



function Result({gymName, gymAddress, gymRating}) {



  return (
    <Wrapper> 
        <div className="result-div"> 
        <h1>{gymName}</h1> 
        <h2>{gymAddress}</h2> 
        <h2>{gymRating}</h2>
      </div>
    </Wrapper>
  );
}

export default Result;
