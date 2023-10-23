import styled from "styled-components";

// Styled Card Component
const CardContainer = styled.div`
  font-size: 18px;
  margin: 0;
  padding: 0;
  maxWidth: 100%;
  text-align: left;
  h2 {
    font-size: 1rem;
    padding: 0.5rem 0.5rem 0 0.5rem;
  }
  p {
    font-size: 0.8rem;
    padding: 0 0.5rem 0 0.5rem;
  }
`;

const ImageBackground = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 34.833rem;
  border-radius: 1.5rem 1.5rem 0 0;
  align-items: center;
`;


function Card({ data }) {
  return (
    <CardContainer>
      <ImageBackground
        id="image background"
        style={{ backgroundColor: data.bgColor }}
      >
        <img src={data.image} alt={data.title} style={{ maxWidth: "100%"}} />
      </ImageBackground>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </CardContainer>
  );
}

export default Card;
