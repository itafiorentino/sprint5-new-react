import React from "react";
import styled from "styled-components";

//STYLED COMPONENT INDICATOR BALL
const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the items horizontally */
  align-items: center; /* Center the items vertically */
  /* Add any other styling you need for the container */
`;

const IndicatorBall = styled.div`
  width: ${(props) => (props.active ? "20px" : "5px")};
  height: 5px;
  border-radius: 5px;
  background-color: gray;
  margin: 3px;
  padding: 3px;
`;

function Indicator({ totalSteps, currentStep }) {
  return (
    <IndicatorContainer>
      {[...Array(totalSteps).keys()].map((index) => (
        <IndicatorBall
          key={index}
          active={index === currentStep ? true : false}
        />
      ))}
      {console.log("this is the array :" + [...Array(totalSteps).keys()])}
      {console.log("this is currentStep :" + currentStep)}
    </IndicatorContainer>
  );
}

export default Indicator;
