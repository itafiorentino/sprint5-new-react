import { useState } from "react";
import Card from "./Card.jsx";
import Indicator from "./Indicator.jsx";
import styled from "styled-components";

const AppContainer = styled.div`
  font-size: 18px;
  font-family: nunito, sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 30%;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
  background-color: white;
  border-radius: 1.5rem;
`;

const InferiorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 0.5rem 1.5rem 0.5rem;
  max-width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  max-width: 100%;
`;

const RoundButton = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  text-align: center;
  font-size: 1rem;
  margin-left: 1rem;
`;




function App() {
  const tutorialData = [
    {
      image: "time_managment.svg",
      bgColor: "#4da2a9",
      title: "Dedica moltes horas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },

    {
      image: "programming.svg",
      bgColor: "#e0e0e3",
      title: "Programa projectes propis",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },

    {
      image: "meditation.svg",
      bgColor: "#fbd364",
      title: "Procura descansar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  // useState
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <AppContainer>
      <Card data={tutorialData[currentSlide]} />

      {/*THE CARD CONTENT IS RENDERED HERE*/}

      {/*THE BUTTONS ARE RENDERED HERE*/}
      <InferiorContainer>
        {/*THE INDICATOR BALLS ARE RENDERED HERE*/}
          <Indicator
            totalSteps={tutorialData.length}
            currentStep={currentSlide}
          />

        <ButtonsContainer>
          {currentSlide > 0 && (
            <RoundButton
              id="previous-slide"
              onClick={() => setCurrentSlide(currentSlide - 1)}
            >
              ←
            </RoundButton>
          )}
          {currentSlide <= 1 && (
            <RoundButton
              id="next-slide"
              onClick={() => setCurrentSlide(currentSlide + 1)}
              style={{ backgroundColor: "black", color: "white" }}
            >
              →
            </RoundButton>
          )}
        </ButtonsContainer>
      </InferiorContainer>
    </AppContainer>
  );
}

export default App;
