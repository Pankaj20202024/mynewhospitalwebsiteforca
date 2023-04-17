import React from "react";
import styled from "styled-components";
export default function CarrerInnerImgSlider(props) {
  return (
    <Container>
      <div className="ImageContainer">
        <img src={props.item.img} alt="MyHospitalWebApp" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin: 3px;
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  .ImageContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 400ms ease-in-out;
      padding: 4px;
    }
  }

  &:hover > img {
    transform: scale(1.3);
    opacity: 0.75;
  }
`;
