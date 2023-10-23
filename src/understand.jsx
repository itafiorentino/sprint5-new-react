import React from "react";
import styled from "styled-components";

const StepIndicator = styled.div`
  display: flex;
`;

const StepBall = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "blue" : "gray")};
  margin: 0 5px;
`;

function Indicator({ totalSteps, currentStep }) {
  // Create an array with a length equal to totalSteps
  const balls = Array.from({ length: totalSteps }).map((_, index) => (
    <StepBall key={index} isActive={index === currentStep} />
  ));

  return (
    <StepIndicator>
      {balls} {/* This will display all the painted indicator balls */}
    </StepIndicator>
  );
}

export default Indicator;
